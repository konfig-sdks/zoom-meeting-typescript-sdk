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
 * @interface MeetingsCreateMeetingRequestSettingsBreakoutRoomRoomsInner
 */
export interface MeetingsCreateMeetingRequestSettingsBreakoutRoomRoomsInner {
    /**
     * The breakout room\'s name.
     * @type {string}
     * @memberof MeetingsCreateMeetingRequestSettingsBreakoutRoomRoomsInner
     */
    'name'?: string;
    /**
     * The email addresses of the participants to assign to the breakout room.
     * @type {Array<string>}
     * @memberof MeetingsCreateMeetingRequestSettingsBreakoutRoomRoomsInner
     */
    'participants'?: Array<string>;
}

