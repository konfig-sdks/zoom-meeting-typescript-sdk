/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface ReportsGetMeetingQaReportResponseQuestionsInnerQuestionDetailsInnerAnswerDetailsInner
 */
export interface ReportsGetMeetingQaReportResponseQuestionsInnerQuestionDetailsInnerAnswerDetailsInner {
    /**
     * The user ID of the user who answered the question. This value returns blank for external users.
     * @type {string}
     * @memberof ReportsGetMeetingQaReportResponseQuestionsInnerQuestionDetailsInnerAnswerDetailsInner
     */
    'user_id'?: string;
    /**
     * User display name, including the host or participant.
     * @type {string}
     * @memberof ReportsGetMeetingQaReportResponseQuestionsInnerQuestionDetailsInnerAnswerDetailsInner
     */
    'name'?: string;
    /**
     * Participant\'s email. If the participant is **not** part of the host\'s account, this returns an empty string value, with some exceptions. See [Email address display rules](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#email-address-display-rules) for details.
     * @type {string}
     * @memberof ReportsGetMeetingQaReportResponseQuestionsInnerQuestionDetailsInnerAnswerDetailsInner
     */
    'email'?: string;
    /**
     * The answer from host or the comment from participant.
     * @type {string}
     * @memberof ReportsGetMeetingQaReportResponseQuestionsInnerQuestionDetailsInnerAnswerDetailsInner
     */
    'content'?: string;
    /**
     * Content submit time.
     * @type {string}
     * @memberof ReportsGetMeetingQaReportResponseQuestionsInnerQuestionDetailsInnerAnswerDetailsInner
     */
    'create_time'?: string;
    /**
     * Type of answer.
     * @type {string}
     * @memberof ReportsGetMeetingQaReportResponseQuestionsInnerQuestionDetailsInnerAnswerDetailsInner
     */
    'type'?: ReportsGetMeetingQaReportResponseQuestionsInnerQuestionDetailsInnerAnswerDetailsInnerTypeEnum;
}

type ReportsGetMeetingQaReportResponseQuestionsInnerQuestionDetailsInnerAnswerDetailsInnerTypeEnum = 'default' | 'host_answered' | 'participant_commented'


