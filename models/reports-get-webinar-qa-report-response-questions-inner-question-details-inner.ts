/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ReportsGetWebinarQaReportResponseQuestionsInnerQuestionDetailsInnerAnswerDetailsInner } from './reports-get-webinar-qa-report-response-questions-inner-question-details-inner-answer-details-inner';

/**
 * 
 * @export
 * @interface ReportsGetWebinarQaReportResponseQuestionsInnerQuestionDetailsInner
 */
export interface ReportsGetWebinarQaReportResponseQuestionsInnerQuestionDetailsInner {
    /**
     * The given answer. If this is a live answer, the value is \'live answered\'. **Note:** All answers will be returned together and separated by semicolons. For more detailed answer information, please see the \"answer_details\" field.
     * @type {string}
     * @memberof ReportsGetWebinarQaReportResponseQuestionsInnerQuestionDetailsInner
     * @deprecated
     */
    'answer'?: string;
    /**
     * Asked question.
     * @type {string}
     * @memberof ReportsGetWebinarQaReportResponseQuestionsInnerQuestionDetailsInner
     */
    'question'?: string;
    /**
     * Question UUID.
     * @type {string}
     * @memberof ReportsGetWebinarQaReportResponseQuestionsInnerQuestionDetailsInner
     */
    'question_id'?: string;
    /**
     * Question creation time.
     * @type {string}
     * @memberof ReportsGetWebinarQaReportResponseQuestionsInnerQuestionDetailsInner
     */
    'create_time'?: string;
    /**
     * Array of answers from user.
     * @type {Array<ReportsGetWebinarQaReportResponseQuestionsInnerQuestionDetailsInnerAnswerDetailsInner>}
     * @memberof ReportsGetWebinarQaReportResponseQuestionsInnerQuestionDetailsInner
     */
    'answer_details'?: Array<ReportsGetWebinarQaReportResponseQuestionsInnerQuestionDetailsInnerAnswerDetailsInner>;
}

