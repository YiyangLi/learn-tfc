// tslint:disable
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


import { HttpMethods, QueryConfig, ResponseBody, ResponseText } from 'redux-query';
import * as runtime from '../runtime';
import {
    CustomSourceDefinitionCreate,
    CustomSourceDefinitionCreateFromJSON,
    CustomSourceDefinitionCreateToJSON,
    CustomSourceDefinitionUpdate,
    CustomSourceDefinitionUpdateFromJSON,
    CustomSourceDefinitionUpdateToJSON,
    InvalidInputExceptionInfo,
    InvalidInputExceptionInfoFromJSON,
    InvalidInputExceptionInfoToJSON,
    NotFoundKnownExceptionInfo,
    NotFoundKnownExceptionInfoFromJSON,
    NotFoundKnownExceptionInfoToJSON,
    PrivateSourceDefinitionRead,
    PrivateSourceDefinitionReadFromJSON,
    PrivateSourceDefinitionReadToJSON,
    PrivateSourceDefinitionReadList,
    PrivateSourceDefinitionReadListFromJSON,
    PrivateSourceDefinitionReadListToJSON,
    SourceDefinitionCreate,
    SourceDefinitionCreateFromJSON,
    SourceDefinitionCreateToJSON,
    SourceDefinitionIdRequestBody,
    SourceDefinitionIdRequestBodyFromJSON,
    SourceDefinitionIdRequestBodyToJSON,
    SourceDefinitionIdWithWorkspaceId,
    SourceDefinitionIdWithWorkspaceIdFromJSON,
    SourceDefinitionIdWithWorkspaceIdToJSON,
    SourceDefinitionRead,
    SourceDefinitionReadFromJSON,
    SourceDefinitionReadToJSON,
    SourceDefinitionReadList,
    SourceDefinitionReadListFromJSON,
    SourceDefinitionReadListToJSON,
    SourceDefinitionUpdate,
    SourceDefinitionUpdateFromJSON,
    SourceDefinitionUpdateToJSON,
    WorkspaceIdRequestBody,
    WorkspaceIdRequestBodyFromJSON,
    WorkspaceIdRequestBodyToJSON,
} from '../models';

export interface CreateCustomSourceDefinitionRequest {
    customSourceDefinitionCreate?: CustomSourceDefinitionCreate;
}

export interface CreateSourceDefinitionRequest {
    sourceDefinitionCreate?: SourceDefinitionCreate;
}

export interface DeleteCustomSourceDefinitionRequest {
    sourceDefinitionIdWithWorkspaceId: SourceDefinitionIdWithWorkspaceId;
}

export interface DeleteSourceDefinitionRequest {
    sourceDefinitionIdRequestBody: SourceDefinitionIdRequestBody;
}

export interface GetSourceDefinitionRequest {
    sourceDefinitionIdRequestBody: SourceDefinitionIdRequestBody;
}

export interface GetSourceDefinitionForWorkspaceRequest {
    sourceDefinitionIdWithWorkspaceId: SourceDefinitionIdWithWorkspaceId;
}

export interface GrantSourceDefinitionToWorkspaceRequest {
    sourceDefinitionIdWithWorkspaceId: SourceDefinitionIdWithWorkspaceId;
}

export interface ListPrivateSourceDefinitionsRequest {
    workspaceIdRequestBody?: WorkspaceIdRequestBody;
}

export interface ListSourceDefinitionsForWorkspaceRequest {
    workspaceIdRequestBody?: WorkspaceIdRequestBody;
}

export interface RevokeSourceDefinitionFromWorkspaceRequest {
    sourceDefinitionIdWithWorkspaceId: SourceDefinitionIdWithWorkspaceId;
}

export interface UpdateCustomSourceDefinitionRequest {
    customSourceDefinitionUpdate?: CustomSourceDefinitionUpdate;
}

export interface UpdateSourceDefinitionRequest {
    sourceDefinitionUpdate?: SourceDefinitionUpdate;
}


/**
 * Creates a custom sourceDefinition for the given workspace
 */
function createCustomSourceDefinitionRaw<T>(requestParameters: CreateCustomSourceDefinitionRequest, requestConfig: runtime.TypedQueryConfig<T, SourceDefinitionRead> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/v1/source_definitions/create_custom`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'POST',
            headers: headerParameters,
        },
        body: queryParameters || CustomSourceDefinitionCreateToJSON(requestParameters.customSourceDefinitionCreate),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(SourceDefinitionReadFromJSON(body), text);
    }

    return config;
}

/**
* Creates a custom sourceDefinition for the given workspace
*/
export function createCustomSourceDefinition<T>(requestParameters: CreateCustomSourceDefinitionRequest, requestConfig?: runtime.TypedQueryConfig<T, SourceDefinitionRead>): QueryConfig<T> {
    return createCustomSourceDefinitionRaw(requestParameters, requestConfig);
}

/**
 * Creates a sourceDefinition
 */
function createSourceDefinitionRaw<T>(requestParameters: CreateSourceDefinitionRequest, requestConfig: runtime.TypedQueryConfig<T, SourceDefinitionRead> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/v1/source_definitions/create`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'POST',
            headers: headerParameters,
        },
        body: queryParameters || SourceDefinitionCreateToJSON(requestParameters.sourceDefinitionCreate),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(SourceDefinitionReadFromJSON(body), text);
    }

    return config;
}

