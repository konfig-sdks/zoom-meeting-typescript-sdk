/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SipPhoneListResponsePhonesInner } from './sip-phone-list-response-phones-inner';

/**
 * 
 * @export
 * @interface SipPhoneListResponse
 */
export interface SipPhoneListResponse {
    /**
     * 
     * @type {string}
     * @memberof SipPhoneListResponse
     */
    'next_page_token'?: string;
    /**
     * The number of pages returned for the request made.
     * @type {number}
     * @memberof SipPhoneListResponse
     */
    'page_count'?: number;
    /**
     * The page number of the current results.
     * @type {number}
     * @memberof SipPhoneListResponse
     */
    'page_number'?: number;
    /**
     * The number of records returned within a single API call.
     * @type {number}
     * @memberof SipPhoneListResponse
     */
    'page_size'?: number;
    /**
     * SIP phones object.
     * @type {Array<SipPhoneListResponsePhonesInner>}
     * @memberof SipPhoneListResponse
     */
    'phones'?: Array<SipPhoneListResponsePhonesInner>;
    /**
     * The total number of all the records available across pages.
     * @type {number}
     * @memberof SipPhoneListResponse
     */
    'total_records'?: number;
}

