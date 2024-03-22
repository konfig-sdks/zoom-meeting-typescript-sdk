/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { MeetingsListRegistrantsResponseRegistrantsInner } from './meetings-list-registrants-response-registrants-inner';

/**
 * List of users.
 * @export
 * @interface MeetingsListRegistrantsResponse
 */
export interface MeetingsListRegistrantsResponse {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     * @type {string}
     * @memberof MeetingsListRegistrantsResponse
     */
    'next_page_token'?: string;
    /**
     * The number of pages returned for the request made.
     * @type {number}
     * @memberof MeetingsListRegistrantsResponse
     */
    'page_count'?: number;
    /**
     * **Deprecated.** We will no longer support this field in a future release. Instead, use the `next_page_token` for pagination.
     * @type {number}
     * @memberof MeetingsListRegistrantsResponse
     * @deprecated
     */
    'page_number'?: number;
    /**
     * The number of records returned with a single API call.
     * @type {number}
     * @memberof MeetingsListRegistrantsResponse
     */
    'page_size'?: number;
    /**
     * The total number of all the records available across pages.
     * @type {number}
     * @memberof MeetingsListRegistrantsResponse
     */
    'total_records'?: number;
    /**
     * List of registrant objects.
     * @type {Array<MeetingsListRegistrantsResponseRegistrantsInner>}
     * @memberof MeetingsListRegistrantsResponse
     */
    'registrants'?: Array<MeetingsListRegistrantsResponseRegistrantsInner>;
}

