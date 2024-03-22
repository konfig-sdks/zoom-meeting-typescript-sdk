/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ReportsGetMeetingQaReportResponseQuestionsInner } from './reports-get-meeting-qa-report-response-questions-inner';

/**
 * 
 * @export
 * @interface ReportsGetMeetingQaReportResponse
 */
export interface ReportsGetMeetingQaReportResponse {
    /**
     * The meeting ID in `long` format, represented as int64 data type in JSON. Also known as the meeting number.
     * @type {number}
     * @memberof ReportsGetMeetingQaReportResponse
     */
    'id'?: number;
    /**
     * Array of meeting question objects.
     * @type {Array<ReportsGetMeetingQaReportResponseQuestionsInner>}
     * @memberof ReportsGetMeetingQaReportResponse
     */
    'questions'?: Array<ReportsGetMeetingQaReportResponseQuestionsInner>;
    /**
     * Meeting start time.
     * @type {string}
     * @memberof ReportsGetMeetingQaReportResponse
     */
    'start_time'?: string;
    /**
     * The meeting UUID. Each meeting instance will generate its own UUID - for example, after a meeting ends, a new UUID will be generated for the next instance of the meeting. Double-encode your UUID when using it for API calls if the UUID begins with a \'/\' or contains \'//\'.
     * @type {string}
     * @memberof ReportsGetMeetingQaReportResponse
     */
    'uuid'?: string;
}

