import { fromBase64, toHex } from "@sign/core";

import { Rpc } from "../types";

function createRpc(endpoint: string): Rpc {
  return {
    endpoint,
    request: async (
      service: string,
      method: string,
      data: Uint8Array
    ): Promise<Uint8Array> => {
      const resp = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: 992919398242,
          jsonrpc: "2.0",
          method: "abci_query",
          params: {
            data: toHex(data),
            path: `/${service}/${method}`,
            prove: false,
          },
        }),
      });
      const json = await resp.json();
      try {
        const result = fromBase64(json["result"]["response"]["value"]);
        return result;
      } catch (error) {
        throw new Error(`Request Error: ${json["result"]["response"]["log"]}`);
      }
    },
  };
}

export class Query {
  rpc: Rpc;

  constructor(endpoint: string) {
    this.rpc = createRpc(endpoint);
  }

  get endpoint() {
    return this.rpc.endpoint;
  }

  about<T>(Cls: { new (rpc: Rpc): T }) {
    return new Cls(this.rpc);
  }
}
