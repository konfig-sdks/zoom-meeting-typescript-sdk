/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { MeetingsAddRegistrantResponseOccurrencesInner } from './meetings-add-registrant-response-occurrences-inner';

/**
 * 
 * @export
 * @interface MeetingsAddRegistrantResponse
 */
export interface MeetingsAddRegistrantResponse {
    /**
     * The meeting ID.
     * @type {number}
     * @memberof MeetingsAddRegistrantResponse
     */
    'id'?: number;
    /**
     * The URL the registrant can use to join the meeting.   The API will not return this field if the meeting was [created](https://developers.zoom.us) with the `approval_type` field value of `1` (manual approval).
     * @type {string}
     * @memberof MeetingsAddRegistrantResponse
     */
    'join_url'?: string;
    /**
     * The registrant\'s ID.
     * @type {string}
     * @memberof MeetingsAddRegistrantResponse
     */
    'registrant_id'?: string;
    /**
     * The meeting\'s start time.
     * @type {string}
     * @memberof MeetingsAddRegistrantResponse
     */
    'start_time'?: string;
    /**
     * The meeting\'s topic.
     * @type {string}
     * @memberof MeetingsAddRegistrantResponse
     */
    'topic'?: string;
    /**
     * Array of occurrence objects.
     * @type {Array<MeetingsAddRegistrantResponseOccurrencesInner>}
     * @memberof MeetingsAddRegistrantResponse
     */
    'occurrences'?: Array<MeetingsAddRegistrantResponseOccurrencesInner>;
    /**
     * The participant PIN code is used to authenticate audio participants before they join the meeting.
     * @type {number}
     * @memberof MeetingsAddRegistrantResponse
     */
    'participant_pin_code'?: number;
}

