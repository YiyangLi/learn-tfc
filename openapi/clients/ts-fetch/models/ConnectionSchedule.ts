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

import { exists, mapValues } from '../runtime';
/**
 * if null, then no schedule is set.
 * @export
 * @interface ConnectionSchedule
 */
export interface ConnectionSchedule {
    /**
     * 
     * @type {number}
     * @memberof ConnectionSchedule
     */
    units: number;
    /**
     * 
     * @type {string}
     * @memberof ConnectionSchedule
     */
    timeUnit: ConnectionScheduleTimeUnitEnum;
}


/**
 * @export
 */
export const ConnectionScheduleTimeUnitEnum = {
    Minutes: 'minutes',
    Hours: 'hours',
    Days: 'days',
    Weeks: 'weeks',
    Months: 'months'
} as const;
export type ConnectionScheduleTimeUnitEnum = typeof ConnectionScheduleTimeUnitEnum[keyof typeof ConnectionScheduleTimeUnitEnum];


export function ConnectionScheduleFromJSON(json: any): ConnectionSchedule {
    return ConnectionScheduleFromJSONTyped(json, false);
}

export function ConnectionScheduleFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectionSchedule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'units': json['units'],
        'timeUnit': json['timeUnit'],
    };
}

export function ConnectionScheduleToJSON(value?: ConnectionSchedule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'units': value.units,
        'timeUnit': value.timeUnit,
    };
}

