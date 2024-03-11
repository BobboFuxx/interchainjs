import { bytes as assertBytes } from "@noble/hashes/_assert";
import { sha256 } from "@noble/hashes/sha256";
import { BroadcastOptions, FeeOptions } from "./types/direct";
import { SignerConfig, Signature } from "@cosmonauts/types";
import { ripemd160 } from "@noble/hashes/ripemd160";
import { Key } from "@cosmonauts/utils";
import { secp256k1 } from "@noble/curves/secp256k1";

export const defaultBroadcastOptions: BroadcastOptions = {
  checkTx: true,
  deliverTx: false,
};

export const defaultFeeOptions: FeeOptions = {
  multiplier: 1.6,
  gasPrice: "average",
};

export const defaultHdPath = {
  secp256k1: "m/44'/118'/0'/0/0",
};

export const defaultSignerConfig: SignerConfig = {
  publicKey: {
    isCompressed: true,
    toAddress: (publicKey: Key) => Key.from(ripemd160(sha256(publicKey.value))),
  },
  message: {
    hash: (message: Uint8Array) => {
      const hashed = sha256(message);
      assertBytes(hashed);
      return hashed;
    },
  },
  signature: {
    toCompact: (signature: Signature, algo: string) => {
      switch (algo) {
        case "secp256k1":
          const sig = new secp256k1.Signature(
            signature.r.toBigInt(),
            signature.s.toBigInt(),
            // @ts-ignore
            signature.recovery
          );
          return Key.from(sig.toCompactRawBytes());
        case "ed25519":
          throw new Error("Not implemented yet");
        default:
          throw new Error(`Unidentified algorithm: ${algo}`);
      }
    },
    fromCompact: (key: Key, algo: string) => {
      switch (algo) {
        case "secp256k1":
          const sig = secp256k1.Signature.fromCompact(key.toHex());
          return {
            r: Key.fromBigInt(sig.r),
            s: Key.fromBigInt(sig.s),
            recovery: sig.recovery,
          };
        case "ed25519":
          throw new Error("Not implemented yet");
        default:
          throw new Error(`Unidentified algorithm: ${algo}`);
      }
      // return {
      //   r: key.slice(0, 32),
      //   s: key.slice(32, 64),
      // };
    },
  },
};