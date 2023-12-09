import { HttpEndpoint } from "@cosmonauts/core";
import { AminoConverters, AminoSigner } from "@cosmonauts/cosmos-amino";
import {
  CosmjsSigner,
  OfflineSigner,
  SignerOptions,
} from "@cosmonauts/cosmos-cosmjs";
import { Registry } from "@cosmonauts/cosmos-proto";
import {
  StargateAminoSigner,
  StargateCosmjsSigner,
  StargateSigner,
} from "@cosmonauts/cosmos-stargate";

import { CosmWasmImpl } from "./codegen/service-ops";
import { cosmwasmAminoConverters, cosmwasmRegistry } from "./registry";

export class CosmWasmSigner extends StargateSigner {
  constructor(registry?: Registry) {
    super(cosmwasmRegistry);
    this.register(registry);
  }
}

export class CosmWasmAminoSigner extends StargateAminoSigner {
  constructor(registry?: Registry, aminoConverters?: AminoConverters) {
    super(cosmwasmRegistry, cosmwasmAminoConverters);
    this.registerWithAmino(registry, aminoConverters);
  }
}

export interface CosmWasmCosmjsSigner
  extends StargateCosmjsSigner,
    CosmWasmImpl {}

export class CosmWasmCosmjsSigner extends StargateCosmjsSigner {
  constructor(
    aminoSigner: AminoSigner,
    offlineSigner: OfflineSigner,
    options: SignerOptions = {}
  ) {
    super(aminoSigner, offlineSigner, options);
    this.aminoSigner.registerWithAmino(
      cosmwasmRegistry,
      cosmwasmAminoConverters
    );
    const stargateImpl = new CosmWasmImpl();
    stargateImpl.init({
      ...this.aminoSigner.query.abciQuery,
      signAndBroadcast: this.signAndBroadcast,
    });
    Object.assign(this, stargateImpl);
  }

  static connectWithSigner(
    endpoint: string | HttpEndpoint,
    signer: OfflineSigner,
    options: SignerOptions = {}
  ): CosmjsSigner {
    const aminoSigner = new AminoSigner().on(endpoint);
    const cosmWasmSigner = new CosmWasmCosmjsSigner(
      aminoSigner,
      signer,
      options
    );
    return cosmWasmSigner;
  }
}
