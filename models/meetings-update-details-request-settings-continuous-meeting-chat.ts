/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about the **Enable continuous meeting chat** feature.
 * @export
 * @interface MeetingsUpdateDetailsRequestSettingsContinuousMeetingChat
 */
export interface MeetingsUpdateDetailsRequestSettingsContinuousMeetingChat {
    /**
     * Whether to enable the **Enable continuous meeting chat** setting.
     * @type {boolean}
     * @memberof MeetingsUpdateDetailsRequestSettingsContinuousMeetingChat
     */
    'enable'?: boolean;
    /**
     * Whether to enable the **Automatically add invited external users** setting.
     * @type {boolean}
     * @memberof MeetingsUpdateDetailsRequestSettingsContinuousMeetingChat
     */
    'auto_add_invited_external_users'?: boolean;
}

