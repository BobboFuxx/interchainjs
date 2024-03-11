import { Coin } from "../codegen/cosmos/base/v1beta1/coin";

export interface AminoMessage {
  type: string;
  value: any;
}

export interface StdFee {
  amount: Coin[];
  gas: string;
  /** The granter address that is used for paying with feegrants */
  granter?: string;
  /** The fee payer address. The payer must have signed the transaction. */
  payer?: string;
}

export interface StdSignDoc {
  chain_id: string;
  account_number: string;
  sequence: string;
  fee: StdFee;
  msgs: AminoMessage[];
  memo: string;
}

export interface AminoConverter {
  typeUrl: string;
  aminoType: string;
  fromAmino: (data: any) => any;
  toAmino: (data: any) => any;
}