/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about the webinar\'s local recorder join token.
 * @export
 * @interface WebinarsGetJoinTokenLocalRecordingResponse
 */
export interface WebinarsGetJoinTokenLocalRecordingResponse {
    /**
     * The number of seconds the join token is valid for before it expires. This value always returns `120`.
     * @type {number}
     * @memberof WebinarsGetJoinTokenLocalRecordingResponse
     */
    'expire_in'?: WebinarsGetJoinTokenLocalRecordingResponseExpireInEnum;
    /**
     * The join token.
     * @type {string}
     * @memberof WebinarsGetJoinTokenLocalRecordingResponse
     */
    'token'?: string;
}

type WebinarsGetJoinTokenLocalRecordingResponseExpireInEnum = 120


