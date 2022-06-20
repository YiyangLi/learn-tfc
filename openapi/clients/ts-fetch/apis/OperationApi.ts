/* tslint:disable */
/* eslint-disable */
/**
 * Airbyte Configuration API
 * Airbyte Configuration API [https://airbyte.io](https://airbyte.io).  This API is a collection of HTTP RPC-style methods. While it is not a REST API, those familiar with REST should find the conventions of this API recognizable.  Here are some conventions that this API follows: * All endpoints are http POST methods. * All endpoints accept data via `application/json` request bodies. The API does not accept any data via query params. * The naming convention for endpoints is: localhost:8000/{VERSION}/{METHOD_FAMILY}/{METHOD_NAME} e.g. `localhost:8000/v1/connections/create`. * For all `update` methods, the whole object must be passed in, even the fields that did not change.  Change Management: * The major version of the API endpoint can be determined / specified in the URL `localhost:8080/v1/connections/create` * Minor version bumps will be invisible to the end user. The user cannot specify minor versions in requests. * All backwards incompatible changes will happen in major version bumps. We will not make backwards incompatible changes in minor version bumps. Examples of non-breaking changes (includes but not limited to...):   * Adding fields to request or response bodies.   * Adding new HTTP endpoints. * All `web_backend` APIs are not considered public APIs and are not guaranteeing backwards compatibility. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: contact@airbyte.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    CheckOperationRead,
    CheckOperationReadFromJSON,
    CheckOperationReadToJSON,
    ConnectionIdRequestBody,
    ConnectionIdRequestBodyFromJSON,
    ConnectionIdRequestBodyToJSON,
    InvalidInputExceptionInfo,
    InvalidInputExceptionInfoFromJSON,
    InvalidInputExceptionInfoToJSON,
    NotFoundKnownExceptionInfo,
    NotFoundKnownExceptionInfoFromJSON,
    NotFoundKnownExceptionInfoToJSON,
    OperationCreate,
    OperationCreateFromJSON,
    OperationCreateToJSON,
    OperationIdRequestBody,
    OperationIdRequestBodyFromJSON,
    OperationIdRequestBodyToJSON,
    OperationRead,
    OperationReadFromJSON,
    OperationReadToJSON,
    OperationReadList,
    OperationReadListFromJSON,
    OperationReadListToJSON,
    OperationUpdate,
    OperationUpdateFromJSON,
    OperationUpdateToJSON,
    OperatorConfiguration,
    OperatorConfigurationFromJSON,
    OperatorConfigurationToJSON,
} from '../models';

export interface CheckOperationRequest {
    operatorConfiguration: OperatorConfiguration;
}

export interface CreateOperationRequest {
    operationCreate: OperationCreate;
}

export interface DeleteOperationRequest {
    operationIdRequestBody: OperationIdRequestBody;
}

export interface GetOperationRequest {
    operationIdRequestBody: OperationIdRequestBody;
}

export interface ListOperationsForConnectionRequest {
    connectionIdRequestBody: ConnectionIdRequestBody;
}

export interface UpdateOperationRequest {
    operationUpdate: OperationUpdate;
}

/**
 * 
 */
export class OperationApi extends runtime.BaseAPI {

    /**
     * Check if an operation to be created is valid
     */
    async checkOperationRaw(requestParameters: CheckOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CheckOperationRead>> {
        if (requestParameters.operatorConfiguration === null || requestParameters.operatorConfiguration === undefined) {
            throw new runtime.RequiredError('operatorConfiguration','Required parameter requestParameters.operatorConfiguration was null or undefined when calling checkOperation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/operations/check`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OperatorConfigurationToJSON(requestParameters.operatorConfiguration),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CheckOperationReadFromJSON(jsonValue));
    }

    /**
     * Check if an operation to be created is valid
     */
    async checkOperation(requestParameters: CheckOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CheckOperationRead> {
        const response = await this.checkOperationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create an operation to be applied as part of a connection pipeline
     */
    async createOperationRaw(requestParameters: CreateOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<OperationRead>> {
        if (requestParameters.operationCreate === null || requestParameters.operationCreate === undefined) {
            throw new runtime.RequiredError('operationCreate','Required parameter requestParameters.operationCreate was null or undefined when calling createOperation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/operations/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OperationCreateToJSON(requestParameters.operationCreate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OperationReadFromJSON(jsonValue));
    }

    /**
     * Create an operation to be applied as part of a connection pipeline
     */
    async createOperation(requestParameters: CreateOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<OperationRead> {
        const response = await this.createOperationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete an operation
     */
    async deleteOperationRaw(requestParameters: DeleteOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.operationIdRequestBody === null || requestParameters.operationIdRequestBody === undefined) {
            throw new runtime.RequiredError('operationIdRequestBody','Required parameter requestParameters.operationIdRequestBody was null or undefined when calling deleteOperation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/operations/delete`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OperationIdRequestBodyToJSON(requestParameters.operationIdRequestBody),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete an operation
     */
    async deleteOperation(requestParameters: DeleteOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.deleteOperationRaw(requestParameters, initOverrides);
    }

    /**
     * Returns an operation
     */
    async getOperationRaw(requestParameters: GetOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<OperationRead>> {
        if (requestParameters.operationIdRequestBody === null || requestParameters.operationIdRequestBody === undefined) {
            throw new runtime.RequiredError('operationIdRequestBody','Required parameter requestParameters.operationIdRequestBody was null or undefined when calling getOperation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/operations/get`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OperationIdRequestBodyToJSON(requestParameters.operationIdRequestBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OperationReadFromJSON(jsonValue));
    }

    /**
     * Returns an operation
     */
    async getOperation(requestParameters: GetOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<OperationRead> {
        const response = await this.getOperationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List operations for connection.
     * Returns all operations for a connection.
     */
    async listOperationsForConnectionRaw(requestParameters: ListOperationsForConnectionRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<OperationReadList>> {
        if (requestParameters.connectionIdRequestBody === null || requestParameters.connectionIdRequestBody === undefined) {
            throw new runtime.RequiredError('connectionIdRequestBody','Required parameter requestParameters.connectionIdRequestBody was null or undefined when calling listOperationsForConnection.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/operations/list`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ConnectionIdRequestBodyToJSON(requestParameters.connectionIdRequestBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OperationReadListFromJSON(jsonValue));
    }

    /**
     * List operations for connection.
     * Returns all operations for a connection.
     */
    async listOperationsForConnection(requestParameters: ListOperationsForConnectionRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<OperationReadList> {
        const response = await this.listOperationsForConnectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update an operation
     */
    async updateOperationRaw(requestParameters: UpdateOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<OperationRead>> {
        if (requestParameters.operationUpdate === null || requestParameters.operationUpdate === undefined) {
            throw new runtime.RequiredError('operationUpdate','Required parameter requestParameters.operationUpdate was null or undefined when calling updateOperation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/operations/update`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OperationUpdateToJSON(requestParameters.operationUpdate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OperationReadFromJSON(jsonValue));
    }

    /**
     * Update an operation
     */
    async updateOperation(requestParameters: UpdateOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<OperationRead> {
        const response = await this.updateOperationRaw(requestParameters, initOverrides);
        return await response.value();
    }

}