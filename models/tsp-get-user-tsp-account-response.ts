/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TspGetUserTspAccountResponseDialInNumbersInner } from './tsp-get-user-tsp-account-response-dial-in-numbers-inner';

/**
 * TSP account of the user.
 * @export
 * @interface TspGetUserTspAccountResponse
 */
export interface TspGetUserTspAccountResponse {
    /**
     * Conference code: numeric value, length is less than 16.
     * @type {string}
     * @memberof TspGetUserTspAccountResponse
     */
    'conference_code': string;
    /**
     * List of dial in numbers.
     * @type {Array<TspGetUserTspAccountResponseDialInNumbersInner>}
     * @memberof TspGetUserTspAccountResponse
     */
    'dial_in_numbers'?: Array<TspGetUserTspAccountResponseDialInNumbersInner>;
    /**
     * The TSP account ID.
     * @type {string}
     * @memberof TspGetUserTspAccountResponse
     */
    'id'?: string;
    /**
     * Leader PIN: numeric value, length is less than 16.
     * @type {string}
     * @memberof TspGetUserTspAccountResponse
     */
    'leader_pin': string;
    /**
     * Telephony bridge
     * @type {string}
     * @memberof TspGetUserTspAccountResponse
     */
    'tsp_bridge'?: TspGetUserTspAccountResponseTspBridgeEnum;
}

type TspGetUserTspAccountResponseTspBridgeEnum = 'US_TSP_TB' | 'EU_TSP_TB'


