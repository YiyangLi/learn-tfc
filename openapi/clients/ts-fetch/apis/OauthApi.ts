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
    CompleteDestinationOAuthRequest,
    CompleteDestinationOAuthRequestFromJSON,
    CompleteDestinationOAuthRequestToJSON,
    CompleteSourceOauthRequest,
    CompleteSourceOauthRequestFromJSON,
    CompleteSourceOauthRequestToJSON,
    DestinationOauthConsentRequest,
    DestinationOauthConsentRequestFromJSON,
    DestinationOauthConsentRequestToJSON,
    InvalidInputExceptionInfo,
    InvalidInputExceptionInfoFromJSON,
    InvalidInputExceptionInfoToJSON,
    KnownExceptionInfo,
    KnownExceptionInfoFromJSON,
    KnownExceptionInfoToJSON,
    NotFoundKnownExceptionInfo,
    NotFoundKnownExceptionInfoFromJSON,
    NotFoundKnownExceptionInfoToJSON,
    OAuthConsentRead,
    OAuthConsentReadFromJSON,
    OAuthConsentReadToJSON,
    SetInstancewideDestinationOauthParamsRequestBody,
    SetInstancewideDestinationOauthParamsRequestBodyFromJSON,
    SetInstancewideDestinationOauthParamsRequestBodyToJSON,
    SetInstancewideSourceOauthParamsRequestBody,
    SetInstancewideSourceOauthParamsRequestBodyFromJSON,
    SetInstancewideSourceOauthParamsRequestBodyToJSON,
    SourceOauthConsentRequest,
    SourceOauthConsentRequestFromJSON,
    SourceOauthConsentRequestToJSON,
} from '../models';

export interface CompleteDestinationOAuthOperationRequest {
    completeDestinationOAuthRequest: CompleteDestinationOAuthRequest;
}

export interface CompleteSourceOAuthRequest {
    completeSourceOauthRequest: CompleteSourceOauthRequest;
}

export interface GetDestinationOAuthConsentRequest {
    destinationOauthConsentRequest: DestinationOauthConsentRequest;
}

export interface GetSourceOAuthConsentRequest {
    sourceOauthConsentRequest: SourceOauthConsentRequest;
}

export interface SetInstancewideDestinationOauthParamsRequest {
    setInstancewideDestinationOauthParamsRequestBody: SetInstancewideDestinationOauthParamsRequestBody;
}

export interface SetInstancewideSourceOauthParamsRequest {
    setInstancewideSourceOauthParamsRequestBody: SetInstancewideSourceOauthParamsRequestBody;
}

/**
 * 
 */
export class OauthApi extends runtime.BaseAPI {

