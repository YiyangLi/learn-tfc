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
    InvalidInputExceptionInfo,
    InvalidInputExceptionInfoFromJSON,
    InvalidInputExceptionInfoToJSON,
    JobDebugInfoRead,
    JobDebugInfoReadFromJSON,
    JobDebugInfoReadToJSON,
    JobIdRequestBody,
    JobIdRequestBodyFromJSON,
    JobIdRequestBodyToJSON,
    JobInfoRead,
    JobInfoReadFromJSON,
    JobInfoReadToJSON,
    JobListRequestBody,
    JobListRequestBodyFromJSON,
    JobListRequestBodyToJSON,
    JobReadList,
    JobReadListFromJSON,
    JobReadListToJSON,
    NotFoundKnownExceptionInfo,
    NotFoundKnownExceptionInfoFromJSON,
    NotFoundKnownExceptionInfoToJSON,
} from '../models';

export interface CancelJobRequest {
    jobIdRequestBody: JobIdRequestBody;
}

export interface GetJobDebugInfoRequest {
    jobIdRequestBody: JobIdRequestBody;
}

export interface GetJobInfoRequest {
    jobIdRequestBody: JobIdRequestBody;
}

export interface ListJobsForRequest {
    jobListRequestBody: JobListRequestBody;
}

/**
 * 
 */
export class JobsApi extends runtime.BaseAPI {

    /**
     * Cancels a job
     */
    async cancelJobRaw(requestParameters: CancelJobRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<JobInfoRead>> {
        if (requestParameters.jobIdRequestBody === null || requestParameters.jobIdRequestBody === undefined) {
            throw new runtime.RequiredError('jobIdRequestBody','Required parameter requestParameters.jobIdRequestBody was null or undefined when calling cancelJob.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/jobs/cancel`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: JobIdRequestBodyToJSON(requestParameters.jobIdRequestBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JobInfoReadFromJSON(jsonValue));
    }

    /**
     * Cancels a job
     */
    async cancelJob(requestParameters: CancelJobRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<JobInfoRead> {
        const response = await this.cancelJobRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets all information needed to debug this job
     */
    async getJobDebugInfoRaw(requestParameters: GetJobDebugInfoRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<JobDebugInfoRead>> {
        if (requestParameters.jobIdRequestBody === null || requestParameters.jobIdRequestBody === undefined) {
            throw new runtime.RequiredError('jobIdRequestBody','Required parameter requestParameters.jobIdRequestBody was null or undefined when calling getJobDebugInfo.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/jobs/get_debug_info`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: JobIdRequestBodyToJSON(requestParameters.jobIdRequestBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JobDebugInfoReadFromJSON(jsonValue));
    }

    /**
     * Gets all information needed to debug this job
     */
    async getJobDebugInfo(requestParameters: GetJobDebugInfoRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<JobDebugInfoRead> {
        const response = await this.getJobDebugInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get information about a job
     */
    async getJobInfoRaw(requestParameters: GetJobInfoRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<JobInfoRead>> {
        if (requestParameters.jobIdRequestBody === null || requestParameters.jobIdRequestBody === undefined) {
            throw new runtime.RequiredError('jobIdRequestBody','Required parameter requestParameters.jobIdRequestBody was null or undefined when calling getJobInfo.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/jobs/get`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: JobIdRequestBodyToJSON(requestParameters.jobIdRequestBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JobInfoReadFromJSON(jsonValue));
    }

    /**
     * Get information about a job
     */
    async getJobInfo(requestParameters: GetJobInfoRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<JobInfoRead> {
        const response = await this.getJobInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns recent jobs for a connection. Jobs are returned in descending order by createdAt.
     */
    async listJobsForRaw(requestParameters: ListJobsForRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<JobReadList>> {
        if (requestParameters.jobListRequestBody === null || requestParameters.jobListRequestBody === undefined) {
            throw new runtime.RequiredError('jobListRequestBody','Required parameter requestParameters.jobListRequestBody was null or undefined when calling listJobsFor.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/jobs/list`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: JobListRequestBodyToJSON(requestParameters.jobListRequestBody),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JobReadListFromJSON(jsonValue));
    }

    /**
     * Returns recent jobs for a connection. Jobs are returned in descending order by createdAt.
     */
    async listJobsFor(requestParameters: ListJobsForRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<JobReadList> {
        const response = await this.listJobsForRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
