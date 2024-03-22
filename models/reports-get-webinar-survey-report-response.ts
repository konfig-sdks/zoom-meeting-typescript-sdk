/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ReportsGetWebinarSurveyReportResponseSurveyAnswersInner } from './reports-get-webinar-survey-report-response-survey-answers-inner';

/**
 * 
 * @export
 * @interface ReportsGetWebinarSurveyReportResponse
 */
export interface ReportsGetWebinarSurveyReportResponse {
    /**
     * The webinar ID.
     * @type {number}
     * @memberof ReportsGetWebinarSurveyReportResponse
     */
    'webinar_id'?: number;
    /**
     * The webinar\'s universally unique identifier (UUID). Each webinar instance generates a webinar UUID.
     * @type {string}
     * @memberof ReportsGetWebinarSurveyReportResponse
     */
    'webinar_uuid'?: string;
    /**
     * The webinar\'s start time.
     * @type {string}
     * @memberof ReportsGetWebinarSurveyReportResponse
     */
    'start_time'?: string;
    /**
     * The survey\'s ID
     * @type {string}
     * @memberof ReportsGetWebinarSurveyReportResponse
     */
    'survey_id'?: string;
    /**
     * The name of survey
     * @type {string}
     * @memberof ReportsGetWebinarSurveyReportResponse
     */
    'survey_name'?: string;
    /**
     * Information about the survey questions and answers.
     * @type {Array<ReportsGetWebinarSurveyReportResponseSurveyAnswersInner>}
     * @memberof ReportsGetWebinarSurveyReportResponse
     */
    'survey_answers'?: Array<ReportsGetWebinarSurveyReportResponseSurveyAnswersInner>;
}

