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
    InvalidInputExceptionInfo,
    InvalidInputExceptionInfoFromJSON,
    InvalidInputExceptionInfoToJSON,
    LogsRequestBody,
    LogsRequestBodyFromJSON,
    LogsRequestBodyToJSON,
    NotFoundKnownExceptionInfo,
    NotFoundKnownExceptionInfoFromJSON,
    NotFoundKnownExceptionInfoToJSON,
} from '../models';

export interface GetLogsRequest {
    logsRequestBody: LogsRequestBody;
}


/**
 * Get logs
 */
function getLogsRaw<T>(requestParameters: GetLogsRequest, requestConfig: runtime.TypedQueryConfig<T, Blob> = {}): QueryConfig<T> {
    if (requestParameters.logsRequestBody === null || requestParameters.logsRequestBody === undefined) {
        throw new runtime.RequiredError('logsRequestBody','Required parameter requestParameters.logsRequestBody was null or undefined when calling getLogs.');
    }

    let queryParameters = null;


    const headerParameters : runtime.HttpHeaders = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `${runtime.Configuration.basePath}/v1/logs/get`,
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
        body: queryParameters || LogsRequestBodyToJSON(requestParameters.logsRequestBody),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        throw "OH NO";
    }

    return config;
}

/**
* Get logs
*/
export function getLogs<T>(requestParameters: GetLogsRequest, requestConfig?: runtime.TypedQueryConfig<T, Blob>): QueryConfig<T> {
    return getLogsRaw(requestParameters, requestConfig);
}

