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
import {
    DbMigrationRead,
    DbMigrationReadFromJSON,
    DbMigrationReadFromJSONTyped,
    DbMigrationReadToJSON,
} from './DbMigrationRead';

/**
 * 
 * @export
 * @interface DbMigrationExecutionRead
 */
export interface DbMigrationExecutionRead {
    /**
     * 
     * @type {string}
     * @memberof DbMigrationExecutionRead
     */
    initialVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof DbMigrationExecutionRead
     */
    targetVersion?: string;
    /**
     * 
     * @type {Array<DbMigrationRead>}
     * @memberof DbMigrationExecutionRead
     */
    executedMigrations?: Array<DbMigrationRead>;
}

export function DbMigrationExecutionReadFromJSON(json: any): DbMigrationExecutionRead {
    return DbMigrationExecutionReadFromJSONTyped(json, false);
}

export function DbMigrationExecutionReadFromJSONTyped(json: any, ignoreDiscriminator: boolean): DbMigrationExecutionRead {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'initialVersion': !exists(json, 'initialVersion') ? undefined : json['initialVersion'],
        'targetVersion': !exists(json, 'targetVersion') ? undefined : json['targetVersion'],
        'executedMigrations': !exists(json, 'executedMigrations') ? undefined : ((json['executedMigrations'] as Array<any>).map(DbMigrationReadFromJSON)),
    };
}

export function DbMigrationExecutionReadToJSON(value?: DbMigrationExecutionRead | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'initialVersion': value.initialVersion,
        'targetVersion': value.targetVersion,
        'executedMigrations': value.executedMigrations === undefined ? undefined : ((value.executedMigrations as Array<any>).map(DbMigrationReadToJSON)),
    };
}

