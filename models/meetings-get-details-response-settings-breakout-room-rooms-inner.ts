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
 * @interface MeetingsGetDetailsResponseSettingsBreakoutRoomRoomsInner
 */
export interface MeetingsGetDetailsResponseSettingsBreakoutRoomRoomsInner {
    /**
     * The breakout room\'s name.
     * @type {string}
     * @memberof MeetingsGetDetailsResponseSettingsBreakoutRoomRoomsInner
     */
    'name'?: string;
    /**
     * Email addresses of the participants who are to be assigned to the breakout room.
     * @type {Array<string>}
     * @memberof MeetingsGetDetailsResponseSettingsBreakoutRoomRoomsInner
     */
    'participants'?: Array<string>;
}

