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
 * @interface MeetingsGetDetailsResponseSettingsAuthenticationExceptionInner
 */
export interface MeetingsGetDetailsResponseSettingsAuthenticationExceptionInner {
    /**
     * Email address of the participant.
     * @type {string}
     * @memberof MeetingsGetDetailsResponseSettingsAuthenticationExceptionInner
     */
    'email'?: string;
    /**
     * Name of the participant.
     * @type {string}
     * @memberof MeetingsGetDetailsResponseSettingsAuthenticationExceptionInner
     */
    'name'?: string;
    /**
     * URL for participants to join the meeting
     * @type {string}
     * @memberof MeetingsGetDetailsResponseSettingsAuthenticationExceptionInner
     */
    'join_url'?: string;
}

