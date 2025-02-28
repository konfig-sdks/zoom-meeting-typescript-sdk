/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { WebinarsUpdatePollRequestQuestionsInner } from './webinars-update-poll-request-questions-inner';

/**
 * Information about meeting and webinar polling.
 * @export
 * @interface WebinarsUpdatePollRequest
 */
export interface WebinarsUpdatePollRequest {
    /**
     * The poll\'s title, up to 64 characters.
     * @type {string}
     * @memberof WebinarsUpdatePollRequest
     */
    'title'?: string;
    /**
     * Allow meeting participants to answer poll questions anonymously.   This value defaults to `false`.
     * @type {boolean}
     * @memberof WebinarsUpdatePollRequest
     */
    'anonymous'?: boolean;
    /**
     * The type of poll:  * `1` &mdash; Poll.  * `2` &mdash; Advanced Poll. This feature must be enabled in your Zoom account.  * `3` &mdash; Quiz. This feature must be enabled in your Zoom account.    This value defaults to `1`.
     * @type {number}
     * @memberof WebinarsUpdatePollRequest
     */
    'poll_type'?: WebinarsUpdatePollRequestPollTypeEnum;
    /**
     * Information about the poll\'s questions.
     * @type {Array<WebinarsUpdatePollRequestQuestionsInner>}
     * @memberof WebinarsUpdatePollRequest
     */
    'questions'?: Array<WebinarsUpdatePollRequestQuestionsInner>;
}

type WebinarsUpdatePollRequestPollTypeEnum = 1 | 2 | 3


