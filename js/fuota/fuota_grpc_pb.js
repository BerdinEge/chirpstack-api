// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var fuota_fuota_pb = require('../fuota/fuota_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');

function serialize_fuota_BulkMulticastDeploymentRequest(arg) {
  if (!(arg instanceof fuota_fuota_pb.BulkMulticastDeploymentRequest)) {
    throw new Error('Expected argument of type fuota.BulkMulticastDeploymentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fuota_BulkMulticastDeploymentRequest(buffer_arg) {
  return fuota_fuota_pb.BulkMulticastDeploymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fuota_BulkMulticastDeploymentResponse(arg) {
  if (!(arg instanceof fuota_fuota_pb.BulkMulticastDeploymentResponse)) {
    throw new Error('Expected argument of type fuota.BulkMulticastDeploymentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fuota_BulkMulticastDeploymentResponse(buffer_arg) {
  return fuota_fuota_pb.BulkMulticastDeploymentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fuota_CreateDeploymentRequest(arg) {
  if (!(arg instanceof fuota_fuota_pb.CreateDeploymentRequest)) {
    throw new Error('Expected argument of type fuota.CreateDeploymentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fuota_CreateDeploymentRequest(buffer_arg) {
  return fuota_fuota_pb.CreateDeploymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fuota_CreateDeploymentResponse(arg) {
  if (!(arg instanceof fuota_fuota_pb.CreateDeploymentResponse)) {
    throw new Error('Expected argument of type fuota.CreateDeploymentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fuota_CreateDeploymentResponse(buffer_arg) {
  return fuota_fuota_pb.CreateDeploymentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fuota_CreateMulticastDeploymentRequest(arg) {
  if (!(arg instanceof fuota_fuota_pb.CreateMulticastDeploymentRequest)) {
    throw new Error('Expected argument of type fuota.CreateMulticastDeploymentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fuota_CreateMulticastDeploymentRequest(buffer_arg) {
  return fuota_fuota_pb.CreateMulticastDeploymentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fuota_CreateMulticastDeploymentResponse(arg) {
  if (!(arg instanceof fuota_fuota_pb.CreateMulticastDeploymentResponse)) {
    throw new Error('Expected argument of type fuota.CreateMulticastDeploymentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fuota_CreateMulticastDeploymentResponse(buffer_arg) {
  return fuota_fuota_pb.CreateMulticastDeploymentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fuota_GetDeploymentDeviceLogsRequest(arg) {
  if (!(arg instanceof fuota_fuota_pb.GetDeploymentDeviceLogsRequest)) {
    throw new Error('Expected argument of type fuota.GetDeploymentDeviceLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fuota_GetDeploymentDeviceLogsRequest(buffer_arg) {
  return fuota_fuota_pb.GetDeploymentDeviceLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fuota_GetDeploymentDeviceLogsResponse(arg) {
  if (!(arg instanceof fuota_fuota_pb.GetDeploymentDeviceLogsResponse)) {
    throw new Error('Expected argument of type fuota.GetDeploymentDeviceLogsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fuota_GetDeploymentDeviceLogsResponse(buffer_arg) {
  return fuota_fuota_pb.GetDeploymentDeviceLogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fuota_GetDeploymentStatusRequest(arg) {
  if (!(arg instanceof fuota_fuota_pb.GetDeploymentStatusRequest)) {
    throw new Error('Expected argument of type fuota.GetDeploymentStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fuota_GetDeploymentStatusRequest(buffer_arg) {
  return fuota_fuota_pb.GetDeploymentStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fuota_GetDeploymentStatusResponse(arg) {
  if (!(arg instanceof fuota_fuota_pb.GetDeploymentStatusResponse)) {
    throw new Error('Expected argument of type fuota.GetDeploymentStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fuota_GetDeploymentStatusResponse(buffer_arg) {
  return fuota_fuota_pb.GetDeploymentStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fuota_ResetMulticastSetupRequest(arg) {
  if (!(arg instanceof fuota_fuota_pb.ResetMulticastSetupRequest)) {
    throw new Error('Expected argument of type fuota.ResetMulticastSetupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fuota_ResetMulticastSetupRequest(buffer_arg) {
  return fuota_fuota_pb.ResetMulticastSetupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_fuota_ResetMulticastSetupResponse(arg) {
  if (!(arg instanceof fuota_fuota_pb.ResetMulticastSetupResponse)) {
    throw new Error('Expected argument of type fuota.ResetMulticastSetupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_fuota_ResetMulticastSetupResponse(buffer_arg) {
  return fuota_fuota_pb.ResetMulticastSetupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// FUOTAServerService provides the fuota-server API methods.
// Note: this API considered experimental.
var FUOTAServerServiceService = exports.FUOTAServerServiceService = {
  // CreateDeployment creates the given FUOTA deployment.
createDeployment: {
    path: '/fuota.FUOTAServerService/CreateDeployment',
    requestStream: false,
    responseStream: false,
    requestType: fuota_fuota_pb.CreateDeploymentRequest,
    responseType: fuota_fuota_pb.CreateDeploymentResponse,
    requestSerialize: serialize_fuota_CreateDeploymentRequest,
    requestDeserialize: deserialize_fuota_CreateDeploymentRequest,
    responseSerialize: serialize_fuota_CreateDeploymentResponse,
    responseDeserialize: deserialize_fuota_CreateDeploymentResponse,
  },
  // CreateMulticastDeployment creates the given Multicast deployment.
createMulticastDeployment: {
    path: '/fuota.FUOTAServerService/CreateMulticastDeployment',
    requestStream: false,
    responseStream: false,
    requestType: fuota_fuota_pb.CreateMulticastDeploymentRequest,
    responseType: fuota_fuota_pb.CreateMulticastDeploymentResponse,
    requestSerialize: serialize_fuota_CreateMulticastDeploymentRequest,
    requestDeserialize: deserialize_fuota_CreateMulticastDeploymentRequest,
    responseSerialize: serialize_fuota_CreateMulticastDeploymentResponse,
    responseDeserialize: deserialize_fuota_CreateMulticastDeploymentResponse,
  },
  // CreateMulticastDeployment creates the given Multicast deployment.
bulkMulticastDeployment: {
    path: '/fuota.FUOTAServerService/BulkMulticastDeployment',
    requestStream: false,
    responseStream: false,
    requestType: fuota_fuota_pb.BulkMulticastDeploymentRequest,
    responseType: fuota_fuota_pb.BulkMulticastDeploymentResponse,
    requestSerialize: serialize_fuota_BulkMulticastDeploymentRequest,
    requestDeserialize: deserialize_fuota_BulkMulticastDeploymentRequest,
    responseSerialize: serialize_fuota_BulkMulticastDeploymentResponse,
    responseDeserialize: deserialize_fuota_BulkMulticastDeploymentResponse,
  },
  // GetDeploymentStatus returns the FUOTA deployment status given an ID.
getDeploymentStatus: {
    path: '/fuota.FUOTAServerService/GetDeploymentStatus',
    requestStream: false,
    responseStream: false,
    requestType: fuota_fuota_pb.GetDeploymentStatusRequest,
    responseType: fuota_fuota_pb.GetDeploymentStatusResponse,
    requestSerialize: serialize_fuota_GetDeploymentStatusRequest,
    requestDeserialize: deserialize_fuota_GetDeploymentStatusRequest,
    responseSerialize: serialize_fuota_GetDeploymentStatusResponse,
    responseDeserialize: deserialize_fuota_GetDeploymentStatusResponse,
  },
  // GetDeploymentDeviceLogs returns the FUOTA logs given a deployment ID and DevEUI.
getDeploymentDeviceLogs: {
    path: '/fuota.FUOTAServerService/GetDeploymentDeviceLogs',
    requestStream: false,
    responseStream: false,
    requestType: fuota_fuota_pb.GetDeploymentDeviceLogsRequest,
    responseType: fuota_fuota_pb.GetDeploymentDeviceLogsResponse,
    requestSerialize: serialize_fuota_GetDeploymentDeviceLogsRequest,
    requestDeserialize: deserialize_fuota_GetDeploymentDeviceLogsRequest,
    responseSerialize: serialize_fuota_GetDeploymentDeviceLogsResponse,
    responseDeserialize: deserialize_fuota_GetDeploymentDeviceLogsResponse,
  },
  // ResetMulticastSetup flushes setup state of the device.
resetMulticastSetup: {
    path: '/fuota.FUOTAServerService/ResetMulticastSetup',
    requestStream: false,
    responseStream: false,
    requestType: fuota_fuota_pb.ResetMulticastSetupRequest,
    responseType: fuota_fuota_pb.ResetMulticastSetupResponse,
    requestSerialize: serialize_fuota_ResetMulticastSetupRequest,
    requestDeserialize: deserialize_fuota_ResetMulticastSetupRequest,
    responseSerialize: serialize_fuota_ResetMulticastSetupResponse,
    responseDeserialize: deserialize_fuota_ResetMulticastSetupResponse,
  },
};

exports.FUOTAServerServiceClient = grpc.makeGenericClientConstructor(FUOTAServerServiceService);
