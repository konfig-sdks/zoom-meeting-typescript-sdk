/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ReportsWebinarParticipantsListResponseParticipantsInner } from './reports-webinar-participants-list-response-participants-inner';

/**
 * Pagination object.
 * @export
 * @interface ReportsWebinarParticipantsListResponse
 */
export interface ReportsWebinarParticipantsListResponse {
    /**
     * Use the next page token to paginate through large result sets. A next page token is returned whenever the set of available results exceeds the current page size. This token\'s expiration period is 15 minutes.
     * @type {string}
     * @memberof ReportsWebinarParticipantsListResponse
     */
    'next_page_token'?: string;
    /**
     * The number of pages returned for the request made.
     * @type {number}
     * @memberof ReportsWebinarParticipantsListResponse
     */
    'page_count'?: number;
    /**
     * The number of records returned within a single API call.
     * @type {number}
     * @memberof ReportsWebinarParticipantsListResponse
     */
    'page_size'?: number;
    /**
     * The number of all records available across pages.
     * @type {number}
     * @memberof ReportsWebinarParticipantsListResponse
     */
    'total_records'?: number;
    /**
     * Information about the webinar participant.
     * @type {Array<ReportsWebinarParticipantsListResponseParticipantsInner>}
     * @memberof ReportsWebinarParticipantsListResponse
     */
    'participants'?: Array<ReportsWebinarParticipantsListResponseParticipantsInner>;
}

