import { fromBase64, HttpEndpoint } from "@sign/core";

import {
  AminoSigner,
  Any,
  AuthInfo,
  BinaryWriter,
  DocUtils,
  EncodeObject,
  FeeUtils,
  MsgUtils,
  OfflineAminoSigner,
  OfflineDirectSigner,
  OfflineSigner,
  PubKey as Secp256k1PubKey,
  SignDoc,
  SignerData,
  SignerInfo,
  SignerOptions,
  StdFee,
  StdSignDoc,
  TxBody,
  TxRaw,
} from "../../cosmos-amino";

/**
 * implement the same methods as what in `cosmjs` signingClient
 */
export class CosmjsSigner {
  aminoSigner: AminoSigner;
  private _getAccounts: OfflineSigner["getAccounts"];
  private _signAmino?: OfflineAminoSigner["signAmino"];
  private _signDirect?: OfflineDirectSigner["signDirect"];

  constructor(aminoSigner: AminoSigner, offlineSigner: OfflineSigner) {
    this.aminoSigner = aminoSigner;
    this._getAccounts = offlineSigner.getAccounts;
    this._signAmino = (offlineSigner as OfflineAminoSigner).signAmino;
    this._signDirect = (offlineSigner as OfflineDirectSigner).signDirect;
  }

  static connectWithSigner(
    endpoint: string | HttpEndpoint,
    signer: OfflineSigner,
    options: SignerOptions = {}
  ): CosmjsSigner {
    const aminoSigner = new AminoSigner(
      options.registry || [],
      options.aminoConverters || {}
    ).on(endpoint);
    return new CosmjsSigner(aminoSigner, signer);
  }

  public async sign(
    signerAddress: string,
    messages: EncodeObject[],
    fee: StdFee,
    memo: string,
    explicitSignerData?: SignerData
  ): Promise<TxRaw> {
    let signerData: SignerData;
    if (explicitSignerData) {
      signerData = explicitSignerData;
    } else {
      const { accountNumber, sequence } =
        await this.aminoSigner.getSequence(signerAddress);
      const chainId = await this.aminoSigner.getChainId();
      signerData = {
        accountNumber: accountNumber,
        sequence: sequence,
        chainId: chainId,
      };
    }
    return this._signDirect
      ? this.signDirect(signerAddress, messages, fee, memo, signerData)
      : this.signAmino(signerAddress, messages, fee, memo, signerData);
  }

  private async getPubkeyFromAddress(address: string): Promise<Any> {
    const accounts = await this._getAccounts();
    const account = accounts.find((account) => account.address === address);
    if (!account) {
      throw new Error(
        `No such account found in OfflineSigner for signerAddress ${address}`
      );
    }
    let typeUrl: string;
    let PubKey: {
      encode(message: { key: Uint8Array }, writer?: BinaryWriter): BinaryWriter;
    };
    switch (account.algo) {
      case "secp256k1":
        typeUrl = "/cosmos.crypto.secp256k1.PubKey";
        PubKey = Secp256k1PubKey;
        break;
      default:
        throw new Error(`${account.algo} not supported.`);
    }
    const publicKey: Any = {
      typeUrl,
      value: PubKey.encode({
        key: account.pubkey,
      }).finish(),
    };
    return publicKey;
  }

  private async signDirect(
    signerAddress: string,
    messages: EncodeObject[],
    fee: StdFee,
    memo: string,
    { accountNumber, sequence, chainId }: SignerData
  ): Promise<TxRaw> {
    if (!this._signDirect) {
      throw new Error("`signDirect` not implemented in provided OfflineSigner");
    }
    const txBody = TxBody.fromPartial({
      messages: MsgUtils.EncodeObject.encode(
        messages,
        this.aminoSigner.getGeneratedFromTypeUrl
      ),
      memo,
    });
    const authInfo = AuthInfo.fromPartial({
      signerInfos: [
        SignerInfo.fromPartial({
          publicKey: await this.getPubkeyFromAddress(signerAddress),
          sequence: BigInt(sequence),
        }),
      ],
      fee: FeeUtils.StdFee.toFee(fee),
    });
    const doc: SignDoc = {
      bodyBytes: TxBody.encode(txBody).finish(),
      authInfoBytes: AuthInfo.encode(authInfo).finish(),
      chainId,
      accountNumber,
    };
    const { signature, signed } = await this._signDirect(signerAddress, doc);
    const txRaw = TxRaw.fromPartial({
      bodyBytes: signed.bodyBytes,
      authInfoBytes: signed.authInfoBytes,
      signatures: [fromBase64(signature.signature)],
    });
    return txRaw;
  }

  private async signAmino(
    signerAddress: string,
    messages: EncodeObject[],
    fee: StdFee,
    memo: string,
    { accountNumber, sequence, chainId }: SignerData
  ): Promise<TxRaw> {
    if (!this._signAmino) {
      throw new Error("`signAmino` not implemented in provided OfflineSigner");
    }
    const doc: StdSignDoc = {
      chain_id: chainId,
      account_number: accountNumber.toString(),
      sequence: sequence.toString(),
      fee,
      msgs: MsgUtils.EncodeObject.toAminoMsg(
        messages,
        this.aminoSigner.getGeneratedFromTypeUrl
      ),
      memo,
    };
    const { signature, signed } = await this._signAmino(signerAddress, doc);
    const { bodyBytes, authInfoBytes } = DocUtils.StdSignDoc.toSignDoc(
      signed,
      await this.getPubkeyFromAddress(signerAddress),
      this.aminoSigner.getGeneratedFromAminoType
    );
    const txRaw = TxRaw.fromPartial({
      bodyBytes,
      authInfoBytes,
      signatures: [fromBase64(signature.signature)],
    });
    return txRaw;
  }
}
