import {
  fromBase64,
  fromBigInt,
  fromHex,
  toBase64,
  toBigInt,
  toHex,
} from "./utils/encoding";
import { bech32 } from "bech32";

export class Key {
  constructor(public readonly value: Uint8Array) {}

  static from(value: Uint8Array) {
    return new Key(value);
  }

  static fromHex(value: string) {
    return value.startsWith("0x")
      ? new Key(fromHex(value.slice(2)))
      : new Key(fromHex(value));
  }

  static fromBase64(value: string) {
    return new Key(fromBase64(value));
  }

  static fromBigInt(value: bigint) {
    return new Key(fromBigInt(value));
  }

  toHex() {
    return `0x${toHex(this.value)}`;
  }

  toBase64() {
    return toBase64(this.value);
  }

  toBigInt() {
    return toBigInt(this.value);
  }

  toBech32(prefix: string, limit?: number) {
    return bech32.encode(prefix, bech32.toWords(this.value), limit);
  }
}

export function compressPubKey(key: Key) {
  return Key.fromHex(
    `02${toHex(
      key.value.slice(
        1,
        Number.parseInt(((key.value.length - 1) / 2 + 1).toString())
      )
    )}`
  );
}
