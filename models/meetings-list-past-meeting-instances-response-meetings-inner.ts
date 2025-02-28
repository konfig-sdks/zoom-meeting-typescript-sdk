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
 * @interface MeetingsListPastMeetingInstancesResponseMeetingsInner
 */
export interface MeetingsListPastMeetingInstancesResponseMeetingsInner {
    /**
     * Start time
     * @type {string}
     * @memberof MeetingsListPastMeetingInstancesResponseMeetingsInner
     */
    'start_time'?: string;
    /**
     * Meeting UUID. Unique meeting ID. Each meeting instance will generate its own Meeting UUID (i.e., after a meeting ends, a new UUID will be generated for the next instance of the meeting). [Double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid) your UUID when using it for API calls if the UUID begins with a \'/\'or contains \'//\' in it.  
     * @type {string}
     * @memberof MeetingsListPastMeetingInstancesResponseMeetingsInner
     */
    'uuid'?: string;
}

