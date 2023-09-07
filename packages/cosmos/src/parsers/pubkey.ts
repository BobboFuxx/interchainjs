import { PubKey as PubKeyEd25519 } from "../../interchain/proto/crypto.ed25519";
import { PubKey as PubKeySecp256k1 } from "../../interchain/proto/crypto.secp256k1";
import { PubKey as PubKeySecp256r1 } from "../../interchain/proto/crypto.secp256r1";
import { ParserData, TelescopeConst } from "../../types";
import { toParserArgs } from "../utils/parser";
import { BaseParser } from "./base";

export class PubKeyParser<ProtoT, AminoT> extends BaseParser<ProtoT, AminoT> {
  constructor(args: ParserData<ProtoT, AminoT>) {
    super(args);
  }

  static fromParser<ProtoT, AminoT>(parser: BaseParser<ProtoT, AminoT>) {
    return new PubKeyParser(parser.args);
  }

  static fromMeta<ProtoT, AminoT>(data: TelescopeConst<ProtoT, AminoT>) {
    return new PubKeyParser(toParserArgs(data));
  }

  protected _assertKeyType(key: Uint8Array) {
    switch (this.protoType) {
      case "/cosmos.crypto.secp256k1.PubKey":
        if (key.length !== 33 || (key[0] !== 0x02 && key[0] !== 0x03)) {
          throw new Error(
            "Public key must be compressed secp256k1, i.e. 33 bytes starting with 0x02 or 0x03"
          );
        }
        return true;
      default:
        return true;
    }
  }

  _assertProtoValue(data: ProtoT): boolean {
    return this._assertKeyType(
      (data as PubKeyEd25519 | PubKeySecp256k1 | PubKeySecp256r1).key
    );
  }

  _assertAminoValue(data: AminoT): boolean {
    return this._assertKeyType(
      (data as PubKeyEd25519 | PubKeySecp256k1 | PubKeySecp256r1).key
    );
  }
}