/**
* Creates a sourceDefinition
*/
export function createSourceDefinition<T>(requestParameters: CreateSourceDefinitionRequest, requestConfig?: runtime.TypedQueryConfig<T, SourceDefinitionRead>): QueryConfig<T> {
    return createSourceDefinitionRaw(requestParameters, requestConfig);
}

/**
 * Delete a custom source definition for the given workspace
 */
function deleteCustomSourceDefinitionRaw<T>(requestParameters: DeleteCustomSourceDefinitionRequest, requestConfig: runtime.TypedQueryConfig<T, void> = {}): QueryConfig<T> {
    if (requestParameters.sourceDefinitionIdWithWorkspaceId === null || requestParameters.sourceDefinitionIdWithWorkspaceId === undefined) {
        throw new runtime.RequiredError('sourceDefinitionIdWithWorkspaceId','Required parameter requestParameters.sourceDefinitionIdWithWorkspaceId was null or undefined when calling deleteCustomSourceDefinition.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/v1/source_definitions/delete_custom`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'POST',
            headers: headerParameters,
        },
        body: queryParameters || SourceDefinitionIdWithWorkspaceIdToJSON(requestParameters.sourceDefinitionIdWithWorkspaceId),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
    }

    return config;
}

/**
* Delete a custom source definition for the given workspace
*/
export function deleteCustomSourceDefinition<T>(requestParameters: DeleteCustomSourceDefinitionRequest, requestConfig?: runtime.TypedQueryConfig<T, void>): QueryConfig<T> {
    return deleteCustomSourceDefinitionRaw(requestParameters, requestConfig);
}

/**
 * Delete a source definition
 */
function deleteSourceDefinitionRaw<T>(requestParameters: DeleteSourceDefinitionRequest, requestConfig: runtime.TypedQueryConfig<T, void> = {}): QueryConfig<T> {
    if (requestParameters.sourceDefinitionIdRequestBody === null || requestParameters.sourceDefinitionIdRequestBody === undefined) {
        throw new runtime.RequiredError('sourceDefinitionIdRequestBody','Required parameter requestParameters.sourceDefinitionIdRequestBody was null or undefined when calling deleteSourceDefinition.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/v1/source_definitions/delete`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'POST',
            headers: headerParameters,
        },
        body: queryParameters || SourceDefinitionIdRequestBodyToJSON(requestParameters.sourceDefinitionIdRequestBody),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
    }

    return config;
}

/**
* Delete a source definition
*/
export function deleteSourceDefinition<T>(requestParameters: DeleteSourceDefinitionRequest, requestConfig?: runtime.TypedQueryConfig<T, void>): QueryConfig<T> {
    return deleteSourceDefinitionRaw(requestParameters, requestConfig);
}

/**
 * Get source
 */
function getSourceDefinitionRaw<T>(requestParameters: GetSourceDefinitionRequest, requestConfig: runtime.TypedQueryConfig<T, SourceDefinitionRead> = {}): QueryConfig<T> {
    if (requestParameters.sourceDefinitionIdRequestBody === null || requestParameters.sourceDefinitionIdRequestBody === undefined) {
        throw new runtime.RequiredError('sourceDefinitionIdRequestBody','Required parameter requestParameters.sourceDefinitionIdRequestBody was null or undefined when calling getSourceDefinition.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/v1/source_definitions/get`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'POST',
            headers: headerParameters,
        },
        body: queryParameters || SourceDefinitionIdRequestBodyToJSON(requestParameters.sourceDefinitionIdRequestBody),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(SourceDefinitionReadFromJSON(body), text);
    }

    return config;
}

/**
* Get source
*/
export function getSourceDefinition<T>(requestParameters: GetSourceDefinitionRequest, requestConfig?: runtime.TypedQueryConfig<T, SourceDefinitionRead>): QueryConfig<T> {
    return getSourceDefinitionRaw(requestParameters, requestConfig);
}

/**
 * Get a sourceDefinition that is configured for the given workspace
 */
