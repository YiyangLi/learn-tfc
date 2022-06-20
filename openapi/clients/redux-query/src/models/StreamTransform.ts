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
    FieldTransform,
    FieldTransformFromJSON,
    FieldTransformToJSON,
    StreamDescriptor,
    StreamDescriptorFromJSON,
    StreamDescriptorToJSON,
} from './';

/**
 * 
 * @export
 * @interface StreamTransform
 */
export interface StreamTransform  {
    /**
     * 
     * @type {string}
     * @memberof StreamTransform
     */
    transformType: StreamTransformTransformTypeEnum;
    /**
     * 
     * @type {StreamDescriptor}
     * @memberof StreamTransform
     */
    addStream?: StreamDescriptor;
    /**
     * 
     * @type {StreamDescriptor}
     * @memberof StreamTransform
     */
    removeStream?: StreamDescriptor;
    /**
     * list of field transformations. order does not matter.
     * @type {Array<FieldTransform>}
     * @memberof StreamTransform
     */
    updateStream?: Array<FieldTransform>;
}

export function StreamTransformFromJSON(json: any): StreamTransform {
    return {
        'transformType': json['transformType'],
        'addStream': !exists(json, 'addStream') ? undefined : StreamDescriptorFromJSON(json['addStream']),
        'removeStream': !exists(json, 'removeStream') ? undefined : StreamDescriptorFromJSON(json['removeStream']),
        'updateStream': !exists(json, 'updateStream') ? undefined : (json['updateStream'] as Array<any>).map(FieldTransformFromJSON),
    };
}

export function StreamTransformToJSON(value?: StreamTransform): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'transformType': value.transformType,
        'addStream': StreamDescriptorToJSON(value.addStream),
        'removeStream': StreamDescriptorToJSON(value.removeStream),
        'updateStream': value.updateStream === undefined ? undefined : (value.updateStream as Array<any>).map(FieldTransformToJSON),
    };
}

/**
* @export
* @enum {string}
*/
export enum StreamTransformTransformTypeEnum {
    AddStream = 'add_stream',
    RemoveStream = 'remove_stream',
    UpdateStream = 'update_stream'
}


