import { Auth, SignerConfig } from "@cosmonauts/types";
import { Key } from "./key";

export class BaseSigner {
  protected _auth: Auth;
  protected _config: SignerConfig;

  constructor(auth: Auth, config: SignerConfig) {
    this._auth = auth;
    this._config = config;
  }

  get auth() {
    return this._auth;
  }

  get config() {
    return this._config;
  }

  get address() {
    return this.config.publicKey.toAddress(
      this.auth.getPublicKey(this.config.publicKey.isCompressed)
    );
  }

  setAuth(auth: Auth) {
    this._auth = auth;
  }

  setConfig(config: SignerConfig) {
    this._config = config;
  }

  signArbitrary(message: Uint8Array): Key {
    const signature = this.auth.sign(this.config.message.hash(message));
    return this.config.signature.toCompact(signature, this.auth.algo);
  }

  verifyArbitrary(message: Uint8Array, signature: Key): boolean {
    return this.auth.verify(
      this.config.message.hash(message),
      this.config.signature.fromCompact(signature, this.auth.algo)
    );
  }
}