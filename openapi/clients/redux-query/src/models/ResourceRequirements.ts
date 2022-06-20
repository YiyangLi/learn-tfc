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

import { exists, mapValues } from '../runtime';
/**
 * optional resource requirements to run workers (blank for unbounded allocations)
 * @export
 * @interface ResourceRequirements
 */
export interface ResourceRequirements  {
    /**
     * 
     * @type {string}
     * @memberof ResourceRequirements
     */
    cpuRequest?: string;
    /**
     * 
     * @type {string}
     * @memberof ResourceRequirements
     */
    cpuLimit?: string;
    /**
     * 
     * @type {string}
     * @memberof ResourceRequirements
     */
    memoryRequest?: string;
    /**
     * 
     * @type {string}
     * @memberof ResourceRequirements
     */
    memoryLimit?: string;
}

export function ResourceRequirementsFromJSON(json: any): ResourceRequirements {
    return {
        'cpuRequest': !exists(json, 'cpu_request') ? undefined : json['cpu_request'],
        'cpuLimit': !exists(json, 'cpu_limit') ? undefined : json['cpu_limit'],
        'memoryRequest': !exists(json, 'memory_request') ? undefined : json['memory_request'],
        'memoryLimit': !exists(json, 'memory_limit') ? undefined : json['memory_limit'],
    };
}

export function ResourceRequirementsToJSON(value?: ResourceRequirements): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'cpu_request': value.cpuRequest,
        'cpu_limit': value.cpuLimit,
        'memory_request': value.memoryRequest,
        'memory_limit': value.memoryLimit,
    };
}


