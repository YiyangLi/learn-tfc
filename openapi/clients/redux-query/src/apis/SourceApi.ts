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
    CheckConnectionRead,
    CheckConnectionReadFromJSON,
    CheckConnectionReadToJSON,
    InvalidInputExceptionInfo,
    InvalidInputExceptionInfoFromJSON,
    InvalidInputExceptionInfoToJSON,
    NotFoundKnownExceptionInfo,
    NotFoundKnownExceptionInfoFromJSON,
    NotFoundKnownExceptionInfoToJSON,
    SourceCreate,
    SourceCreateFromJSON,
    SourceCreateToJSON,
    SourceDiscoverSchemaRead,
    SourceDiscoverSchemaReadFromJSON,
    SourceDiscoverSchemaReadToJSON,
    SourceDiscoverSchemaRequestBody,
    SourceDiscoverSchemaRequestBodyFromJSON,
    SourceDiscoverSchemaRequestBodyToJSON,
    SourceIdRequestBody,
    SourceIdRequestBodyFromJSON,
    SourceIdRequestBodyToJSON,
    SourceRead,
    SourceReadFromJSON,
    SourceReadToJSON,
    SourceReadList,
    SourceReadListFromJSON,
    SourceReadListToJSON,
    SourceSearch,
    SourceSearchFromJSON,
    SourceSearchToJSON,
    SourceUpdate,
    SourceUpdateFromJSON,
    SourceUpdateToJSON,
    WorkspaceIdRequestBody,
    WorkspaceIdRequestBodyFromJSON,
    WorkspaceIdRequestBodyToJSON,
} from '../models';

export interface CheckConnectionToSourceRequest {
    sourceIdRequestBody: SourceIdRequestBody;
}

export interface CheckConnectionToSourceForUpdateRequest {
    sourceUpdate: SourceUpdate;
}

export interface CloneSourceRequest {
    sourceIdRequestBody: SourceIdRequestBody;
}

export interface CreateSourceRequest {
    sourceCreate: SourceCreate;
}

export interface DeleteSourceRequest {
    sourceIdRequestBody: SourceIdRequestBody;
}

export interface DiscoverSchemaForSourceRequest {
    sourceDiscoverSchemaRequestBody: SourceDiscoverSchemaRequestBody;
}

export interface GetSourceRequest {
    sourceIdRequestBody: SourceIdRequestBody;
}

export interface ListSourcesForWorkspaceRequest {
    workspaceIdRequestBody: WorkspaceIdRequestBody;
}

export interface SearchSourcesRequest {
    sourceSearch: SourceSearch;
}

export interface UpdateSourceRequest {
    sourceUpdate: SourceUpdate;
}


/**
 * Check connection to the source
 */
