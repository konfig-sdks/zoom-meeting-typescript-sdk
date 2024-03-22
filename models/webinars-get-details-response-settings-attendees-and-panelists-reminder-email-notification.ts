/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Send reminder email to attendees and panelists.
 * @export
 * @interface WebinarsGetDetailsResponseSettingsAttendeesAndPanelistsReminderEmailNotification
 */
export interface WebinarsGetDetailsResponseSettingsAttendeesAndPanelistsReminderEmailNotification {
    /**
     * * `true` - Send reminder email to attendees and panelists.  * `false` - Do not send reminder email to attendees and panelists.
     * @type {boolean}
     * @memberof WebinarsGetDetailsResponseSettingsAttendeesAndPanelistsReminderEmailNotification
     */
    'enable'?: boolean;
    /**
     * `0` - No plan.    `1` - Send 1 hour before webinar.    `2` - Send 1 day before webinar.    `3` - Send 1 hour and 1 day before webinar.    `4` - Send 1 week before webinar.    `5` - Send 1 hour and 1 week before webinar.    `6` - Send 1 day and 1 week before webinar.    `7` - Send 1 hour, 1 day and 1 week before webinar.
     * @type {number}
     * @memberof WebinarsGetDetailsResponseSettingsAttendeesAndPanelistsReminderEmailNotification
     */
    'type'?: WebinarsGetDetailsResponseSettingsAttendeesAndPanelistsReminderEmailNotificationTypeEnum;
}

type WebinarsGetDetailsResponseSettingsAttendeesAndPanelistsReminderEmailNotificationTypeEnum = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7


