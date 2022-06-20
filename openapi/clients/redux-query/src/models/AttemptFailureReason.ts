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
import {
    AttemptFailureOrigin,
    AttemptFailureOriginFromJSON,
    AttemptFailureOriginToJSON,
    AttemptFailureType,
    AttemptFailureTypeFromJSON,
    AttemptFailureTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface AttemptFailureReason
 */
export interface AttemptFailureReason  {
    /**
     * 
     * @type {AttemptFailureOrigin}
     * @memberof AttemptFailureReason
     */
    failureOrigin?: AttemptFailureOrigin;
    /**
     * 
     * @type {AttemptFailureType}
     * @memberof AttemptFailureReason
     */
    failureType?: AttemptFailureType;
    /**
     * 
     * @type {string}
     * @memberof AttemptFailureReason
     */
    externalMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof AttemptFailureReason
     */
    internalMessage?: string;
    /**
     * 
     * @type {string}
     * @memberof AttemptFailureReason
     */
    stacktrace?: string;
    /**
     * True if it is known that retrying may succeed, e.g. for a transient failure. False if it is known that a retry will not succeed, e.g. for a configuration issue. If not set, retryable status is not well known.
     * @type {boolean}
     * @memberof AttemptFailureReason
     */
    retryable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof AttemptFailureReason
     */
    timestamp: number;
}

export function AttemptFailureReasonFromJSON(json: any): AttemptFailureReason {
    return {
        'failureOrigin': !exists(json, 'failureOrigin') ? undefined : AttemptFailureOriginFromJSON(json['failureOrigin']),
        'failureType': !exists(json, 'failureType') ? undefined : AttemptFailureTypeFromJSON(json['failureType']),
        'externalMessage': !exists(json, 'externalMessage') ? undefined : json['externalMessage'],
        'internalMessage': !exists(json, 'internalMessage') ? undefined : json['internalMessage'],
        'stacktrace': !exists(json, 'stacktrace') ? undefined : json['stacktrace'],
        'retryable': !exists(json, 'retryable') ? undefined : json['retryable'],
        'timestamp': json['timestamp'],
    };
}

export function AttemptFailureReasonToJSON(value?: AttemptFailureReason): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'failureOrigin': AttemptFailureOriginToJSON(value.failureOrigin),
        'failureType': AttemptFailureTypeToJSON(value.failureType),
        'externalMessage': value.externalMessage,
        'internalMessage': value.internalMessage,
        'stacktrace': value.stacktrace,
        'retryable': value.retryable,
        'timestamp': value.timestamp,
    };
}

