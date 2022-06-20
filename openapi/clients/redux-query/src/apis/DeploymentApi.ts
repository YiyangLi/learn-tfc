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
    ImportRead,
    ImportReadFromJSON,
    ImportReadToJSON,
    ImportRequestBody,
    ImportRequestBodyFromJSON,
    ImportRequestBodyToJSON,
    NotFoundKnownExceptionInfo,
    NotFoundKnownExceptionInfoFromJSON,
    NotFoundKnownExceptionInfoToJSON,
    UploadRead,
    UploadReadFromJSON,
    UploadReadToJSON,
    WorkspaceIdRequestBody,
    WorkspaceIdRequestBodyFromJSON,
    WorkspaceIdRequestBodyToJSON,
} from '../models';

export interface ExportWorkspaceRequest {
    workspaceIdRequestBody: WorkspaceIdRequestBody;
}

export interface ImportArchiveRequest {
    body: Blob;
}

export interface ImportIntoWorkspaceRequest {
    importRequestBody: ImportRequestBody;
}

export interface UploadArchiveResourceRequest {
    body: Blob;
}


/**
 * Export Airbyte Configuration and Data Archive
 */
function exportArchiveRaw<T>( requestConfig: runtime.TypedQueryConfig<T, Blob> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/v1/deployment/export`,
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
        throw "OH NO";
    }

    return config;
}

/**
* Export Airbyte Configuration and Data Archive
*/
export function exportArchive<T>( requestConfig?: runtime.TypedQueryConfig<T, Blob>): QueryConfig<T> {
    return exportArchiveRaw( requestConfig);
}

/**
 * Export Airbyte Workspace Configuration
 */
function exportWorkspaceRaw<T>(requestParameters: ExportWorkspaceRequest, requestConfig: runtime.TypedQueryConfig<T, Blob> = {}): QueryConfig<T> {
    if (requestParameters.workspaceIdRequestBody === null || requestParameters.workspaceIdRequestBody === undefined) {
        throw new runtime.RequiredError('workspaceIdRequestBody','Required parameter requestParameters.workspaceIdRequestBody was null or undefined when calling exportWorkspace.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/v1/deployment/export_workspace`,
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
        throw "OH NO";
    }

    return config;
}

/**
* Export Airbyte Workspace Configuration
*/
export function exportWorkspace<T>(requestParameters: ExportWorkspaceRequest, requestConfig?: runtime.TypedQueryConfig<T, Blob>): QueryConfig<T> {
    return exportWorkspaceRaw(requestParameters, requestConfig);
}

/**
 * Import Airbyte Configuration and Data Archive
 */
function importArchiveRaw<T>(requestParameters: ImportArchiveRequest, requestConfig: runtime.TypedQueryConfig<T, ImportRead> = {}): QueryConfig<T> {
    if (requestParameters.body === null || requestParameters.body === undefined) {
        throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling importArchive.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/x-gzip';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/v1/deployment/import`,
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
        body: queryParameters || requestParameters.body as any,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(ImportReadFromJSON(body), text);
    }

    return config;
}

/**
* Import Airbyte Configuration and Data Archive
*/
export function importArchive<T>(requestParameters: ImportArchiveRequest, requestConfig?: runtime.TypedQueryConfig<T, ImportRead>): QueryConfig<T> {
    return importArchiveRaw(requestParameters, requestConfig);
}

/**
 * Import Airbyte Configuration into Workspace (this operation might change ids of imported configurations). Note, in order to use this api endpoint, you might need to upload a temporary archive resource with \'deployment/upload_archive_resource\' first 
 */
function importIntoWorkspaceRaw<T>(requestParameters: ImportIntoWorkspaceRequest, requestConfig: runtime.TypedQueryConfig<T, ImportRead> = {}): QueryConfig<T> {
    if (requestParameters.importRequestBody === null || requestParameters.importRequestBody === undefined) {
        throw new runtime.RequiredError('importRequestBody','Required parameter requestParameters.importRequestBody was null or undefined when calling importIntoWorkspace.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/v1/deployment/import_into_workspace`,
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
        body: queryParameters || ImportRequestBodyToJSON(requestParameters.importRequestBody),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(ImportReadFromJSON(body), text);
    }

    return config;
}

/**
* Import Airbyte Configuration into Workspace (this operation might change ids of imported configurations). Note, in order to use this api endpoint, you might need to upload a temporary archive resource with \'deployment/upload_archive_resource\' first 
*/
export function importIntoWorkspace<T>(requestParameters: ImportIntoWorkspaceRequest, requestConfig?: runtime.TypedQueryConfig<T, ImportRead>): QueryConfig<T> {
    return importIntoWorkspaceRaw(requestParameters, requestConfig);
}

/**
 * Upload a GZIP archive tarball and stage it in the server\'s cache as a temporary resource
 */
function uploadArchiveResourceRaw<T>(requestParameters: UploadArchiveResourceRequest, requestConfig: runtime.TypedQueryConfig<T, UploadRead> = {}): QueryConfig<T> {
    if (requestParameters.body === null || requestParameters.body === undefined) {
        throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling uploadArchiveResource.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/x-gzip';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/v1/deployment/upload_archive_resource`,
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
        body: queryParameters || requestParameters.body as any,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(UploadReadFromJSON(body), text);
    }

    return config;
}

/**
* Upload a GZIP archive tarball and stage it in the server\'s cache as a temporary resource
*/
export function uploadArchiveResource<T>(requestParameters: UploadArchiveResourceRequest, requestConfig?: runtime.TypedQueryConfig<T, UploadRead>): QueryConfig<T> {
    return uploadArchiveResourceRaw(requestParameters, requestConfig);
}
