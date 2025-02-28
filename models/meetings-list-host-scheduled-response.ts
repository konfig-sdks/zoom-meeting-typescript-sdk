/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { MeetingsListHostScheduledResponseMeetingsInner } from './meetings-list-host-scheduled-response-meetings-inner';

/**
 * Pagination object.
 * @export
 * @interface MeetingsListHostScheduledResponse
 */
export interface MeetingsListHostScheduledResponse {
    /**
     * Use the next page token to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. This token\'s expiration period is 15 minutes.
     * @type {string}
     * @memberof MeetingsListHostScheduledResponse
     */
    'next_page_token'?: string;
    /**
     * The number of pages returned for the request made.
     * @type {number}
     * @memberof MeetingsListHostScheduledResponse
     */
    'page_count'?: number;
    /**
     * The page number of the current results.
     * @type {number}
     * @memberof MeetingsListHostScheduledResponse
     */
    'page_number'?: number;
    /**
     * The number of records returned with a single API call.
     * @type {number}
     * @memberof MeetingsListHostScheduledResponse
     */
    'page_size'?: number;
    /**
     * The total number of all the records available across pages.
     * @type {number}
     * @memberof MeetingsListHostScheduledResponse
     */
    'total_records'?: number;
    /**
     * List of meeting objects.
     * @type {Array<MeetingsListHostScheduledResponseMeetingsInner>}
     * @memberof MeetingsListHostScheduledResponse
     */
    'meetings'?: Array<MeetingsListHostScheduledResponseMeetingsInner>;
}