function checkConnectionToSourceRaw<T>(requestParameters: CheckConnectionToSourceRequest, requestConfig: runtime.TypedQueryConfig<T, CheckConnectionRead> = {}): QueryConfig<T> {
    if (requestParameters.sourceIdRequestBody === null || requestParameters.sourceIdRequestBody === undefined) {
        throw new runtime.RequiredError('sourceIdRequestBody','Required parameter requestParameters.sourceIdRequestBody was null or undefined when calling checkConnectionToSource.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/v1/sources/check_connection`,
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
        body: queryParameters || SourceIdRequestBodyToJSON(requestParameters.sourceIdRequestBody),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(CheckConnectionReadFromJSON(body), text);
    }

    return config;
}

/**
* Check connection to the source
*/
export function checkConnectionToSource<T>(requestParameters: CheckConnectionToSourceRequest, requestConfig?: runtime.TypedQueryConfig<T, CheckConnectionRead>): QueryConfig<T> {
    return checkConnectionToSourceRaw(requestParameters, requestConfig);
}

/**
 * Check connection for a proposed update to a source
 */
function checkConnectionToSourceForUpdateRaw<T>(requestParameters: CheckConnectionToSourceForUpdateRequest, requestConfig: runtime.TypedQueryConfig<T, CheckConnectionRead> = {}): QueryConfig<T> {
    if (requestParameters.sourceUpdate === null || requestParameters.sourceUpdate === undefined) {
        throw new runtime.RequiredError('sourceUpdate','Required parameter requestParameters.sourceUpdate was null or undefined when calling checkConnectionToSourceForUpdate.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/v1/sources/check_connection_for_update`,
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
        body: queryParameters || SourceUpdateToJSON(requestParameters.sourceUpdate),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(CheckConnectionReadFromJSON(body), text);
    }

    return config;
}

/**
* Check connection for a proposed update to a source
*/
export function checkConnectionToSourceForUpdate<T>(requestParameters: CheckConnectionToSourceForUpdateRequest, requestConfig?: runtime.TypedQueryConfig<T, CheckConnectionRead>): QueryConfig<T> {
    return checkConnectionToSourceForUpdateRaw(requestParameters, requestConfig);
}

/**
 * Clone source
 */
function cloneSourceRaw<T>(requestParameters: CloneSourceRequest, requestConfig: runtime.TypedQueryConfig<T, SourceRead> = {}): QueryConfig<T> {
    if (requestParameters.sourceIdRequestBody === null || requestParameters.sourceIdRequestBody === undefined) {
        throw new runtime.RequiredError('sourceIdRequestBody','Required parameter requestParameters.sourceIdRequestBody was null or undefined when calling cloneSource.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/v1/sources/clone`,
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
        body: queryParameters || SourceIdRequestBodyToJSON(requestParameters.sourceIdRequestBody),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(SourceReadFromJSON(body), text);
    }

    return config;
}

/**
* Clone source
*/
export function cloneSource<T>(requestParameters: CloneSourceRequest, requestConfig?: runtime.TypedQueryConfig<T, SourceRead>): QueryConfig<T> {
    return cloneSourceRaw(requestParameters, requestConfig);
}

/**
 * Create a source
 */
function createSourceRaw<T>(requestParameters: CreateSourceRequest, requestConfig: runtime.TypedQueryConfig<T, SourceRead> = {}): QueryConfig<T> {
    if (requestParameters.sourceCreate === null || requestParameters.sourceCreate === undefined) {
        throw new runtime.RequiredError('sourceCreate','Required parameter requestParameters.sourceCreate was null or undefined when calling createSource.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/v1/sources/create`,
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
        body: queryParameters || SourceCreateToJSON(requestParameters.sourceCreate),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(SourceReadFromJSON(body), text);
    }

    return config;
}

/**
* Create a source
*/
export function createSource<T>(requestParameters: CreateSourceRequest, requestConfig?: runtime.TypedQueryConfig<T, SourceRead>): QueryConfig<T> {
    return createSourceRaw(requestParameters, requestConfig);
}

/**
 * Delete a source
 */
function deleteSourceRaw<T>(requestParameters: DeleteSourceRequest, requestConfig: runtime.TypedQueryConfig<T, void> = {}): QueryConfig<T> {
    if (requestParameters.sourceIdRequestBody === null || requestParameters.sourceIdRequestBody === undefined) {
        throw new runtime.RequiredError('sourceIdRequestBody','Required parameter requestParameters.sourceIdRequestBody was null or undefined when calling deleteSource.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/v1/sources/delete`,
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
        body: queryParameters || SourceIdRequestBodyToJSON(requestParameters.sourceIdRequestBody),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
    }

    return config;
}

/**
* Delete a source
*/
export function deleteSource<T>(requestParameters: DeleteSourceRequest, requestConfig?: runtime.TypedQueryConfig<T, void>): QueryConfig<T> {
    return deleteSourceRaw(requestParameters, requestConfig);
}

/**
 * Discover the schema catalog of the source
 */
function discoverSchemaForSourceRaw<T>(requestParameters: DiscoverSchemaForSourceRequest, requestConfig: runtime.TypedQueryConfig<T, SourceDiscoverSchemaRead> = {}): QueryConfig<T> {
    if (requestParameters.sourceDiscoverSchemaRequestBody === null || requestParameters.sourceDiscoverSchemaRequestBody === undefined) {
        throw new runtime.RequiredError('sourceDiscoverSchemaRequestBody','Required parameter requestParameters.sourceDiscoverSchemaRequestBody was null or undefined when calling discoverSchemaForSource.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/v1/sources/discover_schema`,
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
        body: queryParameters || SourceDiscoverSchemaRequestBodyToJSON(requestParameters.sourceDiscoverSchemaRequestBody),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(SourceDiscoverSchemaReadFromJSON(body), text);
    }

    return config;
}

/**
* Discover the schema catalog of the source
*/
export function discoverSchemaForSource<T>(requestParameters: DiscoverSchemaForSourceRequest, requestConfig?: runtime.TypedQueryConfig<T, SourceDiscoverSchemaRead>): QueryConfig<T> {
    return discoverSchemaForSourceRaw(requestParameters, requestConfig);
}

/**
 * Get source
 */
function getSourceRaw<T>(requestParameters: GetSourceRequest, requestConfig: runtime.TypedQueryConfig<T, SourceRead> = {}): QueryConfig<T> {
    if (requestParameters.sourceIdRequestBody === null || requestParameters.sourceIdRequestBody === undefined) {
        throw new runtime.RequiredError('sourceIdRequestBody','Required parameter requestParameters.sourceIdRequestBody was null or undefined when calling getSource.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/v1/sources/get`,
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
        body: queryParameters || SourceIdRequestBodyToJSON(requestParameters.sourceIdRequestBody),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(SourceReadFromJSON(body), text);
    }

    return config;
}

/**
* Get source
*/
export function getSource<T>(requestParameters: GetSourceRequest, requestConfig?: runtime.TypedQueryConfig<T, SourceRead>): QueryConfig<T> {
    return getSourceRaw(requestParameters, requestConfig);
}

/**
 * List sources for workspace. Does not return deleted sources.
 * List sources for workspace
 */
function listSourcesForWorkspaceRaw<T>(requestParameters: ListSourcesForWorkspaceRequest, requestConfig: runtime.TypedQueryConfig<T, SourceReadList> = {}): QueryConfig<T> {
    if (requestParameters.workspaceIdRequestBody === null || requestParameters.workspaceIdRequestBody === undefined) {
        throw new runtime.RequiredError('workspaceIdRequestBody','Required parameter requestParameters.workspaceIdRequestBody was null or undefined when calling listSourcesForWorkspace.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/v1/sources/list`,
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
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(SourceReadListFromJSON(body), text);
    }

    return config;
}

/**
* List sources for workspace. Does not return deleted sources.
* List sources for workspace
*/
export function listSourcesForWorkspace<T>(requestParameters: ListSourcesForWorkspaceRequest, requestConfig?: runtime.TypedQueryConfig<T, SourceReadList>): QueryConfig<T> {
    return listSourcesForWorkspaceRaw(requestParameters, requestConfig);
}

/**
 * Search sources
 */
function searchSourcesRaw<T>(requestParameters: SearchSourcesRequest, requestConfig: runtime.TypedQueryConfig<T, SourceReadList> = {}): QueryConfig<T> {
    if (requestParameters.sourceSearch === null || requestParameters.sourceSearch === undefined) {
        throw new runtime.RequiredError('sourceSearch','Required parameter requestParameters.sourceSearch was null or undefined when calling searchSources.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/v1/sources/search`,
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
        body: queryParameters || SourceSearchToJSON(requestParameters.sourceSearch),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(SourceReadListFromJSON(body), text);
    }

    return config;
}

/**
* Search sources
*/
export function searchSources<T>(requestParameters: SearchSourcesRequest, requestConfig?: runtime.TypedQueryConfig<T, SourceReadList>): QueryConfig<T> {
    return searchSourcesRaw(requestParameters, requestConfig);
}

/**
 * Update a source
 */
function updateSourceRaw<T>(requestParameters: UpdateSourceRequest, requestConfig: runtime.TypedQueryConfig<T, SourceRead> = {}): QueryConfig<T> {
    if (requestParameters.sourceUpdate === null || requestParameters.sourceUpdate === undefined) {
        throw new runtime.RequiredError('sourceUpdate','Required parameter requestParameters.sourceUpdate was null or undefined when calling updateSource.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/v1/sources/update`,
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
        body: queryParameters || SourceUpdateToJSON(requestParameters.sourceUpdate),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(SourceReadFromJSON(body), text);
    }

    return config;
}

/**
* Update a source
*/
export function updateSource<T>(requestParameters: UpdateSourceRequest, requestConfig?: runtime.TypedQueryConfig<T, SourceRead>): QueryConfig<T> {
    return updateSourceRaw(requestParameters, requestConfig);
}
