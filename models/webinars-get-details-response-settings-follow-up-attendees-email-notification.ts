/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Send follow-up email to attendees.
 * @export
 * @interface WebinarsGetDetailsResponseSettingsFollowUpAttendeesEmailNotification
 */
export interface WebinarsGetDetailsResponseSettingsFollowUpAttendeesEmailNotification {
    /**
     * * `true` - Send follow-up email to attendees.  * `false` - Do not send follow-up email to attendees.
     * @type {boolean}
     * @memberof WebinarsGetDetailsResponseSettingsFollowUpAttendeesEmailNotification
     */
    'enable'?: boolean;
    /**
     * `0` - No plan.    `1` - Send 1 day after the scheduled end date.    `2` - Send 2 days after the scheduled end date.    `3` - Send 3 days after the scheduled end date.    `4` - Send 4 days after the scheduled end date.    `5` - Send 5 days after the scheduled end date.    `6` - Send 6 days after the scheduled end date.    `7` - Send 7 days after the scheduled end date.
     * @type {number}
     * @memberof WebinarsGetDetailsResponseSettingsFollowUpAttendeesEmailNotification
     */
    'type'?: WebinarsGetDetailsResponseSettingsFollowUpAttendeesEmailNotificationTypeEnum;
}

type WebinarsGetDetailsResponseSettingsFollowUpAttendeesEmailNotificationTypeEnum = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7


