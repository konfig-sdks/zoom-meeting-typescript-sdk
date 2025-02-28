/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { WebinarsListPollResultsResponseQuestionsInner } from './webinars-list-poll-results-response-questions-inner';

/**
 * 
 * @export
 * @interface WebinarsListPollResultsResponse
 */
export interface WebinarsListPollResultsResponse {
    /**
     * Webinar ID in **long** format, represented as int64 data type in JSON, also known as the webinar number.
     * @type {number}
     * @memberof WebinarsListPollResultsResponse
     */
    'id'?: number;
    /**
     * 
     * @type {Array<WebinarsListPollResultsResponseQuestionsInner>}
     * @memberof WebinarsListPollResultsResponse
     */
    'questions'?: Array<WebinarsListPollResultsResponseQuestionsInner>;
    /**
     * The webinar\'s start time.
     * @type {string}
     * @memberof WebinarsListPollResultsResponse
     */
    'start_time'?: string;
    /**
     * Webinar UUID.
     * @type {string}
     * @memberof WebinarsListPollResultsResponse
     */
    'uuid'?: string;
}

