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
 * @interface MeetingsListMeetingTemplatesResponseTemplatesInner
 */
export interface MeetingsListMeetingTemplatesResponseTemplatesInner {
    /**
     * The template ID.
     * @type {string}
     * @memberof MeetingsListMeetingTemplatesResponseTemplatesInner
     */
    'id'?: string;
    /**
     * The template name.
     * @type {string}
     * @memberof MeetingsListMeetingTemplatesResponseTemplatesInner
     */
    'name'?: string;
    /**
     * The template type:      `1`: Meeting template      `2`: Admin meeting template
     * @type {number}
     * @memberof MeetingsListMeetingTemplatesResponseTemplatesInner
     */
    'type'?: number;
}

