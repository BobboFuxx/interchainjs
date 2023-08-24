/* eslint-disable no-console */
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
/**
 * if met certificate error, run `export NODE_TLS_REJECT_UNAUTHORIZED=0` in terminal
 */

import { toBase64 } from "@sign/core";
import { Auth } from "@sign/core";

import { MsgSendParser } from "../src/const";
import { Secp256k1Auth } from "../src/core/auth";
import { cosmoshubAddress, mnemonic } from "./test-data";

const timeout = 50000;

describe("MsgSend Sign", () => {
  const msgSend = {
    amount: [
      {
        amount: "1",
        denom: "uatom",
      },
    ],
    fromAddress: cosmoshubAddress,
    toAddress: cosmoshubAddress,
  };
  const msgs = [msgSend];
  // const rpcEndpoint = "https://rpc-cosmoshub.blockapsis.com";
  const rpcEndpoint = "https://cosmos-rpc.quickapi.com:443";

  let auth: Auth;

  test("prepare auth", async () => {
    auth = await Secp256k1Auth.fromMnemonic(mnemonic);
  });

  test(
    "should successfully run",
    async () => {
      const txRaw = await MsgSendParser.on(rpcEndpoint).by(auth).sign({ msgs });
      console.log(toBase64(txRaw.bodyBytes));
      console.log(toBase64(txRaw.authInfoBytes));
      console.log(toBase64(txRaw.signatures[0]));
    },
    timeout
  );
});