    /**
     * Given a destination def ID generate an access/refresh token etc.
     */
    async completeDestinationOAuthRaw(requestParameters: CompleteDestinationOAuthOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<{ [key: string]: any; }>> {
        if (requestParameters.completeDestinationOAuthRequest === null || requestParameters.completeDestinationOAuthRequest === undefined) {
            throw new runtime.RequiredError('completeDestinationOAuthRequest','Required parameter requestParameters.completeDestinationOAuthRequest was null or undefined when calling completeDestinationOAuth.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/destination_oauths/complete_oauth`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CompleteDestinationOAuthRequestToJSON(requestParameters.completeDestinationOAuthRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Given a destination def ID generate an access/refresh token etc.
     */
    async completeDestinationOAuth(requestParameters: CompleteDestinationOAuthOperationRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<{ [key: string]: any; }> {
        const response = await this.completeDestinationOAuthRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Given a source def ID generate an access/refresh token etc.
     */
    async completeSourceOAuthRaw(requestParameters: CompleteSourceOAuthRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<{ [key: string]: any; }>> {
        if (requestParameters.completeSourceOauthRequest === null || requestParameters.completeSourceOauthRequest === undefined) {
            throw new runtime.RequiredError('completeSourceOauthRequest','Required parameter requestParameters.completeSourceOauthRequest was null or undefined when calling completeSourceOAuth.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/source_oauths/complete_oauth`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CompleteSourceOauthRequestToJSON(requestParameters.completeSourceOauthRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Given a source def ID generate an access/refresh token etc.
     */
    async completeSourceOAuth(requestParameters: CompleteSourceOAuthRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<{ [key: string]: any; }> {
        const response = await this.completeSourceOAuthRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Given a destination connector definition ID, return the URL to the consent screen where to redirect the user to.
     */
    async getDestinationOAuthConsentRaw(requestParameters: GetDestinationOAuthConsentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<OAuthConsentRead>> {
        if (requestParameters.destinationOauthConsentRequest === null || requestParameters.destinationOauthConsentRequest === undefined) {
            throw new runtime.RequiredError('destinationOauthConsentRequest','Required parameter requestParameters.destinationOauthConsentRequest was null or undefined when calling getDestinationOAuthConsent.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/destination_oauths/get_consent_url`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DestinationOauthConsentRequestToJSON(requestParameters.destinationOauthConsentRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OAuthConsentReadFromJSON(jsonValue));
    }

    /**
     * Given a destination connector definition ID, return the URL to the consent screen where to redirect the user to.
     */
    async getDestinationOAuthConsent(requestParameters: GetDestinationOAuthConsentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<OAuthConsentRead> {
        const response = await this.getDestinationOAuthConsentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Given a source connector definition ID, return the URL to the consent screen where to redirect the user to.
     */
    async getSourceOAuthConsentRaw(requestParameters: GetSourceOAuthConsentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<OAuthConsentRead>> {
        if (requestParameters.sourceOauthConsentRequest === null || requestParameters.sourceOauthConsentRequest === undefined) {
            throw new runtime.RequiredError('sourceOauthConsentRequest','Required parameter requestParameters.sourceOauthConsentRequest was null or undefined when calling getSourceOAuthConsent.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/source_oauths/get_consent_url`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SourceOauthConsentRequestToJSON(requestParameters.sourceOauthConsentRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OAuthConsentReadFromJSON(jsonValue));
    }

    /**
     * Given a source connector definition ID, return the URL to the consent screen where to redirect the user to.
     */
    async getSourceOAuthConsent(requestParameters: GetSourceOAuthConsentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<OAuthConsentRead> {
        const response = await this.getSourceOAuthConsentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Sets instancewide variables to be used for the oauth flow when creating this destination. When set, these variables will be injected into a connector\'s configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company\'s Google Ads developer_token, client_id, and client_secret without the user having to know about these variables. 
     */
    async setInstancewideDestinationOauthParamsRaw(requestParameters: SetInstancewideDestinationOauthParamsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.setInstancewideDestinationOauthParamsRequestBody === null || requestParameters.setInstancewideDestinationOauthParamsRequestBody === undefined) {
            throw new runtime.RequiredError('setInstancewideDestinationOauthParamsRequestBody','Required parameter requestParameters.setInstancewideDestinationOauthParamsRequestBody was null or undefined when calling setInstancewideDestinationOauthParams.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/destination_oauths/oauth_params/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SetInstancewideDestinationOauthParamsRequestBodyToJSON(requestParameters.setInstancewideDestinationOauthParamsRequestBody),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Sets instancewide variables to be used for the oauth flow when creating this destination. When set, these variables will be injected into a connector\'s configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company\'s Google Ads developer_token, client_id, and client_secret without the user having to know about these variables. 
     */
    async setInstancewideDestinationOauthParams(requestParameters: SetInstancewideDestinationOauthParamsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.setInstancewideDestinationOauthParamsRaw(requestParameters, initOverrides);
    }

    /**
     * Sets instancewide variables to be used for the oauth flow when creating this source. When set, these variables will be injected into a connector\'s configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company\'s Google Ads developer_token, client_id, and client_secret without the user having to know about these variables. 
     */
    async setInstancewideSourceOauthParamsRaw(requestParameters: SetInstancewideSourceOauthParamsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.setInstancewideSourceOauthParamsRequestBody === null || requestParameters.setInstancewideSourceOauthParamsRequestBody === undefined) {
            throw new runtime.RequiredError('setInstancewideSourceOauthParamsRequestBody','Required parameter requestParameters.setInstancewideSourceOauthParamsRequestBody was null or undefined when calling setInstancewideSourceOauthParams.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/source_oauths/oauth_params/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SetInstancewideSourceOauthParamsRequestBodyToJSON(requestParameters.setInstancewideSourceOauthParamsRequestBody),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Sets instancewide variables to be used for the oauth flow when creating this source. When set, these variables will be injected into a connector\'s configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company\'s Google Ads developer_token, client_id, and client_secret without the user having to know about these variables. 
     */
    async setInstancewideSourceOauthParams(requestParameters: SetInstancewideSourceOauthParamsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.setInstancewideSourceOauthParamsRaw(requestParameters, initOverrides);
    }

}
