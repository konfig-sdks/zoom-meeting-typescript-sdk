/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { MeetingsBatchRegistrantsCreateRequestRegistrantsInner } from './meetings-batch-registrants-create-request-registrants-inner';

/**
 * 
 * @export
 * @interface MeetingsBatchRegistrantsCreateRequest
 */
export interface MeetingsBatchRegistrantsCreateRequest {
    /**
     * If a meeting was scheduled with approval_type `1` (manual approval), but you would like to automatically approve the registrants that are added via this API, you can set the value of this field to `true`.   You **cannot** use this field to change approval setting for a meeting  that was originally scheduled with approval_type `0` (automatic approval).
     * @type {boolean}
     * @memberof MeetingsBatchRegistrantsCreateRequest
     */
    'auto_approve'?: boolean;
    /**
     * Send confirmation Email to Registrants
     * @type {boolean}
     * @memberof MeetingsBatchRegistrantsCreateRequest
     */
    'registrants_confirmation_email'?: boolean;
    /**
     * 
     * @type {Array<MeetingsBatchRegistrantsCreateRequestRegistrantsInner>}
     * @memberof MeetingsBatchRegistrantsCreateRequest
     */
    'registrants'?: Array<MeetingsBatchRegistrantsCreateRequestRegistrantsInner>;
}