function getSourceDefinitionForWorkspaceRaw<T>(requestParameters: GetSourceDefinitionForWorkspaceRequest, requestConfig: runtime.TypedQueryConfig<T, SourceDefinitionRead> = {}): QueryConfig<T> {
    if (requestParameters.sourceDefinitionIdWithWorkspaceId === null || requestParameters.sourceDefinitionIdWithWorkspaceId === undefined) {
        throw new runtime.RequiredError('sourceDefinitionIdWithWorkspaceId','Required parameter requestParameters.sourceDefinitionIdWithWorkspaceId was null or undefined when calling getSourceDefinitionForWorkspace.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/v1/source_definitions/get_for_workspace`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'POST',
            headers: headerParameters,
        },
        body: queryParameters || SourceDefinitionIdWithWorkspaceIdToJSON(requestParameters.sourceDefinitionIdWithWorkspaceId),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(SourceDefinitionReadFromJSON(body), text);
    }

    return config;
}

/**
* Get a sourceDefinition that is configured for the given workspace
*/
export function getSourceDefinitionForWorkspace<T>(requestParameters: GetSourceDefinitionForWorkspaceRequest, requestConfig?: runtime.TypedQueryConfig<T, SourceDefinitionRead>): QueryConfig<T> {
    return getSourceDefinitionForWorkspaceRaw(requestParameters, requestConfig);
}

/**
 * grant a private, non-custom sourceDefinition to a given workspace
 */
function grantSourceDefinitionToWorkspaceRaw<T>(requestParameters: GrantSourceDefinitionToWorkspaceRequest, requestConfig: runtime.TypedQueryConfig<T, PrivateSourceDefinitionRead> = {}): QueryConfig<T> {
    if (requestParameters.sourceDefinitionIdWithWorkspaceId === null || requestParameters.sourceDefinitionIdWithWorkspaceId === undefined) {
        throw new runtime.RequiredError('sourceDefinitionIdWithWorkspaceId','Required parameter requestParameters.sourceDefinitionIdWithWorkspaceId was null or undefined when calling grantSourceDefinitionToWorkspace.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/v1/source_definitions/grant_definition`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'POST',
            headers: headerParameters,
        },
        body: queryParameters || SourceDefinitionIdWithWorkspaceIdToJSON(requestParameters.sourceDefinitionIdWithWorkspaceId),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(PrivateSourceDefinitionReadFromJSON(body), text);
    }

    return config;
}

/**
* grant a private, non-custom sourceDefinition to a given workspace
*/
export function grantSourceDefinitionToWorkspace<T>(requestParameters: GrantSourceDefinitionToWorkspaceRequest, requestConfig?: runtime.TypedQueryConfig<T, PrivateSourceDefinitionRead>): QueryConfig<T> {
    return grantSourceDefinitionToWorkspaceRaw(requestParameters, requestConfig);
}

/**
 * Guaranteed to retrieve the latest information on supported sources.
 * List the latest sourceDefinitions Airbyte supports
 */
function listLatestSourceDefinitionsRaw<T>( requestConfig: runtime.TypedQueryConfig<T, SourceDefinitionReadList> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/v1/source_definitions/list_latest`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'POST',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(SourceDefinitionReadListFromJSON(body), text);
    }

    return config;
}

/**
* Guaranteed to retrieve the latest information on supported sources.
* List the latest sourceDefinitions Airbyte supports
*/
export function listLatestSourceDefinitions<T>( requestConfig?: runtime.TypedQueryConfig<T, SourceDefinitionReadList>): QueryConfig<T> {
    return listLatestSourceDefinitionsRaw( requestConfig);
}

/**
 * List all private, non-custom sourceDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace\'s grants.
 */
function listPrivateSourceDefinitionsRaw<T>(requestParameters: ListPrivateSourceDefinitionsRequest, requestConfig: runtime.TypedQueryConfig<T, PrivateSourceDefinitionReadList> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/v1/source_definitions/list_private`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'POST',
            headers: headerParameters,
        },
        body: queryParameters || WorkspaceIdRequestBodyToJSON(requestParameters.workspaceIdRequestBody),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(PrivateSourceDefinitionReadListFromJSON(body), text);
    }

    return config;
}

/**
* List all private, non-custom sourceDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace\'s grants.
*/
export function listPrivateSourceDefinitions<T>(requestParameters: ListPrivateSourceDefinitionsRequest, requestConfig?: runtime.TypedQueryConfig<T, PrivateSourceDefinitionReadList>): QueryConfig<T> {
    return listPrivateSourceDefinitionsRaw(requestParameters, requestConfig);
}

/**
 * List all the sourceDefinitions the current Airbyte deployment is configured to use
 */
