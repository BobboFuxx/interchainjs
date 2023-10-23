import { TelescopeGeneratedType } from "../../../types";
import {
  MsgMultiSend,
  MsgSend,
  MsgSetSendEnabled,
  MsgUpdateParams,
} from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType]> = [
  ["/cosmos.bank.v1beta1.MsgSend", MsgSend],
  ["/cosmos.bank.v1beta1.MsgMultiSend", MsgMultiSend],
  ["/cosmos.bank.v1beta1.MsgUpdateParams", MsgUpdateParams],
  ["/cosmos.bank.v1beta1.MsgSetSendEnabled", MsgSetSendEnabled],
];
