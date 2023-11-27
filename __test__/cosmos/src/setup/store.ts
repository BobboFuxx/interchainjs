import { Secp256k1HdWallet } from "@cosmjs/amino";
import { SigningStargateClient } from "@cosmjs/stargate";
import { AminoSigner } from "@sign/cosmos-amino";
import {
  CosmjsSigner,
  OfflineSigner,
  Secp256k1Wallet,
} from "@sign/cosmos-cosmjs";
import {
  CosmWasmAminoSigner,
  CosmWasmCosmjsSigner,
} from "@sign/cosmos-cosmwasm-stargate";

import { ChainData } from "./data";
import { QueryParserExt } from "./query";

export class Store {
  readonly query: QueryParserExt;
  readonly offlineSigner: OfflineSigner;
  readonly wallet: Secp256k1Wallet;
  readonly aminoSigner: AminoSigner;
  readonly cosmjsSigner: CosmjsSigner;
  readonly signingClient: SigningStargateClient;

  constructor(
    public readonly chainData: ChainData,
    public readonly seed: string,
    public readonly signType: "direct" | "amino" = "direct"
  ) {
    this.query = new QueryParserExt(chainData.rpc);
    this.wallet = Secp256k1Wallet.fromMnemonic(seed, {
      prefix: this.chainData.prefix,
    });
    this.offlineSigner =
      signType === "direct"
        ? this.wallet.toOfflineDirectSigner()
        : this.wallet.toOfflineAminoSigner();
    this.aminoSigner = new CosmWasmAminoSigner()
      .on(this.chainData.rpc)
      .by(this.auth);
    this.cosmjsSigner = CosmWasmCosmjsSigner.connectWithSigner(
      this.chainData.rpc,
      this.offlineSigner
    );
  }

  get auth() {
    return this.wallet.auths[0];
  }

  async getWalletWithCosmjs() {
    return await Secp256k1HdWallet.fromMnemonic(this.seed, {
      prefix: this.chainData.prefix,
    });
  }

  async getSigningClient() {
    const wallet = await this.getWalletWithCosmjs();
    return await SigningStargateClient.connectWithSigner(
      this.chainData.rpc,
      wallet
    );
  }
}