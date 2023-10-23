import { MemberRequest, MemberRequestAmino, VoteOption, ProposalExecutorResult, voteOptionFromJSON, voteOptionToJSON, proposalExecutorResultFromJSON, proposalExecutorResultToJSON } from "./types";
import { Any, AnyAmino } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
/** Exec defines modes of execution of a proposal on creation or on new vote. */
export enum Exec {
  /**
   * EXEC_UNSPECIFIED - An empty value means that there should be a separate
   * MsgExec request for the proposal to execute.
   */
  EXEC_UNSPECIFIED = 0,
  /**
   * EXEC_TRY - Try to execute the proposal immediately.
   * If the proposal is not allowed per the DecisionPolicy,
   * the proposal will still be open and could
   * be executed at a later point.
   */
  EXEC_TRY = 1,
  UNRECOGNIZED = -1,
}
export const ExecAmino = Exec;
export function execFromJSON(object: any): Exec {
  switch (object) {
    case 0:
    case "EXEC_UNSPECIFIED":
      return Exec.EXEC_UNSPECIFIED;
    case 1:
    case "EXEC_TRY":
      return Exec.EXEC_TRY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Exec.UNRECOGNIZED;
  }
}
export function execToJSON(object: Exec): string {
  switch (object) {
    case Exec.EXEC_UNSPECIFIED:
      return "EXEC_UNSPECIFIED";
    case Exec.EXEC_TRY:
      return "EXEC_TRY";
    case Exec.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** MsgCreateGroup is the Msg/CreateGroup request type. */
export interface MsgCreateGroup {
  /** admin is the account address of the group admin. */
  admin: string;
  /** members defines the group members. */
  members: MemberRequest[];
  /** metadata is any arbitrary metadata to attached to the group. */
  metadata: string;
}
export interface MsgCreateGroupProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgCreateGroup";
  value: Uint8Array;
}
/** MsgCreateGroup is the Msg/CreateGroup request type. */
export interface MsgCreateGroupAmino {
  /** admin is the account address of the group admin. */
  admin: string;
  /** members defines the group members. */
  members: MemberRequestAmino[];
  /** metadata is any arbitrary metadata to attached to the group. */
  metadata: string;
}
export interface MsgCreateGroupAminoMsg {
  type: "cosmos-sdk/MsgCreateGroup";
  value: MsgCreateGroupAmino;
}
/** MsgCreateGroupResponse is the Msg/CreateGroup response type. */
export interface MsgCreateGroupResponse {
  /** group_id is the unique ID of the newly created group. */
  groupId: bigint;
}
export interface MsgCreateGroupResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgCreateGroupResponse";
  value: Uint8Array;
}
/** MsgCreateGroupResponse is the Msg/CreateGroup response type. */
export interface MsgCreateGroupResponseAmino {
  /** group_id is the unique ID of the newly created group. */
  group_id: string;
}
export interface MsgCreateGroupResponseAminoMsg {
  type: "cosmos-sdk/MsgCreateGroupResponse";
  value: MsgCreateGroupResponseAmino;
}
/** MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type. */
export interface MsgUpdateGroupMembers {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  groupId: bigint;
  /**
   * member_updates is the list of members to update,
   * set weight to 0 to remove a member.
   */
  memberUpdates: MemberRequest[];
}
export interface MsgUpdateGroupMembersProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers";
  value: Uint8Array;
}
/** MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type. */
export interface MsgUpdateGroupMembersAmino {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  group_id: string;
  /**
   * member_updates is the list of members to update,
   * set weight to 0 to remove a member.
   */
  member_updates: MemberRequestAmino[];
}
export interface MsgUpdateGroupMembersAminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupMembers";
  value: MsgUpdateGroupMembersAmino;
}
/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */
export interface MsgUpdateGroupMembersResponse {}
export interface MsgUpdateGroupMembersResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembersResponse";
  value: Uint8Array;
}
/** MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type. */
export interface MsgUpdateGroupMembersResponseAmino {}
export interface MsgUpdateGroupMembersResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupMembersResponse";
  value: MsgUpdateGroupMembersResponseAmino;
}
/** MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type. */
export interface MsgUpdateGroupAdmin {
  /** admin is the current account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  groupId: bigint;
  /** new_admin is the group new admin account address. */
  newAdmin: string;
}
export interface MsgUpdateGroupAdminProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin";
  value: Uint8Array;
}
/** MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type. */
export interface MsgUpdateGroupAdminAmino {
  /** admin is the current account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  group_id: string;
  /** new_admin is the group new admin account address. */
  new_admin: string;
}
export interface MsgUpdateGroupAdminAminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupAdmin";
  value: MsgUpdateGroupAdminAmino;
}
/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */
export interface MsgUpdateGroupAdminResponse {}
export interface MsgUpdateGroupAdminResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdminResponse";
  value: Uint8Array;
}
/** MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type. */
export interface MsgUpdateGroupAdminResponseAmino {}
export interface MsgUpdateGroupAdminResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupAdminResponse";
  value: MsgUpdateGroupAdminResponseAmino;
}
/** MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type. */
export interface MsgUpdateGroupMetadata {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  groupId: bigint;
  /** metadata is the updated group's metadata. */
  metadata: string;
}
export interface MsgUpdateGroupMetadataProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata";
  value: Uint8Array;
}
/** MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type. */
export interface MsgUpdateGroupMetadataAmino {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  group_id: string;
  /** metadata is the updated group's metadata. */
  metadata: string;
}
export interface MsgUpdateGroupMetadataAminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupMetadata";
  value: MsgUpdateGroupMetadataAmino;
}
/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */
export interface MsgUpdateGroupMetadataResponse {}
export interface MsgUpdateGroupMetadataResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadataResponse";
  value: Uint8Array;
}
/** MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type. */
export interface MsgUpdateGroupMetadataResponseAmino {}
export interface MsgUpdateGroupMetadataResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupMetadataResponse";
  value: MsgUpdateGroupMetadataResponseAmino;
}
/** MsgCreateGroupPolicy is the Msg/CreateGroupPolicy request type. */
export interface MsgCreateGroupPolicy {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  groupId: bigint;
  /** metadata is any arbitrary metadata attached to the group policy. */
  metadata: string;
  /** decision_policy specifies the group policy's decision policy. */
  decisionPolicy: Any;
}
export interface MsgCreateGroupPolicyProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy";
  value: Uint8Array;
}
/** MsgCreateGroupPolicy is the Msg/CreateGroupPolicy request type. */
export interface MsgCreateGroupPolicyAmino {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_id is the unique ID of the group. */
  group_id: string;
  /** metadata is any arbitrary metadata attached to the group policy. */
  metadata: string;
  /** decision_policy specifies the group policy's decision policy. */
  decision_policy?: AnyAmino;
}
export interface MsgCreateGroupPolicyAminoMsg {
  type: "cosmos-sdk/MsgCreateGroupPolicy";
  value: MsgCreateGroupPolicyAmino;
}
/** MsgCreateGroupPolicyResponse is the Msg/CreateGroupPolicy response type. */
export interface MsgCreateGroupPolicyResponse {
  /** address is the account address of the newly created group policy. */
  address: string;
}
export interface MsgCreateGroupPolicyResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicyResponse";
  value: Uint8Array;
}
/** MsgCreateGroupPolicyResponse is the Msg/CreateGroupPolicy response type. */
export interface MsgCreateGroupPolicyResponseAmino {
  /** address is the account address of the newly created group policy. */
  address: string;
}
export interface MsgCreateGroupPolicyResponseAminoMsg {
  type: "cosmos-sdk/MsgCreateGroupPolicyResponse";
  value: MsgCreateGroupPolicyResponseAmino;
}
/** MsgUpdateGroupPolicyAdmin is the Msg/UpdateGroupPolicyAdmin request type. */
export interface MsgUpdateGroupPolicyAdmin {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_policy_address is the account address of the group policy. */
  groupPolicyAddress: string;
  /** new_admin is the new group policy admin. */
  newAdmin: string;
}
export interface MsgUpdateGroupPolicyAdminProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin";
  value: Uint8Array;
}
/** MsgUpdateGroupPolicyAdmin is the Msg/UpdateGroupPolicyAdmin request type. */
export interface MsgUpdateGroupPolicyAdminAmino {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_policy_address is the account address of the group policy. */
  group_policy_address: string;
  /** new_admin is the new group policy admin. */
  new_admin: string;
}
export interface MsgUpdateGroupPolicyAdminAminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupPolicyAdmin";
  value: MsgUpdateGroupPolicyAdminAmino;
}
/** MsgUpdateGroupPolicyAdminResponse is the Msg/UpdateGroupPolicyAdmin response type. */
export interface MsgUpdateGroupPolicyAdminResponse {}
export interface MsgUpdateGroupPolicyAdminResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse";
  value: Uint8Array;
}
/** MsgUpdateGroupPolicyAdminResponse is the Msg/UpdateGroupPolicyAdmin response type. */
export interface MsgUpdateGroupPolicyAdminResponseAmino {}
export interface MsgUpdateGroupPolicyAdminResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupPolicyAdminResponse";
  value: MsgUpdateGroupPolicyAdminResponseAmino;
}
/** MsgCreateGroupWithPolicy is the Msg/CreateGroupWithPolicy request type. */
export interface MsgCreateGroupWithPolicy {
  /** admin is the account address of the group and group policy admin. */
  admin: string;
  /** members defines the group members. */
  members: MemberRequest[];
  /** group_metadata is any arbitrary metadata attached to the group. */
  groupMetadata: string;
  /** group_policy_metadata is any arbitrary metadata attached to the group policy. */
  groupPolicyMetadata: string;
  /**
   * group_policy_as_admin is a boolean field, if set to true, the group policy account address will be used as group
   * and group policy admin.
   */
  groupPolicyAsAdmin: boolean;
  /** decision_policy specifies the group policy's decision policy. */
  decisionPolicy: Any;
}
export interface MsgCreateGroupWithPolicyProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy";
  value: Uint8Array;
}
/** MsgCreateGroupWithPolicy is the Msg/CreateGroupWithPolicy request type. */
export interface MsgCreateGroupWithPolicyAmino {
  /** admin is the account address of the group and group policy admin. */
  admin: string;
  /** members defines the group members. */
  members: MemberRequestAmino[];
  /** group_metadata is any arbitrary metadata attached to the group. */
  group_metadata: string;
  /** group_policy_metadata is any arbitrary metadata attached to the group policy. */
  group_policy_metadata: string;
  /**
   * group_policy_as_admin is a boolean field, if set to true, the group policy account address will be used as group
   * and group policy admin.
   */
  group_policy_as_admin: boolean;
  /** decision_policy specifies the group policy's decision policy. */
  decision_policy?: AnyAmino;
}
export interface MsgCreateGroupWithPolicyAminoMsg {
  type: "cosmos-sdk/MsgCreateGroupWithPolicy";
  value: MsgCreateGroupWithPolicyAmino;
}
/** MsgCreateGroupWithPolicyResponse is the Msg/CreateGroupWithPolicy response type. */
export interface MsgCreateGroupWithPolicyResponse {
  /** group_id is the unique ID of the newly created group with policy. */
  groupId: bigint;
  /** group_policy_address is the account address of the newly created group policy. */
  groupPolicyAddress: string;
}
export interface MsgCreateGroupWithPolicyResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicyResponse";
  value: Uint8Array;
}
/** MsgCreateGroupWithPolicyResponse is the Msg/CreateGroupWithPolicy response type. */
export interface MsgCreateGroupWithPolicyResponseAmino {
  /** group_id is the unique ID of the newly created group with policy. */
  group_id: string;
  /** group_policy_address is the account address of the newly created group policy. */
  group_policy_address: string;
}
export interface MsgCreateGroupWithPolicyResponseAminoMsg {
  type: "cosmos-sdk/MsgCreateGroupWithPolicyResponse";
  value: MsgCreateGroupWithPolicyResponseAmino;
}
/** MsgUpdateGroupPolicyDecisionPolicy is the Msg/UpdateGroupPolicyDecisionPolicy request type. */
export interface MsgUpdateGroupPolicyDecisionPolicy {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_policy_address is the account address of group policy. */
  groupPolicyAddress: string;
  /** decision_policy is the updated group policy's decision policy. */
  decisionPolicy: Any;
}
export interface MsgUpdateGroupPolicyDecisionPolicyProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy";
  value: Uint8Array;
}
/** MsgUpdateGroupPolicyDecisionPolicy is the Msg/UpdateGroupPolicyDecisionPolicy request type. */
export interface MsgUpdateGroupPolicyDecisionPolicyAmino {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_policy_address is the account address of group policy. */
  group_policy_address: string;
  /** decision_policy is the updated group policy's decision policy. */
  decision_policy?: AnyAmino;
}
export interface MsgUpdateGroupPolicyDecisionPolicyAminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupDecisionPolicy";
  value: MsgUpdateGroupPolicyDecisionPolicyAmino;
}
/** MsgUpdateGroupPolicyDecisionPolicyResponse is the Msg/UpdateGroupPolicyDecisionPolicy response type. */
export interface MsgUpdateGroupPolicyDecisionPolicyResponse {}
export interface MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse";
  value: Uint8Array;
}
/** MsgUpdateGroupPolicyDecisionPolicyResponse is the Msg/UpdateGroupPolicyDecisionPolicy response type. */
export interface MsgUpdateGroupPolicyDecisionPolicyResponseAmino {}
export interface MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupPolicyDecisionPolicyResponse";
  value: MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
}
/** MsgUpdateGroupPolicyMetadata is the Msg/UpdateGroupPolicyMetadata request type. */
export interface MsgUpdateGroupPolicyMetadata {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_policy_address is the account address of group policy. */
  groupPolicyAddress: string;
  /** metadata is the group policy metadata to be updated. */
  metadata: string;
}
export interface MsgUpdateGroupPolicyMetadataProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata";
  value: Uint8Array;
}
/** MsgUpdateGroupPolicyMetadata is the Msg/UpdateGroupPolicyMetadata request type. */
export interface MsgUpdateGroupPolicyMetadataAmino {
  /** admin is the account address of the group admin. */
  admin: string;
  /** group_policy_address is the account address of group policy. */
  group_policy_address: string;
  /** metadata is the group policy metadata to be updated. */
  metadata: string;
}
export interface MsgUpdateGroupPolicyMetadataAminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupPolicyMetadata";
  value: MsgUpdateGroupPolicyMetadataAmino;
}
/** MsgUpdateGroupPolicyMetadataResponse is the Msg/UpdateGroupPolicyMetadata response type. */
export interface MsgUpdateGroupPolicyMetadataResponse {}
export interface MsgUpdateGroupPolicyMetadataResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse";
  value: Uint8Array;
}
/** MsgUpdateGroupPolicyMetadataResponse is the Msg/UpdateGroupPolicyMetadata response type. */
export interface MsgUpdateGroupPolicyMetadataResponseAmino {}
export interface MsgUpdateGroupPolicyMetadataResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateGroupPolicyMetadataResponse";
  value: MsgUpdateGroupPolicyMetadataResponseAmino;
}
/** MsgSubmitProposal is the Msg/SubmitProposal request type. */
export interface MsgSubmitProposal {
  /** group_policy_address is the account address of group policy. */
  groupPolicyAddress: string;
  /**
   * proposers are the account addresses of the proposers.
   * Proposers signatures will be counted as yes votes.
   */
  proposers: string[];
  /** metadata is any arbitrary metadata attached to the proposal. */
  metadata: string;
  /** messages is a list of `sdk.Msg`s that will be executed if the proposal passes. */
  messages: Any[];
  /**
   * exec defines the mode of execution of the proposal,
   * whether it should be executed immediately on creation or not.
   * If so, proposers signatures are considered as Yes votes.
   */
  exec: Exec;
  /**
   * title is the title of the proposal.
   * 
   * Since: cosmos-sdk 0.47
   */
  title: string;
  /**
   * summary is the summary of the proposal.
   * 
   * Since: cosmos-sdk 0.47
   */
  summary: string;
}
export interface MsgSubmitProposalProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgSubmitProposal";
  value: Uint8Array;
}
/** MsgSubmitProposal is the Msg/SubmitProposal request type. */
export interface MsgSubmitProposalAmino {
  /** group_policy_address is the account address of group policy. */
  group_policy_address: string;
  /**
   * proposers are the account addresses of the proposers.
   * Proposers signatures will be counted as yes votes.
   */
  proposers: string[];
  /** metadata is any arbitrary metadata attached to the proposal. */
  metadata: string;
  /** messages is a list of `sdk.Msg`s that will be executed if the proposal passes. */
  messages: AnyAmino[];
  /**
   * exec defines the mode of execution of the proposal,
   * whether it should be executed immediately on creation or not.
   * If so, proposers signatures are considered as Yes votes.
   */
  exec: Exec;
  /**
   * title is the title of the proposal.
   * 
   * Since: cosmos-sdk 0.47
   */
  title: string;
  /**
   * summary is the summary of the proposal.
   * 
   * Since: cosmos-sdk 0.47
   */
  summary: string;
}
export interface MsgSubmitProposalAminoMsg {
  type: "cosmos-sdk/group/MsgSubmitProposal";
  value: MsgSubmitProposalAmino;
}
/** MsgSubmitProposalResponse is the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponse {
  /** proposal is the unique ID of the proposal. */
  proposalId: bigint;
}
export interface MsgSubmitProposalResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgSubmitProposalResponse";
  value: Uint8Array;
}
/** MsgSubmitProposalResponse is the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponseAmino {
  /** proposal is the unique ID of the proposal. */
  proposal_id: string;
}
export interface MsgSubmitProposalResponseAminoMsg {
  type: "cosmos-sdk/MsgSubmitProposalResponse";
  value: MsgSubmitProposalResponseAmino;
}
/** MsgWithdrawProposal is the Msg/WithdrawProposal request type. */
export interface MsgWithdrawProposal {
  /** proposal is the unique ID of the proposal. */
  proposalId: bigint;
  /** address is the admin of the group policy or one of the proposer of the proposal. */
  address: string;
}
export interface MsgWithdrawProposalProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgWithdrawProposal";
  value: Uint8Array;
}
/** MsgWithdrawProposal is the Msg/WithdrawProposal request type. */
export interface MsgWithdrawProposalAmino {
  /** proposal is the unique ID of the proposal. */
  proposal_id: string;
  /** address is the admin of the group policy or one of the proposer of the proposal. */
  address: string;
}
export interface MsgWithdrawProposalAminoMsg {
  type: "cosmos-sdk/group/MsgWithdrawProposal";
  value: MsgWithdrawProposalAmino;
}
/** MsgWithdrawProposalResponse is the Msg/WithdrawProposal response type. */
export interface MsgWithdrawProposalResponse {}
export interface MsgWithdrawProposalResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgWithdrawProposalResponse";
  value: Uint8Array;
}
/** MsgWithdrawProposalResponse is the Msg/WithdrawProposal response type. */
export interface MsgWithdrawProposalResponseAmino {}
export interface MsgWithdrawProposalResponseAminoMsg {
  type: "cosmos-sdk/MsgWithdrawProposalResponse";
  value: MsgWithdrawProposalResponseAmino;
}
/** MsgVote is the Msg/Vote request type. */
export interface MsgVote {
  /** proposal is the unique ID of the proposal. */
  proposalId: bigint;
  /** voter is the voter account address. */
  voter: string;
  /** option is the voter's choice on the proposal. */
  option: VoteOption;
  /** metadata is any arbitrary metadata attached to the vote. */
  metadata: string;
  /**
   * exec defines whether the proposal should be executed
   * immediately after voting or not.
   */
  exec: Exec;
}
export interface MsgVoteProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgVote";
  value: Uint8Array;
}
/** MsgVote is the Msg/Vote request type. */
export interface MsgVoteAmino {
  /** proposal is the unique ID of the proposal. */
  proposal_id: string;
  /** voter is the voter account address. */
  voter: string;
  /** option is the voter's choice on the proposal. */
  option: VoteOption;
  /** metadata is any arbitrary metadata attached to the vote. */
  metadata: string;
  /**
   * exec defines whether the proposal should be executed
   * immediately after voting or not.
   */
  exec: Exec;
}
export interface MsgVoteAminoMsg {
  type: "cosmos-sdk/group/MsgVote";
  value: MsgVoteAmino;
}
/** MsgVoteResponse is the Msg/Vote response type. */
export interface MsgVoteResponse {}
export interface MsgVoteResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgVoteResponse";
  value: Uint8Array;
}
/** MsgVoteResponse is the Msg/Vote response type. */
export interface MsgVoteResponseAmino {}
export interface MsgVoteResponseAminoMsg {
  type: "cosmos-sdk/MsgVoteResponse";
  value: MsgVoteResponseAmino;
}
/** MsgExec is the Msg/Exec request type. */
export interface MsgExec {
  /** proposal is the unique ID of the proposal. */
  proposalId: bigint;
  /** executor is the account address used to execute the proposal. */
  executor: string;
}
export interface MsgExecProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgExec";
  value: Uint8Array;
}
/** MsgExec is the Msg/Exec request type. */
export interface MsgExecAmino {
  /** proposal is the unique ID of the proposal. */
  proposal_id: string;
  /** executor is the account address used to execute the proposal. */
  executor: string;
}
export interface MsgExecAminoMsg {
  type: "cosmos-sdk/group/MsgExec";
  value: MsgExecAmino;
}
/** MsgExecResponse is the Msg/Exec request type. */
export interface MsgExecResponse {
  /** result is the final result of the proposal execution. */
  result: ProposalExecutorResult;
}
export interface MsgExecResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgExecResponse";
  value: Uint8Array;
}
/** MsgExecResponse is the Msg/Exec request type. */
export interface MsgExecResponseAmino {
  /** result is the final result of the proposal execution. */
  result: ProposalExecutorResult;
}
export interface MsgExecResponseAminoMsg {
  type: "cosmos-sdk/MsgExecResponse";
  value: MsgExecResponseAmino;
}
/** MsgLeaveGroup is the Msg/LeaveGroup request type. */
export interface MsgLeaveGroup {
  /** address is the account address of the group member. */
  address: string;
  /** group_id is the unique ID of the group. */
  groupId: bigint;
}
export interface MsgLeaveGroupProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgLeaveGroup";
  value: Uint8Array;
}
/** MsgLeaveGroup is the Msg/LeaveGroup request type. */
export interface MsgLeaveGroupAmino {
  /** address is the account address of the group member. */
  address: string;
  /** group_id is the unique ID of the group. */
  group_id: string;
}
export interface MsgLeaveGroupAminoMsg {
  type: "cosmos-sdk/group/MsgLeaveGroup";
  value: MsgLeaveGroupAmino;
}
/** MsgLeaveGroupResponse is the Msg/LeaveGroup response type. */
export interface MsgLeaveGroupResponse {}
export interface MsgLeaveGroupResponseProtoMsg {
  typeUrl: "/cosmos.group.v1.MsgLeaveGroupResponse";
  value: Uint8Array;
}
/** MsgLeaveGroupResponse is the Msg/LeaveGroup response type. */
export interface MsgLeaveGroupResponseAmino {}
export interface MsgLeaveGroupResponseAminoMsg {
  type: "cosmos-sdk/MsgLeaveGroupResponse";
  value: MsgLeaveGroupResponseAmino;
}
function createBaseMsgCreateGroup(): MsgCreateGroup {
  return {
    admin: "",
    members: [],
    metadata: ""
  };
}
export const MsgCreateGroup = {
  encode(message: MsgCreateGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.members) {
      MemberRequest.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.members.push(MemberRequest.decode(reader, reader.uint32()));
          break;
        case 3:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateGroup {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      members: Array.isArray(object?.members) ? object.members.map((e: any) => MemberRequest.fromJSON(e)) : [],
      metadata: isSet(object.metadata) ? String(object.metadata) : ""
    };
  },
  toJSON(message: MsgCreateGroup): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    if (message.members) {
      obj.members = message.members.map(e => e ? MemberRequest.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateGroup>): MsgCreateGroup {
    const message = createBaseMsgCreateGroup();
    message.admin = object.admin ?? "";
    message.members = object.members?.map(e => MemberRequest.fromPartial(e)) || [];
    message.metadata = object.metadata ?? "";
    return message;
  },
  fromAmino(object: MsgCreateGroupAmino): MsgCreateGroup {
    return {
      admin: object.admin,
      members: Array.isArray(object?.members) ? object.members.map((e: any) => MemberRequest.fromAmino(e)) : [],
      metadata: object.metadata
    };
  },
  toAmino(message: MsgCreateGroup): MsgCreateGroupAmino {
    const obj: any = {};
    obj.admin = message.admin;
    if (message.members) {
      obj.members = message.members.map(e => e ? MemberRequest.toAmino(e) : undefined);
    } else {
      obj.members = [];
    }
    obj.metadata = message.metadata;
    return obj;
  },
  fromAminoMsg(object: MsgCreateGroupAminoMsg): MsgCreateGroup {
    return MsgCreateGroup.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateGroup): MsgCreateGroupAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateGroup",
      value: MsgCreateGroup.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateGroupProtoMsg): MsgCreateGroup {
    return MsgCreateGroup.decode(message.value);
  },
  toProto(message: MsgCreateGroup): Uint8Array {
    return MsgCreateGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGroup): MsgCreateGroupProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroup",
      value: MsgCreateGroup.encode(message).finish()
    };
  }
};
function createBaseMsgCreateGroupResponse(): MsgCreateGroupResponse {
  return {
    groupId: BigInt(0)
  };
}
export const MsgCreateGroupResponse = {
  encode(message: MsgCreateGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGroupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateGroupResponse {
    return {
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgCreateGroupResponse): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateGroupResponse>): MsgCreateGroupResponse {
    const message = createBaseMsgCreateGroupResponse();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateGroupResponseAmino): MsgCreateGroupResponse {
    return {
      groupId: BigInt(object.group_id)
    };
  },
  toAmino(message: MsgCreateGroupResponse): MsgCreateGroupResponseAmino {
    const obj: any = {};
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateGroupResponseAminoMsg): MsgCreateGroupResponse {
    return MsgCreateGroupResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateGroupResponse): MsgCreateGroupResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateGroupResponse",
      value: MsgCreateGroupResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateGroupResponseProtoMsg): MsgCreateGroupResponse {
    return MsgCreateGroupResponse.decode(message.value);
  },
  toProto(message: MsgCreateGroupResponse): Uint8Array {
    return MsgCreateGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGroupResponse): MsgCreateGroupResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroupResponse",
      value: MsgCreateGroupResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupMembers(): MsgUpdateGroupMembers {
  return {
    admin: "",
    groupId: BigInt(0),
    memberUpdates: []
  };
}
export const MsgUpdateGroupMembers = {
  encode(message: MsgUpdateGroupMembers, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupId !== BigInt(0)) {
      writer.uint32(16).uint64(message.groupId);
    }
    for (const v of message.memberUpdates) {
      MemberRequest.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupMembers {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMembers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
          break;
        case 3:
          message.memberUpdates.push(MemberRequest.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateGroupMembers {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt(0),
      memberUpdates: Array.isArray(object?.memberUpdates) ? object.memberUpdates.map((e: any) => MemberRequest.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgUpdateGroupMembers): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    if (message.memberUpdates) {
      obj.memberUpdates = message.memberUpdates.map(e => e ? MemberRequest.toJSON(e) : undefined);
    } else {
      obj.memberUpdates = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUpdateGroupMembers>): MsgUpdateGroupMembers {
    const message = createBaseMsgUpdateGroupMembers();
    message.admin = object.admin ?? "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.memberUpdates = object.memberUpdates?.map(e => MemberRequest.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgUpdateGroupMembersAmino): MsgUpdateGroupMembers {
    return {
      admin: object.admin,
      groupId: BigInt(object.group_id),
      memberUpdates: Array.isArray(object?.member_updates) ? object.member_updates.map((e: any) => MemberRequest.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgUpdateGroupMembers): MsgUpdateGroupMembersAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    if (message.memberUpdates) {
      obj.member_updates = message.memberUpdates.map(e => e ? MemberRequest.toAmino(e) : undefined);
    } else {
      obj.member_updates = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupMembersAminoMsg): MsgUpdateGroupMembers {
    return MsgUpdateGroupMembers.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupMembers): MsgUpdateGroupMembersAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupMembers",
      value: MsgUpdateGroupMembers.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupMembersProtoMsg): MsgUpdateGroupMembers {
    return MsgUpdateGroupMembers.decode(message.value);
  },
  toProto(message: MsgUpdateGroupMembers): Uint8Array {
    return MsgUpdateGroupMembers.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupMembers): MsgUpdateGroupMembersProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
      value: MsgUpdateGroupMembers.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupMembersResponse(): MsgUpdateGroupMembersResponse {
  return {};
}
export const MsgUpdateGroupMembersResponse = {
  encode(_: MsgUpdateGroupMembersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupMembersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMembersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateGroupMembersResponse {
    return {};
  },
  toJSON(_: MsgUpdateGroupMembersResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUpdateGroupMembersResponse>): MsgUpdateGroupMembersResponse {
    const message = createBaseMsgUpdateGroupMembersResponse();
    return message;
  },
  fromAmino(_: MsgUpdateGroupMembersResponseAmino): MsgUpdateGroupMembersResponse {
    return {};
  },
  toAmino(_: MsgUpdateGroupMembersResponse): MsgUpdateGroupMembersResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupMembersResponseAminoMsg): MsgUpdateGroupMembersResponse {
    return MsgUpdateGroupMembersResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupMembersResponse): MsgUpdateGroupMembersResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupMembersResponse",
      value: MsgUpdateGroupMembersResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupMembersResponseProtoMsg): MsgUpdateGroupMembersResponse {
    return MsgUpdateGroupMembersResponse.decode(message.value);
  },
  toProto(message: MsgUpdateGroupMembersResponse): Uint8Array {
    return MsgUpdateGroupMembersResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupMembersResponse): MsgUpdateGroupMembersResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembersResponse",
      value: MsgUpdateGroupMembersResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupAdmin(): MsgUpdateGroupAdmin {
  return {
    admin: "",
    groupId: BigInt(0),
    newAdmin: ""
  };
}
export const MsgUpdateGroupAdmin = {
  encode(message: MsgUpdateGroupAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupId !== BigInt(0)) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupAdmin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
          break;
        case 3:
          message.newAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateGroupAdmin {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt(0),
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : ""
    };
  },
  toJSON(message: MsgUpdateGroupAdmin): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUpdateGroupAdmin>): MsgUpdateGroupAdmin {
    const message = createBaseMsgUpdateGroupAdmin();
    message.admin = object.admin ?? "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.newAdmin = object.newAdmin ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateGroupAdminAmino): MsgUpdateGroupAdmin {
    return {
      admin: object.admin,
      groupId: BigInt(object.group_id),
      newAdmin: object.new_admin
    };
  },
  toAmino(message: MsgUpdateGroupAdmin): MsgUpdateGroupAdminAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    obj.new_admin = message.newAdmin;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupAdminAminoMsg): MsgUpdateGroupAdmin {
    return MsgUpdateGroupAdmin.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupAdmin): MsgUpdateGroupAdminAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupAdmin",
      value: MsgUpdateGroupAdmin.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupAdminProtoMsg): MsgUpdateGroupAdmin {
    return MsgUpdateGroupAdmin.decode(message.value);
  },
  toProto(message: MsgUpdateGroupAdmin): Uint8Array {
    return MsgUpdateGroupAdmin.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupAdmin): MsgUpdateGroupAdminProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
      value: MsgUpdateGroupAdmin.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupAdminResponse(): MsgUpdateGroupAdminResponse {
  return {};
}
export const MsgUpdateGroupAdminResponse = {
  encode(_: MsgUpdateGroupAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateGroupAdminResponse {
    return {};
  },
  toJSON(_: MsgUpdateGroupAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUpdateGroupAdminResponse>): MsgUpdateGroupAdminResponse {
    const message = createBaseMsgUpdateGroupAdminResponse();
    return message;
  },
  fromAmino(_: MsgUpdateGroupAdminResponseAmino): MsgUpdateGroupAdminResponse {
    return {};
  },
  toAmino(_: MsgUpdateGroupAdminResponse): MsgUpdateGroupAdminResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupAdminResponseAminoMsg): MsgUpdateGroupAdminResponse {
    return MsgUpdateGroupAdminResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupAdminResponse): MsgUpdateGroupAdminResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupAdminResponse",
      value: MsgUpdateGroupAdminResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupAdminResponseProtoMsg): MsgUpdateGroupAdminResponse {
    return MsgUpdateGroupAdminResponse.decode(message.value);
  },
  toProto(message: MsgUpdateGroupAdminResponse): Uint8Array {
    return MsgUpdateGroupAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupAdminResponse): MsgUpdateGroupAdminResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdminResponse",
      value: MsgUpdateGroupAdminResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupMetadata(): MsgUpdateGroupMetadata {
  return {
    admin: "",
    groupId: BigInt(0),
    metadata: ""
  };
}
export const MsgUpdateGroupMetadata = {
  encode(message: MsgUpdateGroupMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupId !== BigInt(0)) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateGroupMetadata {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt(0),
      metadata: isSet(object.metadata) ? String(object.metadata) : ""
    };
  },
  toJSON(message: MsgUpdateGroupMetadata): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUpdateGroupMetadata>): MsgUpdateGroupMetadata {
    const message = createBaseMsgUpdateGroupMetadata();
    message.admin = object.admin ?? "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.metadata = object.metadata ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateGroupMetadataAmino): MsgUpdateGroupMetadata {
    return {
      admin: object.admin,
      groupId: BigInt(object.group_id),
      metadata: object.metadata
    };
  },
  toAmino(message: MsgUpdateGroupMetadata): MsgUpdateGroupMetadataAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    obj.metadata = message.metadata;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupMetadataAminoMsg): MsgUpdateGroupMetadata {
    return MsgUpdateGroupMetadata.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupMetadata): MsgUpdateGroupMetadataAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupMetadata",
      value: MsgUpdateGroupMetadata.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupMetadataProtoMsg): MsgUpdateGroupMetadata {
    return MsgUpdateGroupMetadata.decode(message.value);
  },
  toProto(message: MsgUpdateGroupMetadata): Uint8Array {
    return MsgUpdateGroupMetadata.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupMetadata): MsgUpdateGroupMetadataProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
      value: MsgUpdateGroupMetadata.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupMetadataResponse(): MsgUpdateGroupMetadataResponse {
  return {};
}
export const MsgUpdateGroupMetadataResponse = {
  encode(_: MsgUpdateGroupMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateGroupMetadataResponse {
    return {};
  },
  toJSON(_: MsgUpdateGroupMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUpdateGroupMetadataResponse>): MsgUpdateGroupMetadataResponse {
    const message = createBaseMsgUpdateGroupMetadataResponse();
    return message;
  },
  fromAmino(_: MsgUpdateGroupMetadataResponseAmino): MsgUpdateGroupMetadataResponse {
    return {};
  },
  toAmino(_: MsgUpdateGroupMetadataResponse): MsgUpdateGroupMetadataResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupMetadataResponseAminoMsg): MsgUpdateGroupMetadataResponse {
    return MsgUpdateGroupMetadataResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupMetadataResponse): MsgUpdateGroupMetadataResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupMetadataResponse",
      value: MsgUpdateGroupMetadataResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupMetadataResponseProtoMsg): MsgUpdateGroupMetadataResponse {
    return MsgUpdateGroupMetadataResponse.decode(message.value);
  },
  toProto(message: MsgUpdateGroupMetadataResponse): Uint8Array {
    return MsgUpdateGroupMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupMetadataResponse): MsgUpdateGroupMetadataResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadataResponse",
      value: MsgUpdateGroupMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateGroupPolicy(): MsgCreateGroupPolicy {
  return {
    admin: "",
    groupId: BigInt(0),
    metadata: "",
    decisionPolicy: Any.fromPartial({})
  };
}
export const MsgCreateGroupPolicy = {
  encode(message: MsgCreateGroupPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupId !== BigInt(0)) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    if (message.decisionPolicy !== undefined) {
      Any.encode(message.decisionPolicy, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGroupPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.decisionPolicy = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateGroupPolicy {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt(0),
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      decisionPolicy: isSet(object.decisionPolicy) ? Any.fromJSON(object.decisionPolicy) : undefined
    };
  },
  toJSON(message: MsgCreateGroupPolicy): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.decisionPolicy !== undefined && (obj.decisionPolicy = message.decisionPolicy ? Any.toJSON(message.decisionPolicy) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateGroupPolicy>): MsgCreateGroupPolicy {
    const message = createBaseMsgCreateGroupPolicy();
    message.admin = object.admin ?? "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.metadata = object.metadata ?? "";
    message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? Any.fromPartial(object.decisionPolicy) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateGroupPolicyAmino): MsgCreateGroupPolicy {
    return {
      admin: object.admin,
      groupId: BigInt(object.group_id),
      metadata: object.metadata,
      decisionPolicy: object?.decision_policy ? Any.fromAmino(object.decision_policy) : undefined
    };
  },
  toAmino(message: MsgCreateGroupPolicy): MsgCreateGroupPolicyAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    obj.metadata = message.metadata;
    obj.decision_policy = message.decisionPolicy ? Any.toAmino(message.decisionPolicy) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateGroupPolicyAminoMsg): MsgCreateGroupPolicy {
    return MsgCreateGroupPolicy.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateGroupPolicy): MsgCreateGroupPolicyAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateGroupPolicy",
      value: MsgCreateGroupPolicy.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateGroupPolicyProtoMsg): MsgCreateGroupPolicy {
    return MsgCreateGroupPolicy.decode(message.value);
  },
  toProto(message: MsgCreateGroupPolicy): Uint8Array {
    return MsgCreateGroupPolicy.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGroupPolicy): MsgCreateGroupPolicyProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
      value: MsgCreateGroupPolicy.encode(message).finish()
    };
  }
};
function createBaseMsgCreateGroupPolicyResponse(): MsgCreateGroupPolicyResponse {
  return {
    address: ""
  };
}
export const MsgCreateGroupPolicyResponse = {
  encode(message: MsgCreateGroupPolicyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGroupPolicyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupPolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateGroupPolicyResponse {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: MsgCreateGroupPolicyResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateGroupPolicyResponse>): MsgCreateGroupPolicyResponse {
    const message = createBaseMsgCreateGroupPolicyResponse();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: MsgCreateGroupPolicyResponseAmino): MsgCreateGroupPolicyResponse {
    return {
      address: object.address
    };
  },
  toAmino(message: MsgCreateGroupPolicyResponse): MsgCreateGroupPolicyResponseAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: MsgCreateGroupPolicyResponseAminoMsg): MsgCreateGroupPolicyResponse {
    return MsgCreateGroupPolicyResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateGroupPolicyResponse): MsgCreateGroupPolicyResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateGroupPolicyResponse",
      value: MsgCreateGroupPolicyResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateGroupPolicyResponseProtoMsg): MsgCreateGroupPolicyResponse {
    return MsgCreateGroupPolicyResponse.decode(message.value);
  },
  toProto(message: MsgCreateGroupPolicyResponse): Uint8Array {
    return MsgCreateGroupPolicyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGroupPolicyResponse): MsgCreateGroupPolicyResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicyResponse",
      value: MsgCreateGroupPolicyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupPolicyAdmin(): MsgUpdateGroupPolicyAdmin {
  return {
    admin: "",
    groupPolicyAddress: "",
    newAdmin: ""
  };
}
export const MsgUpdateGroupPolicyAdmin = {
  encode(message: MsgUpdateGroupPolicyAdmin, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupPolicyAddress !== "") {
      writer.uint32(18).string(message.groupPolicyAddress);
    }
    if (message.newAdmin !== "") {
      writer.uint32(26).string(message.newAdmin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupPolicyAdmin {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupPolicyAddress = reader.string();
          break;
        case 3:
          message.newAdmin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateGroupPolicyAdmin {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      groupPolicyAddress: isSet(object.groupPolicyAddress) ? String(object.groupPolicyAddress) : "",
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : ""
    };
  },
  toJSON(message: MsgUpdateGroupPolicyAdmin): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupPolicyAddress !== undefined && (obj.groupPolicyAddress = message.groupPolicyAddress);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUpdateGroupPolicyAdmin>): MsgUpdateGroupPolicyAdmin {
    const message = createBaseMsgUpdateGroupPolicyAdmin();
    message.admin = object.admin ?? "";
    message.groupPolicyAddress = object.groupPolicyAddress ?? "";
    message.newAdmin = object.newAdmin ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateGroupPolicyAdminAmino): MsgUpdateGroupPolicyAdmin {
    return {
      admin: object.admin,
      groupPolicyAddress: object.group_policy_address,
      newAdmin: object.new_admin
    };
  },
  toAmino(message: MsgUpdateGroupPolicyAdmin): MsgUpdateGroupPolicyAdminAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.group_policy_address = message.groupPolicyAddress;
    obj.new_admin = message.newAdmin;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupPolicyAdminAminoMsg): MsgUpdateGroupPolicyAdmin {
    return MsgUpdateGroupPolicyAdmin.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupPolicyAdmin): MsgUpdateGroupPolicyAdminAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupPolicyAdmin",
      value: MsgUpdateGroupPolicyAdmin.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupPolicyAdminProtoMsg): MsgUpdateGroupPolicyAdmin {
    return MsgUpdateGroupPolicyAdmin.decode(message.value);
  },
  toProto(message: MsgUpdateGroupPolicyAdmin): Uint8Array {
    return MsgUpdateGroupPolicyAdmin.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupPolicyAdmin): MsgUpdateGroupPolicyAdminProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
      value: MsgUpdateGroupPolicyAdmin.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupPolicyAdminResponse(): MsgUpdateGroupPolicyAdminResponse {
  return {};
}
export const MsgUpdateGroupPolicyAdminResponse = {
  encode(_: MsgUpdateGroupPolicyAdminResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupPolicyAdminResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateGroupPolicyAdminResponse {
    return {};
  },
  toJSON(_: MsgUpdateGroupPolicyAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUpdateGroupPolicyAdminResponse>): MsgUpdateGroupPolicyAdminResponse {
    const message = createBaseMsgUpdateGroupPolicyAdminResponse();
    return message;
  },
  fromAmino(_: MsgUpdateGroupPolicyAdminResponseAmino): MsgUpdateGroupPolicyAdminResponse {
    return {};
  },
  toAmino(_: MsgUpdateGroupPolicyAdminResponse): MsgUpdateGroupPolicyAdminResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupPolicyAdminResponseAminoMsg): MsgUpdateGroupPolicyAdminResponse {
    return MsgUpdateGroupPolicyAdminResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupPolicyAdminResponse): MsgUpdateGroupPolicyAdminResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupPolicyAdminResponse",
      value: MsgUpdateGroupPolicyAdminResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupPolicyAdminResponseProtoMsg): MsgUpdateGroupPolicyAdminResponse {
    return MsgUpdateGroupPolicyAdminResponse.decode(message.value);
  },
  toProto(message: MsgUpdateGroupPolicyAdminResponse): Uint8Array {
    return MsgUpdateGroupPolicyAdminResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupPolicyAdminResponse): MsgUpdateGroupPolicyAdminResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse",
      value: MsgUpdateGroupPolicyAdminResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateGroupWithPolicy(): MsgCreateGroupWithPolicy {
  return {
    admin: "",
    members: [],
    groupMetadata: "",
    groupPolicyMetadata: "",
    groupPolicyAsAdmin: false,
    decisionPolicy: Any.fromPartial({})
  };
}
export const MsgCreateGroupWithPolicy = {
  encode(message: MsgCreateGroupWithPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    for (const v of message.members) {
      MemberRequest.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.groupMetadata !== "") {
      writer.uint32(26).string(message.groupMetadata);
    }
    if (message.groupPolicyMetadata !== "") {
      writer.uint32(34).string(message.groupPolicyMetadata);
    }
    if (message.groupPolicyAsAdmin === true) {
      writer.uint32(40).bool(message.groupPolicyAsAdmin);
    }
    if (message.decisionPolicy !== undefined) {
      Any.encode(message.decisionPolicy, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGroupWithPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupWithPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.members.push(MemberRequest.decode(reader, reader.uint32()));
          break;
        case 3:
          message.groupMetadata = reader.string();
          break;
        case 4:
          message.groupPolicyMetadata = reader.string();
          break;
        case 5:
          message.groupPolicyAsAdmin = reader.bool();
          break;
        case 6:
          message.decisionPolicy = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateGroupWithPolicy {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      members: Array.isArray(object?.members) ? object.members.map((e: any) => MemberRequest.fromJSON(e)) : [],
      groupMetadata: isSet(object.groupMetadata) ? String(object.groupMetadata) : "",
      groupPolicyMetadata: isSet(object.groupPolicyMetadata) ? String(object.groupPolicyMetadata) : "",
      groupPolicyAsAdmin: isSet(object.groupPolicyAsAdmin) ? Boolean(object.groupPolicyAsAdmin) : false,
      decisionPolicy: isSet(object.decisionPolicy) ? Any.fromJSON(object.decisionPolicy) : undefined
    };
  },
  toJSON(message: MsgCreateGroupWithPolicy): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    if (message.members) {
      obj.members = message.members.map(e => e ? MemberRequest.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }
    message.groupMetadata !== undefined && (obj.groupMetadata = message.groupMetadata);
    message.groupPolicyMetadata !== undefined && (obj.groupPolicyMetadata = message.groupPolicyMetadata);
    message.groupPolicyAsAdmin !== undefined && (obj.groupPolicyAsAdmin = message.groupPolicyAsAdmin);
    message.decisionPolicy !== undefined && (obj.decisionPolicy = message.decisionPolicy ? Any.toJSON(message.decisionPolicy) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateGroupWithPolicy>): MsgCreateGroupWithPolicy {
    const message = createBaseMsgCreateGroupWithPolicy();
    message.admin = object.admin ?? "";
    message.members = object.members?.map(e => MemberRequest.fromPartial(e)) || [];
    message.groupMetadata = object.groupMetadata ?? "";
    message.groupPolicyMetadata = object.groupPolicyMetadata ?? "";
    message.groupPolicyAsAdmin = object.groupPolicyAsAdmin ?? false;
    message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? Any.fromPartial(object.decisionPolicy) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateGroupWithPolicyAmino): MsgCreateGroupWithPolicy {
    return {
      admin: object.admin,
      members: Array.isArray(object?.members) ? object.members.map((e: any) => MemberRequest.fromAmino(e)) : [],
      groupMetadata: object.group_metadata,
      groupPolicyMetadata: object.group_policy_metadata,
      groupPolicyAsAdmin: object.group_policy_as_admin,
      decisionPolicy: object?.decision_policy ? Any.fromAmino(object.decision_policy) : undefined
    };
  },
  toAmino(message: MsgCreateGroupWithPolicy): MsgCreateGroupWithPolicyAmino {
    const obj: any = {};
    obj.admin = message.admin;
    if (message.members) {
      obj.members = message.members.map(e => e ? MemberRequest.toAmino(e) : undefined);
    } else {
      obj.members = [];
    }
    obj.group_metadata = message.groupMetadata;
    obj.group_policy_metadata = message.groupPolicyMetadata;
    obj.group_policy_as_admin = message.groupPolicyAsAdmin;
    obj.decision_policy = message.decisionPolicy ? Any.toAmino(message.decisionPolicy) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateGroupWithPolicyAminoMsg): MsgCreateGroupWithPolicy {
    return MsgCreateGroupWithPolicy.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateGroupWithPolicy): MsgCreateGroupWithPolicyAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateGroupWithPolicy",
      value: MsgCreateGroupWithPolicy.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateGroupWithPolicyProtoMsg): MsgCreateGroupWithPolicy {
    return MsgCreateGroupWithPolicy.decode(message.value);
  },
  toProto(message: MsgCreateGroupWithPolicy): Uint8Array {
    return MsgCreateGroupWithPolicy.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGroupWithPolicy): MsgCreateGroupWithPolicyProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
      value: MsgCreateGroupWithPolicy.encode(message).finish()
    };
  }
};
function createBaseMsgCreateGroupWithPolicyResponse(): MsgCreateGroupWithPolicyResponse {
  return {
    groupId: BigInt(0),
    groupPolicyAddress: ""
  };
}
export const MsgCreateGroupWithPolicyResponse = {
  encode(message: MsgCreateGroupWithPolicyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.groupPolicyAddress !== "") {
      writer.uint32(18).string(message.groupPolicyAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGroupWithPolicyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGroupWithPolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        case 2:
          message.groupPolicyAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateGroupWithPolicyResponse {
    return {
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt(0),
      groupPolicyAddress: isSet(object.groupPolicyAddress) ? String(object.groupPolicyAddress) : ""
    };
  },
  toJSON(message: MsgCreateGroupWithPolicyResponse): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    message.groupPolicyAddress !== undefined && (obj.groupPolicyAddress = message.groupPolicyAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateGroupWithPolicyResponse>): MsgCreateGroupWithPolicyResponse {
    const message = createBaseMsgCreateGroupWithPolicyResponse();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    message.groupPolicyAddress = object.groupPolicyAddress ?? "";
    return message;
  },
  fromAmino(object: MsgCreateGroupWithPolicyResponseAmino): MsgCreateGroupWithPolicyResponse {
    return {
      groupId: BigInt(object.group_id),
      groupPolicyAddress: object.group_policy_address
    };
  },
  toAmino(message: MsgCreateGroupWithPolicyResponse): MsgCreateGroupWithPolicyResponseAmino {
    const obj: any = {};
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    obj.group_policy_address = message.groupPolicyAddress;
    return obj;
  },
  fromAminoMsg(object: MsgCreateGroupWithPolicyResponseAminoMsg): MsgCreateGroupWithPolicyResponse {
    return MsgCreateGroupWithPolicyResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateGroupWithPolicyResponse): MsgCreateGroupWithPolicyResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateGroupWithPolicyResponse",
      value: MsgCreateGroupWithPolicyResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateGroupWithPolicyResponseProtoMsg): MsgCreateGroupWithPolicyResponse {
    return MsgCreateGroupWithPolicyResponse.decode(message.value);
  },
  toProto(message: MsgCreateGroupWithPolicyResponse): Uint8Array {
    return MsgCreateGroupWithPolicyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGroupWithPolicyResponse): MsgCreateGroupWithPolicyResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicyResponse",
      value: MsgCreateGroupWithPolicyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupPolicyDecisionPolicy(): MsgUpdateGroupPolicyDecisionPolicy {
  return {
    admin: "",
    groupPolicyAddress: "",
    decisionPolicy: Any.fromPartial({})
  };
}
export const MsgUpdateGroupPolicyDecisionPolicy = {
  encode(message: MsgUpdateGroupPolicyDecisionPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupPolicyAddress !== "") {
      writer.uint32(18).string(message.groupPolicyAddress);
    }
    if (message.decisionPolicy !== undefined) {
      Any.encode(message.decisionPolicy, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupPolicyDecisionPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupPolicyAddress = reader.string();
          break;
        case 3:
          message.decisionPolicy = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateGroupPolicyDecisionPolicy {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      groupPolicyAddress: isSet(object.groupPolicyAddress) ? String(object.groupPolicyAddress) : "",
      decisionPolicy: isSet(object.decisionPolicy) ? Any.fromJSON(object.decisionPolicy) : undefined
    };
  },
  toJSON(message: MsgUpdateGroupPolicyDecisionPolicy): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupPolicyAddress !== undefined && (obj.groupPolicyAddress = message.groupPolicyAddress);
    message.decisionPolicy !== undefined && (obj.decisionPolicy = message.decisionPolicy ? Any.toJSON(message.decisionPolicy) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUpdateGroupPolicyDecisionPolicy>): MsgUpdateGroupPolicyDecisionPolicy {
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
    message.admin = object.admin ?? "";
    message.groupPolicyAddress = object.groupPolicyAddress ?? "";
    message.decisionPolicy = object.decisionPolicy !== undefined && object.decisionPolicy !== null ? Any.fromPartial(object.decisionPolicy) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateGroupPolicyDecisionPolicyAmino): MsgUpdateGroupPolicyDecisionPolicy {
    return {
      admin: object.admin,
      groupPolicyAddress: object.group_policy_address,
      decisionPolicy: object?.decision_policy ? Any.fromAmino(object.decision_policy) : undefined
    };
  },
  toAmino(message: MsgUpdateGroupPolicyDecisionPolicy): MsgUpdateGroupPolicyDecisionPolicyAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.group_policy_address = message.groupPolicyAddress;
    obj.decision_policy = message.decisionPolicy ? Any.toAmino(message.decisionPolicy) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupPolicyDecisionPolicyAminoMsg): MsgUpdateGroupPolicyDecisionPolicy {
    return MsgUpdateGroupPolicyDecisionPolicy.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupPolicyDecisionPolicy): MsgUpdateGroupPolicyDecisionPolicyAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupDecisionPolicy",
      value: MsgUpdateGroupPolicyDecisionPolicy.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupPolicyDecisionPolicyProtoMsg): MsgUpdateGroupPolicyDecisionPolicy {
    return MsgUpdateGroupPolicyDecisionPolicy.decode(message.value);
  },
  toProto(message: MsgUpdateGroupPolicyDecisionPolicy): Uint8Array {
    return MsgUpdateGroupPolicyDecisionPolicy.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupPolicyDecisionPolicy): MsgUpdateGroupPolicyDecisionPolicyProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
      value: MsgUpdateGroupPolicyDecisionPolicy.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupPolicyDecisionPolicyResponse(): MsgUpdateGroupPolicyDecisionPolicyResponse {
  return {};
}
export const MsgUpdateGroupPolicyDecisionPolicyResponse = {
  encode(_: MsgUpdateGroupPolicyDecisionPolicyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupPolicyDecisionPolicyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateGroupPolicyDecisionPolicyResponse {
    return {};
  },
  toJSON(_: MsgUpdateGroupPolicyDecisionPolicyResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUpdateGroupPolicyDecisionPolicyResponse>): MsgUpdateGroupPolicyDecisionPolicyResponse {
    const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
    return message;
  },
  fromAmino(_: MsgUpdateGroupPolicyDecisionPolicyResponseAmino): MsgUpdateGroupPolicyDecisionPolicyResponse {
    return {};
  },
  toAmino(_: MsgUpdateGroupPolicyDecisionPolicyResponse): MsgUpdateGroupPolicyDecisionPolicyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): MsgUpdateGroupPolicyDecisionPolicyResponse {
    return MsgUpdateGroupPolicyDecisionPolicyResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupPolicyDecisionPolicyResponse): MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupPolicyDecisionPolicyResponse",
      value: MsgUpdateGroupPolicyDecisionPolicyResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): MsgUpdateGroupPolicyDecisionPolicyResponse {
    return MsgUpdateGroupPolicyDecisionPolicyResponse.decode(message.value);
  },
  toProto(message: MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array {
    return MsgUpdateGroupPolicyDecisionPolicyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupPolicyDecisionPolicyResponse): MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse",
      value: MsgUpdateGroupPolicyDecisionPolicyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupPolicyMetadata(): MsgUpdateGroupPolicyMetadata {
  return {
    admin: "",
    groupPolicyAddress: "",
    metadata: ""
  };
}
export const MsgUpdateGroupPolicyMetadata = {
  encode(message: MsgUpdateGroupPolicyMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.groupPolicyAddress !== "") {
      writer.uint32(18).string(message.groupPolicyAddress);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupPolicyMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admin = reader.string();
          break;
        case 2:
          message.groupPolicyAddress = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateGroupPolicyMetadata {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      groupPolicyAddress: isSet(object.groupPolicyAddress) ? String(object.groupPolicyAddress) : "",
      metadata: isSet(object.metadata) ? String(object.metadata) : ""
    };
  },
  toJSON(message: MsgUpdateGroupPolicyMetadata): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.groupPolicyAddress !== undefined && (obj.groupPolicyAddress = message.groupPolicyAddress);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUpdateGroupPolicyMetadata>): MsgUpdateGroupPolicyMetadata {
    const message = createBaseMsgUpdateGroupPolicyMetadata();
    message.admin = object.admin ?? "";
    message.groupPolicyAddress = object.groupPolicyAddress ?? "";
    message.metadata = object.metadata ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateGroupPolicyMetadataAmino): MsgUpdateGroupPolicyMetadata {
    return {
      admin: object.admin,
      groupPolicyAddress: object.group_policy_address,
      metadata: object.metadata
    };
  },
  toAmino(message: MsgUpdateGroupPolicyMetadata): MsgUpdateGroupPolicyMetadataAmino {
    const obj: any = {};
    obj.admin = message.admin;
    obj.group_policy_address = message.groupPolicyAddress;
    obj.metadata = message.metadata;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupPolicyMetadataAminoMsg): MsgUpdateGroupPolicyMetadata {
    return MsgUpdateGroupPolicyMetadata.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupPolicyMetadata): MsgUpdateGroupPolicyMetadataAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupPolicyMetadata",
      value: MsgUpdateGroupPolicyMetadata.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupPolicyMetadataProtoMsg): MsgUpdateGroupPolicyMetadata {
    return MsgUpdateGroupPolicyMetadata.decode(message.value);
  },
  toProto(message: MsgUpdateGroupPolicyMetadata): Uint8Array {
    return MsgUpdateGroupPolicyMetadata.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupPolicyMetadata): MsgUpdateGroupPolicyMetadataProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
      value: MsgUpdateGroupPolicyMetadata.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateGroupPolicyMetadataResponse(): MsgUpdateGroupPolicyMetadataResponse {
  return {};
}
export const MsgUpdateGroupPolicyMetadataResponse = {
  encode(_: MsgUpdateGroupPolicyMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGroupPolicyMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateGroupPolicyMetadataResponse {
    return {};
  },
  toJSON(_: MsgUpdateGroupPolicyMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUpdateGroupPolicyMetadataResponse>): MsgUpdateGroupPolicyMetadataResponse {
    const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
    return message;
  },
  fromAmino(_: MsgUpdateGroupPolicyMetadataResponseAmino): MsgUpdateGroupPolicyMetadataResponse {
    return {};
  },
  toAmino(_: MsgUpdateGroupPolicyMetadataResponse): MsgUpdateGroupPolicyMetadataResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGroupPolicyMetadataResponseAminoMsg): MsgUpdateGroupPolicyMetadataResponse {
    return MsgUpdateGroupPolicyMetadataResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGroupPolicyMetadataResponse): MsgUpdateGroupPolicyMetadataResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateGroupPolicyMetadataResponse",
      value: MsgUpdateGroupPolicyMetadataResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateGroupPolicyMetadataResponseProtoMsg): MsgUpdateGroupPolicyMetadataResponse {
    return MsgUpdateGroupPolicyMetadataResponse.decode(message.value);
  },
  toProto(message: MsgUpdateGroupPolicyMetadataResponse): Uint8Array {
    return MsgUpdateGroupPolicyMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGroupPolicyMetadataResponse): MsgUpdateGroupPolicyMetadataResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse",
      value: MsgUpdateGroupPolicyMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitProposal(): MsgSubmitProposal {
  return {
    groupPolicyAddress: "",
    proposers: [],
    metadata: "",
    messages: [],
    exec: 0,
    title: "",
    summary: ""
  };
}
export const MsgSubmitProposal = {
  encode(message: MsgSubmitProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupPolicyAddress !== "") {
      writer.uint32(10).string(message.groupPolicyAddress);
    }
    for (const v of message.proposers) {
      writer.uint32(18).string(v!);
    }
    if (message.metadata !== "") {
      writer.uint32(26).string(message.metadata);
    }
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.exec !== 0) {
      writer.uint32(40).int32(message.exec);
    }
    if (message.title !== "") {
      writer.uint32(50).string(message.title);
    }
    if (message.summary !== "") {
      writer.uint32(58).string(message.summary);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupPolicyAddress = reader.string();
          break;
        case 2:
          message.proposers.push(reader.string());
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        case 5:
          message.exec = (reader.int32() as any);
          break;
        case 6:
          message.title = reader.string();
          break;
        case 7:
          message.summary = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitProposal {
    return {
      groupPolicyAddress: isSet(object.groupPolicyAddress) ? String(object.groupPolicyAddress) : "",
      proposers: Array.isArray(object?.proposers) ? object.proposers.map((e: any) => String(e)) : [],
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromJSON(e)) : [],
      exec: isSet(object.exec) ? execFromJSON(object.exec) : -1,
      title: isSet(object.title) ? String(object.title) : "",
      summary: isSet(object.summary) ? String(object.summary) : ""
    };
  },
  toJSON(message: MsgSubmitProposal): unknown {
    const obj: any = {};
    message.groupPolicyAddress !== undefined && (obj.groupPolicyAddress = message.groupPolicyAddress);
    if (message.proposers) {
      obj.proposers = message.proposers.map(e => e);
    } else {
      obj.proposers = [];
    }
    message.metadata !== undefined && (obj.metadata = message.metadata);
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }
    message.exec !== undefined && (obj.exec = execToJSON(message.exec));
    message.title !== undefined && (obj.title = message.title);
    message.summary !== undefined && (obj.summary = message.summary);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSubmitProposal>): MsgSubmitProposal {
    const message = createBaseMsgSubmitProposal();
    message.groupPolicyAddress = object.groupPolicyAddress ?? "";
    message.proposers = object.proposers?.map(e => e) || [];
    message.metadata = object.metadata ?? "";
    message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
    message.exec = object.exec ?? 0;
    message.title = object.title ?? "";
    message.summary = object.summary ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitProposalAmino): MsgSubmitProposal {
    return {
      groupPolicyAddress: object.group_policy_address,
      proposers: Array.isArray(object?.proposers) ? object.proposers.map((e: any) => e) : [],
      metadata: object.metadata,
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromAmino(e)) : [],
      exec: isSet(object.exec) ? execFromJSON(object.exec) : -1,
      title: object.title,
      summary: object.summary
    };
  },
  toAmino(message: MsgSubmitProposal): MsgSubmitProposalAmino {
    const obj: any = {};
    obj.group_policy_address = message.groupPolicyAddress;
    if (message.proposers) {
      obj.proposers = message.proposers.map(e => e);
    } else {
      obj.proposers = [];
    }
    obj.metadata = message.metadata;
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.messages = [];
    }
    obj.exec = message.exec;
    obj.title = message.title;
    obj.summary = message.summary;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitProposalAminoMsg): MsgSubmitProposal {
    return MsgSubmitProposal.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitProposal): MsgSubmitProposalAminoMsg {
    return {
      type: "cosmos-sdk/group/MsgSubmitProposal",
      value: MsgSubmitProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitProposalProtoMsg): MsgSubmitProposal {
    return MsgSubmitProposal.decode(message.value);
  },
  toProto(message: MsgSubmitProposal): Uint8Array {
    return MsgSubmitProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitProposal): MsgSubmitProposalProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
      value: MsgSubmitProposal.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitProposalResponse(): MsgSubmitProposalResponse {
  return {
    proposalId: BigInt(0)
  };
}
export const MsgSubmitProposalResponse = {
  encode(message: MsgSubmitProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitProposalResponse {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgSubmitProposalResponse): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSubmitProposalResponse>): MsgSubmitProposalResponse {
    const message = createBaseMsgSubmitProposalResponse();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgSubmitProposalResponseAmino): MsgSubmitProposalResponse {
    return {
      proposalId: BigInt(object.proposal_id)
    };
  },
  toAmino(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitProposalResponseAminoMsg): MsgSubmitProposalResponse {
    return MsgSubmitProposalResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgSubmitProposalResponse",
      value: MsgSubmitProposalResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitProposalResponseProtoMsg): MsgSubmitProposalResponse {
    return MsgSubmitProposalResponse.decode(message.value);
  },
  toProto(message: MsgSubmitProposalResponse): Uint8Array {
    return MsgSubmitProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgSubmitProposalResponse",
      value: MsgSubmitProposalResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawProposal(): MsgWithdrawProposal {
  return {
    proposalId: BigInt(0),
    address: ""
  };
}
export const MsgWithdrawProposal = {
  encode(message: MsgWithdrawProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawProposal {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: MsgWithdrawProposal): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgWithdrawProposal>): MsgWithdrawProposal {
    const message = createBaseMsgWithdrawProposal();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: MsgWithdrawProposalAmino): MsgWithdrawProposal {
    return {
      proposalId: BigInt(object.proposal_id),
      address: object.address
    };
  },
  toAmino(message: MsgWithdrawProposal): MsgWithdrawProposalAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawProposalAminoMsg): MsgWithdrawProposal {
    return MsgWithdrawProposal.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawProposal): MsgWithdrawProposalAminoMsg {
    return {
      type: "cosmos-sdk/group/MsgWithdrawProposal",
      value: MsgWithdrawProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawProposalProtoMsg): MsgWithdrawProposal {
    return MsgWithdrawProposal.decode(message.value);
  },
  toProto(message: MsgWithdrawProposal): Uint8Array {
    return MsgWithdrawProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawProposal): MsgWithdrawProposalProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
      value: MsgWithdrawProposal.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawProposalResponse(): MsgWithdrawProposalResponse {
  return {};
}
export const MsgWithdrawProposalResponse = {
  encode(_: MsgWithdrawProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgWithdrawProposalResponse {
    return {};
  },
  toJSON(_: MsgWithdrawProposalResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgWithdrawProposalResponse>): MsgWithdrawProposalResponse {
    const message = createBaseMsgWithdrawProposalResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawProposalResponseAmino): MsgWithdrawProposalResponse {
    return {};
  },
  toAmino(_: MsgWithdrawProposalResponse): MsgWithdrawProposalResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawProposalResponseAminoMsg): MsgWithdrawProposalResponse {
    return MsgWithdrawProposalResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawProposalResponse): MsgWithdrawProposalResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgWithdrawProposalResponse",
      value: MsgWithdrawProposalResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawProposalResponseProtoMsg): MsgWithdrawProposalResponse {
    return MsgWithdrawProposalResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawProposalResponse): Uint8Array {
    return MsgWithdrawProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawProposalResponse): MsgWithdrawProposalResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgWithdrawProposalResponse",
      value: MsgWithdrawProposalResponse.encode(message).finish()
    };
  }
};
function createBaseMsgVote(): MsgVote {
  return {
    proposalId: BigInt(0),
    voter: "",
    option: 0,
    metadata: "",
    exec: 0
  };
}
export const MsgVote = {
  encode(message: MsgVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (message.exec !== 0) {
      writer.uint32(40).int32(message.exec);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.option = (reader.int32() as any);
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.exec = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgVote {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      voter: isSet(object.voter) ? String(object.voter) : "",
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
      metadata: isSet(object.metadata) ? String(object.metadata) : "",
      exec: isSet(object.exec) ? execFromJSON(object.exec) : -1
    };
  },
  toJSON(message: MsgVote): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.exec !== undefined && (obj.exec = execToJSON(message.exec));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgVote>): MsgVote {
    const message = createBaseMsgVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.voter = object.voter ?? "";
    message.option = object.option ?? 0;
    message.metadata = object.metadata ?? "";
    message.exec = object.exec ?? 0;
    return message;
  },
  fromAmino(object: MsgVoteAmino): MsgVote {
    return {
      proposalId: BigInt(object.proposal_id),
      voter: object.voter,
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
      metadata: object.metadata,
      exec: isSet(object.exec) ? execFromJSON(object.exec) : -1
    };
  },
  toAmino(message: MsgVote): MsgVoteAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.voter = message.voter;
    obj.option = message.option;
    obj.metadata = message.metadata;
    obj.exec = message.exec;
    return obj;
  },
  fromAminoMsg(object: MsgVoteAminoMsg): MsgVote {
    return MsgVote.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVote): MsgVoteAminoMsg {
    return {
      type: "cosmos-sdk/group/MsgVote",
      value: MsgVote.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgVoteProtoMsg): MsgVote {
    return MsgVote.decode(message.value);
  },
  toProto(message: MsgVote): Uint8Array {
    return MsgVote.encode(message).finish();
  },
  toProtoMsg(message: MsgVote): MsgVoteProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgVote",
      value: MsgVote.encode(message).finish()
    };
  }
};
function createBaseMsgVoteResponse(): MsgVoteResponse {
  return {};
}
export const MsgVoteResponse = {
  encode(_: MsgVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgVoteResponse {
    return {};
  },
  toJSON(_: MsgVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgVoteResponse>): MsgVoteResponse {
    const message = createBaseMsgVoteResponse();
    return message;
  },
  fromAmino(_: MsgVoteResponseAmino): MsgVoteResponse {
    return {};
  },
  toAmino(_: MsgVoteResponse): MsgVoteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgVoteResponseAminoMsg): MsgVoteResponse {
    return MsgVoteResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVoteResponse): MsgVoteResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgVoteResponse",
      value: MsgVoteResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgVoteResponseProtoMsg): MsgVoteResponse {
    return MsgVoteResponse.decode(message.value);
  },
  toProto(message: MsgVoteResponse): Uint8Array {
    return MsgVoteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgVoteResponse): MsgVoteResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgVoteResponse",
      value: MsgVoteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgExec(): MsgExec {
  return {
    proposalId: BigInt(0),
    executor: ""
  };
}
export const MsgExec = {
  encode(message: MsgExec, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.executor !== "") {
      writer.uint32(18).string(message.executor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.executor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExec {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
      executor: isSet(object.executor) ? String(object.executor) : ""
    };
  },
  toJSON(message: MsgExec): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.executor !== undefined && (obj.executor = message.executor);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgExec>): MsgExec {
    const message = createBaseMsgExec();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
    message.executor = object.executor ?? "";
    return message;
  },
  fromAmino(object: MsgExecAmino): MsgExec {
    return {
      proposalId: BigInt(object.proposal_id),
      executor: object.executor
    };
  },
  toAmino(message: MsgExec): MsgExecAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.executor = message.executor;
    return obj;
  },
  fromAminoMsg(object: MsgExecAminoMsg): MsgExec {
    return MsgExec.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExec): MsgExecAminoMsg {
    return {
      type: "cosmos-sdk/group/MsgExec",
      value: MsgExec.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExecProtoMsg): MsgExec {
    return MsgExec.decode(message.value);
  },
  toProto(message: MsgExec): Uint8Array {
    return MsgExec.encode(message).finish();
  },
  toProtoMsg(message: MsgExec): MsgExecProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgExec",
      value: MsgExec.encode(message).finish()
    };
  }
};
function createBaseMsgExecResponse(): MsgExecResponse {
  return {
    result: 0
  };
}
export const MsgExecResponse = {
  encode(message: MsgExecResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExecResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.result = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExecResponse {
    return {
      result: isSet(object.result) ? proposalExecutorResultFromJSON(object.result) : -1
    };
  },
  toJSON(message: MsgExecResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = proposalExecutorResultToJSON(message.result));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgExecResponse>): MsgExecResponse {
    const message = createBaseMsgExecResponse();
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object: MsgExecResponseAmino): MsgExecResponse {
    return {
      result: isSet(object.result) ? proposalExecutorResultFromJSON(object.result) : -1
    };
  },
  toAmino(message: MsgExecResponse): MsgExecResponseAmino {
    const obj: any = {};
    obj.result = message.result;
    return obj;
  },
  fromAminoMsg(object: MsgExecResponseAminoMsg): MsgExecResponse {
    return MsgExecResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExecResponse): MsgExecResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgExecResponse",
      value: MsgExecResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExecResponseProtoMsg): MsgExecResponse {
    return MsgExecResponse.decode(message.value);
  },
  toProto(message: MsgExecResponse): Uint8Array {
    return MsgExecResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExecResponse): MsgExecResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgExecResponse",
      value: MsgExecResponse.encode(message).finish()
    };
  }
};
function createBaseMsgLeaveGroup(): MsgLeaveGroup {
  return {
    address: "",
    groupId: BigInt(0)
  };
}
export const MsgLeaveGroup = {
  encode(message: MsgLeaveGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.groupId !== BigInt(0)) {
      writer.uint32(16).uint64(message.groupId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLeaveGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaveGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgLeaveGroup {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      groupId: isSet(object.groupId) ? BigInt(object.groupId.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgLeaveGroup): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgLeaveGroup>): MsgLeaveGroup {
    const message = createBaseMsgLeaveGroup();
    message.address = object.address ?? "";
    message.groupId = object.groupId !== undefined && object.groupId !== null ? BigInt(object.groupId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgLeaveGroupAmino): MsgLeaveGroup {
    return {
      address: object.address,
      groupId: BigInt(object.group_id)
    };
  },
  toAmino(message: MsgLeaveGroup): MsgLeaveGroupAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgLeaveGroupAminoMsg): MsgLeaveGroup {
    return MsgLeaveGroup.fromAmino(object.value);
  },
  toAminoMsg(message: MsgLeaveGroup): MsgLeaveGroupAminoMsg {
    return {
      type: "cosmos-sdk/group/MsgLeaveGroup",
      value: MsgLeaveGroup.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgLeaveGroupProtoMsg): MsgLeaveGroup {
    return MsgLeaveGroup.decode(message.value);
  },
  toProto(message: MsgLeaveGroup): Uint8Array {
    return MsgLeaveGroup.encode(message).finish();
  },
  toProtoMsg(message: MsgLeaveGroup): MsgLeaveGroupProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
      value: MsgLeaveGroup.encode(message).finish()
    };
  }
};
function createBaseMsgLeaveGroupResponse(): MsgLeaveGroupResponse {
  return {};
}
export const MsgLeaveGroupResponse = {
  encode(_: MsgLeaveGroupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgLeaveGroupResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaveGroupResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgLeaveGroupResponse {
    return {};
  },
  toJSON(_: MsgLeaveGroupResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgLeaveGroupResponse>): MsgLeaveGroupResponse {
    const message = createBaseMsgLeaveGroupResponse();
    return message;
  },
  fromAmino(_: MsgLeaveGroupResponseAmino): MsgLeaveGroupResponse {
    return {};
  },
  toAmino(_: MsgLeaveGroupResponse): MsgLeaveGroupResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgLeaveGroupResponseAminoMsg): MsgLeaveGroupResponse {
    return MsgLeaveGroupResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgLeaveGroupResponse): MsgLeaveGroupResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgLeaveGroupResponse",
      value: MsgLeaveGroupResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgLeaveGroupResponseProtoMsg): MsgLeaveGroupResponse {
    return MsgLeaveGroupResponse.decode(message.value);
  },
  toProto(message: MsgLeaveGroupResponse): Uint8Array {
    return MsgLeaveGroupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgLeaveGroupResponse): MsgLeaveGroupResponseProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.MsgLeaveGroupResponse",
      value: MsgLeaveGroupResponse.encode(message).finish()
    };
  }
};