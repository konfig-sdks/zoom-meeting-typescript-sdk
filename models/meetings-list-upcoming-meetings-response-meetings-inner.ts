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
 * @interface MeetingsListUpcomingMeetingsResponseMeetingsInner
 */
export interface MeetingsListUpcomingMeetingsResponseMeetingsInner {
    /**
     * The [meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-) - a unique identifier of the meeting in **long** format, represented as int64 data type in JSON. Also known as the meeting number.
     * @type {number}
     * @memberof MeetingsListUpcomingMeetingsResponseMeetingsInner
     */
    'id'?: number;
    /**
     * The meeting topic.
     * @type {string}
     * @memberof MeetingsListUpcomingMeetingsResponseMeetingsInner
     */
    'topic'?: string;
    /**
     * Meeting types. `1` - Instant meeting. `2` - Scheduled meeting. `3` - Recurring meeting with no fixed time. `8` - Recurring meeting with fixed time.
     * @type {number}
     * @memberof MeetingsListUpcomingMeetingsResponseMeetingsInner
     */
    'type'?: MeetingsListUpcomingMeetingsResponseMeetingsInnerTypeEnum;
    /**
     * The meeting\'s start time.
     * @type {string}
     * @memberof MeetingsListUpcomingMeetingsResponseMeetingsInner
     */
    'start_time'?: string;
    /**
     * Meeting duration.
     * @type {number}
     * @memberof MeetingsListUpcomingMeetingsResponseMeetingsInner
     */
    'duration'?: number;
    /**
     * The timezone to format the meeting start time.
     * @type {string}
     * @memberof MeetingsListUpcomingMeetingsResponseMeetingsInner
     */
    'timezone'?: string;
    /**
     * The meeting creation time.
     * @type {string}
     * @memberof MeetingsListUpcomingMeetingsResponseMeetingsInner
     */
    'created_at'?: string;
    /**
     * The URL that participants can use to join a meeting.
     * @type {string}
     * @memberof MeetingsListUpcomingMeetingsResponseMeetingsInner
     */
    'join_url'?: string;
}

type MeetingsListUpcomingMeetingsResponseMeetingsInnerTypeEnum = 1 | 2 | 3 | 8


