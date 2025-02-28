/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ReportsGetWebinarPollReportsResponseQuestionsInnerQuestionDetailsInner } from './reports-get-webinar-poll-reports-response-questions-inner-question-details-inner';

/**
 * 
 * @export
 * @interface ReportsGetWebinarPollReportsResponseQuestionsInner
 */
export interface ReportsGetWebinarPollReportsResponseQuestionsInner {
    /**
     * The participant\'s email address.
     * @type {string}
     * @memberof ReportsGetWebinarPollReportsResponseQuestionsInner
     */
    'email'?: string;
    /**
     * The participant\'s display name. **Allow participants to answer questions anonymously** setting is enabled for a [poll](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meet), the participant\'s polling information is kept anonymous and the `name` field will return the &quot;Anonymous Attendee&quot; value.
     * @type {string}
     * @memberof ReportsGetWebinarPollReportsResponseQuestionsInner
     */
    'name'?: string;
    /**
     * The participant\'s first name. If the **Allow participants to answer questions anonymously** setting is enabled for a [poll](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meet), the participant\'s polling information is kept anonymous and the `first_name` field will return the &quot;Anonymous Attendee&quot; value.
     * @type {string}
     * @memberof ReportsGetWebinarPollReportsResponseQuestionsInner
     */
    'first_name'?: string;
    /**
     * The participant\'s last name. If the **Allow participants to answer questions anonymously** setting is enabled for a [poll](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meet), the participant\'s polling information is kept anonymous and the `last_name` field will return the &quot;Anonymous Attendee&quot; value.
     * @type {string}
     * @memberof ReportsGetWebinarPollReportsResponseQuestionsInner
     */
    'last_name'?: string;
    /**
     * Information about the user\'s questions and answers.
     * @type {Array<ReportsGetWebinarPollReportsResponseQuestionsInnerQuestionDetailsInner>}
     * @memberof ReportsGetWebinarPollReportsResponseQuestionsInner
     */
    'question_details'?: Array<ReportsGetWebinarPollReportsResponseQuestionsInnerQuestionDetailsInner>;
}

