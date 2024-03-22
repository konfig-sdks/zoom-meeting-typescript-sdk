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
 * @interface MeetingsCreateMeetingRequestSettingsResourcesInner
 */
export interface MeetingsCreateMeetingRequestSettingsResourcesInner {
    /**
     * The resource type.
     * @type {string}
     * @memberof MeetingsCreateMeetingRequestSettingsResourcesInner
     */
    'resource_type'?: MeetingsCreateMeetingRequestSettingsResourcesInnerResourceTypeEnum;
    /**
     * The resource ID.
     * @type {string}
     * @memberof MeetingsCreateMeetingRequestSettingsResourcesInner
     */
    'resource_id'?: string;
    /**
     * The permission levels for users to access the whiteboard.  * `editor` - Users with link access can edit the board.  * `commenter` - Users with link access can comment on the board.  * `viewer` - Users with link access can view the board.
     * @type {string}
     * @memberof MeetingsCreateMeetingRequestSettingsResourcesInner
     */
    'permission_level'?: MeetingsCreateMeetingRequestSettingsResourcesInnerPermissionLevelEnum;
}

type MeetingsCreateMeetingRequestSettingsResourcesInnerResourceTypeEnum = 'whiteboard'
type MeetingsCreateMeetingRequestSettingsResourcesInnerPermissionLevelEnum = 'editor' | 'commenter' | 'viewer'


