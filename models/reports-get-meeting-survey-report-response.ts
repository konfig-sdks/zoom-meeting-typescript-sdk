/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ReportsGetMeetingSurveyReportResponseSurveyAnswersInner } from './reports-get-meeting-survey-report-response-survey-answers-inner';

/**
 * 
 * @export
 * @interface ReportsGetMeetingSurveyReportResponse
 */
export interface ReportsGetMeetingSurveyReportResponse {
    /**
     * The meeting ID.
     * @type {number}
     * @memberof ReportsGetMeetingSurveyReportResponse
     */
    'meeting_id'?: number;
    /**
     * The meeting\'s universally unique identifier (UUID). Each meeting instance generates a meeting UUID.
     * @type {string}
     * @memberof ReportsGetMeetingSurveyReportResponse
     */
    'meeting_uuid'?: string;
    /**
     * The meeting\'s start time.
     * @type {string}
     * @memberof ReportsGetMeetingSurveyReportResponse
     */
    'start_time'?: string;
    /**
     * The survey\'s ID
     * @type {string}
     * @memberof ReportsGetMeetingSurveyReportResponse
     */
    'survey_id'?: string;
    /**
     * The name of survey
     * @type {string}
     * @memberof ReportsGetMeetingSurveyReportResponse
     */
    'survey_name'?: string;
    /**
     * Information about the survey questions and answers.
     * @type {Array<ReportsGetMeetingSurveyReportResponseSurveyAnswersInner>}
     * @memberof ReportsGetMeetingSurveyReportResponse
     */
    'survey_answers'?: Array<ReportsGetMeetingSurveyReportResponseSurveyAnswersInner>;
}

