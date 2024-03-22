/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Occurrence object. This object is only returned for recurring webinars.
 * @export
 * @interface MeetingsCreateMeetingResponseOccurrencesInner
 */
export interface MeetingsCreateMeetingResponseOccurrencesInner {
    /**
     * Duration.
     * @type {number}
     * @memberof MeetingsCreateMeetingResponseOccurrencesInner
     */
    'duration'?: number;
    /**
     * Occurrence ID: Unique Identifier that identifies an occurrence of a recurring webinar. [Recurring webinars](https://support.zoom.us/hc/en-us/articles/216354763-How-to-Schedule-A-Recurring-Webinar) can have a maximum of 50 occurrences.
     * @type {string}
     * @memberof MeetingsCreateMeetingResponseOccurrencesInner
     */
    'occurrence_id'?: string;
    /**
     * Start time.
     * @type {string}
     * @memberof MeetingsCreateMeetingResponseOccurrencesInner
     */
    'start_time'?: string;
    /**
     * Occurrence status.   `available` - Available occurrence.    `deleted` -  Deleted occurrence.
     * @type {string}
     * @memberof MeetingsCreateMeetingResponseOccurrencesInner
     */
    'status'?: MeetingsCreateMeetingResponseOccurrencesInnerStatusEnum;
}

type MeetingsCreateMeetingResponseOccurrencesInnerStatusEnum = 'available' | 'deleted'


