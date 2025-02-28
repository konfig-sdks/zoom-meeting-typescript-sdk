/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface WebinarsGetSipUriWithPasscodeRequest
 */
export interface WebinarsGetSipUriWithPasscodeRequest {
    /**
     * If customers want a passcode to be embedded in the SIP URI dial string, they must supply the passcode. Zoom will not validate the passcode.
     * @type {string}
     * @memberof WebinarsGetSipUriWithPasscodeRequest
     */
    'passcode'?: string;
}

