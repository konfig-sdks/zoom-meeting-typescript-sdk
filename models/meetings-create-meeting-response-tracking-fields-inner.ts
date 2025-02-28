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
 * @interface MeetingsCreateMeetingResponseTrackingFieldsInner
 */
export interface MeetingsCreateMeetingResponseTrackingFieldsInner {
    /**
     * The tracking field\'s label.
     * @type {string}
     * @memberof MeetingsCreateMeetingResponseTrackingFieldsInner
     */
    'field'?: string;
    /**
     * The tracking field\'s value.
     * @type {string}
     * @memberof MeetingsCreateMeetingResponseTrackingFieldsInner
     */
    'value'?: string;
    /**
     * Indicates whether the [tracking field](https://support.zoom.us/hc/en-us/articles/115000293426-Scheduling-Tracking-Fields) is visible in the meeting scheduling options in the Zoom Web Portal or not.  `true`: Tracking field is visible.       `false`: Tracking field is not visible to the users in the meeting options in the Zoom Web Portal but the field was used while scheduling this meeting via API. An invisible tracking field can be used by users while scheduling meetings via API only. 
     * @type {boolean}
     * @memberof MeetingsCreateMeetingResponseTrackingFieldsInner
     */
    'visible'?: boolean;
}

