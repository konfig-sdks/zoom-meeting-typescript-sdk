/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { MeetingAndWebinarPollingObjectQuestionsInner } from './meeting-and-webinar-polling-object-questions-inner';

/**
 * Information about meeting and webinar polling.
 * @export
 * @interface MeetingAndWebinarPollingObject
 */
export interface MeetingAndWebinarPollingObject {
    /**
     * The poll\'s title, up to 64 characters.
     * @type {string}
     * @memberof MeetingAndWebinarPollingObject
     */
    'title'?: string;
    /**
     * ID of Poll
     * @type {string}
     * @memberof MeetingAndWebinarPollingObject
     */
    'id'?: string;
    /**
     * Status of Poll:    `notstart` - Poll not started    `started` - Poll started    `ended` - Poll ended    `sharing` - Sharing poll results
     * @type {string}
     * @memberof MeetingAndWebinarPollingObject
     */
    'status'?: MeetingAndWebinarPollingObjectStatusEnum;
    /**
     * Allow meeting participants to answer poll questions anonymously.   This value defaults to `false`.
     * @type {boolean}
     * @memberof MeetingAndWebinarPollingObject
     */
    'anonymous'?: boolean;
    /**
     * The type of poll:  * `1` &mdash; Poll.  * `2` &mdash; Advanced Poll. This feature must be enabled in your Zoom account.  * `3` &mdash; Quiz. This feature must be enabled in your Zoom account.    This value defaults to `1`.
     * @type {number}
     * @memberof MeetingAndWebinarPollingObject
     */
    'poll_type'?: MeetingAndWebinarPollingObjectPollTypeEnum;
    /**
     * Information about the poll\'s questions.
     * @type {Array<MeetingAndWebinarPollingObjectQuestionsInner>}
     * @memberof MeetingAndWebinarPollingObject
     */
    'questions'?: Array<MeetingAndWebinarPollingObjectQuestionsInner>;
}

type MeetingAndWebinarPollingObjectStatusEnum = 'notstart' | 'started' | 'ended' | 'sharing'
type MeetingAndWebinarPollingObjectPollTypeEnum = 1 | 2 | 3


