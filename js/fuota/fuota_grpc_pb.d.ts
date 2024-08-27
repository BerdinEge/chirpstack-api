// GENERATED CODE -- DO NOT EDIT!

// package: fuota
// file: fuota/fuota.proto

import * as fuota_fuota_pb from "../fuota/fuota_pb";
import * as grpc from "@grpc/grpc-js";

interface IFUOTAServerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createDeployment: grpc.MethodDefinition<fuota_fuota_pb.CreateDeploymentRequest, fuota_fuota_pb.CreateDeploymentResponse>;
  createMulticastDeployment: grpc.MethodDefinition<fuota_fuota_pb.CreateMulticastDeploymentRequest, fuota_fuota_pb.CreateMulticastDeploymentResponse>;
  bulkMulticastDeployment: grpc.MethodDefinition<fuota_fuota_pb.BulkMulticastDeploymentRequest, fuota_fuota_pb.BulkMulticastDeploymentResponse>;
  getDeploymentStatus: grpc.MethodDefinition<fuota_fuota_pb.GetDeploymentStatusRequest, fuota_fuota_pb.GetDeploymentStatusResponse>;
  getDeploymentDeviceLogs: grpc.MethodDefinition<fuota_fuota_pb.GetDeploymentDeviceLogsRequest, fuota_fuota_pb.GetDeploymentDeviceLogsResponse>;
  resetMulticastSetup: grpc.MethodDefinition<fuota_fuota_pb.ResetMulticastSetupRequest, fuota_fuota_pb.ResetMulticastSetupResponse>;
}

export const FUOTAServerServiceService: IFUOTAServerServiceService;

export interface IFUOTAServerServiceServer extends grpc.UntypedServiceImplementation {
  createDeployment: grpc.handleUnaryCall<fuota_fuota_pb.CreateDeploymentRequest, fuota_fuota_pb.CreateDeploymentResponse>;
  createMulticastDeployment: grpc.handleUnaryCall<fuota_fuota_pb.CreateMulticastDeploymentRequest, fuota_fuota_pb.CreateMulticastDeploymentResponse>;
  bulkMulticastDeployment: grpc.handleUnaryCall<fuota_fuota_pb.BulkMulticastDeploymentRequest, fuota_fuota_pb.BulkMulticastDeploymentResponse>;
  getDeploymentStatus: grpc.handleUnaryCall<fuota_fuota_pb.GetDeploymentStatusRequest, fuota_fuota_pb.GetDeploymentStatusResponse>;
  getDeploymentDeviceLogs: grpc.handleUnaryCall<fuota_fuota_pb.GetDeploymentDeviceLogsRequest, fuota_fuota_pb.GetDeploymentDeviceLogsResponse>;
  resetMulticastSetup: grpc.handleUnaryCall<fuota_fuota_pb.ResetMulticastSetupRequest, fuota_fuota_pb.ResetMulticastSetupResponse>;
}

export class FUOTAServerServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createDeployment(argument: fuota_fuota_pb.CreateDeploymentRequest, callback: grpc.requestCallback<fuota_fuota_pb.CreateDeploymentResponse>): grpc.ClientUnaryCall;
  createDeployment(argument: fuota_fuota_pb.CreateDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<fuota_fuota_pb.CreateDeploymentResponse>): grpc.ClientUnaryCall;
  createDeployment(argument: fuota_fuota_pb.CreateDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<fuota_fuota_pb.CreateDeploymentResponse>): grpc.ClientUnaryCall;
  createMulticastDeployment(argument: fuota_fuota_pb.CreateMulticastDeploymentRequest, callback: grpc.requestCallback<fuota_fuota_pb.CreateMulticastDeploymentResponse>): grpc.ClientUnaryCall;
  createMulticastDeployment(argument: fuota_fuota_pb.CreateMulticastDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<fuota_fuota_pb.CreateMulticastDeploymentResponse>): grpc.ClientUnaryCall;
  createMulticastDeployment(argument: fuota_fuota_pb.CreateMulticastDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<fuota_fuota_pb.CreateMulticastDeploymentResponse>): grpc.ClientUnaryCall;
  bulkMulticastDeployment(argument: fuota_fuota_pb.BulkMulticastDeploymentRequest, callback: grpc.requestCallback<fuota_fuota_pb.BulkMulticastDeploymentResponse>): grpc.ClientUnaryCall;
  bulkMulticastDeployment(argument: fuota_fuota_pb.BulkMulticastDeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<fuota_fuota_pb.BulkMulticastDeploymentResponse>): grpc.ClientUnaryCall;
  bulkMulticastDeployment(argument: fuota_fuota_pb.BulkMulticastDeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<fuota_fuota_pb.BulkMulticastDeploymentResponse>): grpc.ClientUnaryCall;
  getDeploymentStatus(argument: fuota_fuota_pb.GetDeploymentStatusRequest, callback: grpc.requestCallback<fuota_fuota_pb.GetDeploymentStatusResponse>): grpc.ClientUnaryCall;
  getDeploymentStatus(argument: fuota_fuota_pb.GetDeploymentStatusRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<fuota_fuota_pb.GetDeploymentStatusResponse>): grpc.ClientUnaryCall;
  getDeploymentStatus(argument: fuota_fuota_pb.GetDeploymentStatusRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<fuota_fuota_pb.GetDeploymentStatusResponse>): grpc.ClientUnaryCall;
  getDeploymentDeviceLogs(argument: fuota_fuota_pb.GetDeploymentDeviceLogsRequest, callback: grpc.requestCallback<fuota_fuota_pb.GetDeploymentDeviceLogsResponse>): grpc.ClientUnaryCall;
  getDeploymentDeviceLogs(argument: fuota_fuota_pb.GetDeploymentDeviceLogsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<fuota_fuota_pb.GetDeploymentDeviceLogsResponse>): grpc.ClientUnaryCall;
  getDeploymentDeviceLogs(argument: fuota_fuota_pb.GetDeploymentDeviceLogsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<fuota_fuota_pb.GetDeploymentDeviceLogsResponse>): grpc.ClientUnaryCall;
  resetMulticastSetup(argument: fuota_fuota_pb.ResetMulticastSetupRequest, callback: grpc.requestCallback<fuota_fuota_pb.ResetMulticastSetupResponse>): grpc.ClientUnaryCall;
  resetMulticastSetup(argument: fuota_fuota_pb.ResetMulticastSetupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<fuota_fuota_pb.ResetMulticastSetupResponse>): grpc.ClientUnaryCall;
  resetMulticastSetup(argument: fuota_fuota_pb.ResetMulticastSetupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<fuota_fuota_pb.ResetMulticastSetupResponse>): grpc.ClientUnaryCall;
}