function listSourceDefinitionsRaw<T>( requestConfig: runtime.TypedQueryConfig<T, SourceDefinitionReadList> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/v1/source_definitions/list`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'POST',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(SourceDefinitionReadListFromJSON(body), text);
    }

    return config;
}

/**
* List all the sourceDefinitions the current Airbyte deployment is configured to use
*/
export function listSourceDefinitions<T>( requestConfig?: runtime.TypedQueryConfig<T, SourceDefinitionReadList>): QueryConfig<T> {
    return listSourceDefinitionsRaw( requestConfig);
}

/**
 * List all the sourceDefinitions the given workspace is configured to use
 */
function listSourceDefinitionsForWorkspaceRaw<T>(requestParameters: ListSourceDefinitionsForWorkspaceRequest, requestConfig: runtime.TypedQueryConfig<T, SourceDefinitionReadList> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/v1/source_definitions/list_for_workspace`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'POST',
            headers: headerParameters,
        },
        body: queryParameters || WorkspaceIdRequestBodyToJSON(requestParameters.workspaceIdRequestBody),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(SourceDefinitionReadListFromJSON(body), text);
    }

    return config;
}

/**
* List all the sourceDefinitions the given workspace is configured to use
*/
export function listSourceDefinitionsForWorkspace<T>(requestParameters: ListSourceDefinitionsForWorkspaceRequest, requestConfig?: runtime.TypedQueryConfig<T, SourceDefinitionReadList>): QueryConfig<T> {
    return listSourceDefinitionsForWorkspaceRaw(requestParameters, requestConfig);
}

/**
 * revoke a grant to a private, non-custom sourceDefinition from a given workspace
 */
function revokeSourceDefinitionFromWorkspaceRaw<T>(requestParameters: RevokeSourceDefinitionFromWorkspaceRequest, requestConfig: runtime.TypedQueryConfig<T, void> = {}): QueryConfig<T> {
    if (requestParameters.sourceDefinitionIdWithWorkspaceId === null || requestParameters.sourceDefinitionIdWithWorkspaceId === undefined) {
        throw new runtime.RequiredError('sourceDefinitionIdWithWorkspaceId','Required parameter requestParameters.sourceDefinitionIdWithWorkspaceId was null or undefined when calling revokeSourceDefinitionFromWorkspace.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/v1/source_definitions/revoke_definition`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'POST',
            headers: headerParameters,
        },
        body: queryParameters || SourceDefinitionIdWithWorkspaceIdToJSON(requestParameters.sourceDefinitionIdWithWorkspaceId),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
    }

    return config;
}

/**
* revoke a grant to a private, non-custom sourceDefinition from a given workspace
*/
export function revokeSourceDefinitionFromWorkspace<T>(requestParameters: RevokeSourceDefinitionFromWorkspaceRequest, requestConfig?: runtime.TypedQueryConfig<T, void>): QueryConfig<T> {
    return revokeSourceDefinitionFromWorkspaceRaw(requestParameters, requestConfig);
}

/**
 * Update a custom sourceDefinition for the given workspace
 */
function updateCustomSourceDefinitionRaw<T>(requestParameters: UpdateCustomSourceDefinitionRequest, requestConfig: runtime.TypedQueryConfig<T, SourceDefinitionRead> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/v1/source_definitions/update_custom`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'POST',
            headers: headerParameters,
        },
        body: queryParameters || CustomSourceDefinitionUpdateToJSON(requestParameters.customSourceDefinitionUpdate),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(SourceDefinitionReadFromJSON(body), text);
    }

    return config;
}

/**
* Update a custom sourceDefinition for the given workspace
*/
export function updateCustomSourceDefinition<T>(requestParameters: UpdateCustomSourceDefinitionRequest, requestConfig?: runtime.TypedQueryConfig<T, SourceDefinitionRead>): QueryConfig<T> {
    return updateCustomSourceDefinitionRaw(requestParameters, requestConfig);
}

/**
 * Update a sourceDefinition
 */
function updateSourceDefinitionRaw<T>(requestParameters: UpdateSourceDefinitionRequest, requestConfig: runtime.TypedQueryConfig<T, SourceDefinitionRead> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/v1/source_definitions/update`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'POST',
            headers: headerParameters,
        },
        body: queryParameters || SourceDefinitionUpdateToJSON(requestParameters.sourceDefinitionUpdate),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(SourceDefinitionReadFromJSON(body), text);
    }

    return config;
}

/**
* Update a sourceDefinition
*/
export function updateSourceDefinition<T>(requestParameters: UpdateSourceDefinitionRequest, requestConfig?: runtime.TypedQueryConfig<T, SourceDefinitionRead>): QueryConfig<T> {
    return updateSourceDefinitionRaw(requestParameters, requestConfig);
}
