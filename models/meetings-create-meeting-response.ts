/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { MeetingsCreateMeetingResponseOccurrencesInner } from './meetings-create-meeting-response-occurrences-inner';
import { MeetingsCreateMeetingResponseRecurrence } from './meetings-create-meeting-response-recurrence';
import { MeetingsCreateMeetingResponseSettings } from './meetings-create-meeting-response-settings';
import { MeetingsCreateMeetingResponseTrackingFieldsInner } from './meetings-create-meeting-response-tracking-fields-inner';

/**
 * Meeting object.
 * @export
 * @interface MeetingsCreateMeetingResponse
 */
export interface MeetingsCreateMeetingResponse {
    /**
     * The ID of the user who scheduled this meeting on behalf of the host.
     * @type {string}
     * @memberof MeetingsCreateMeetingResponse
     */
    'assistant_id'?: string;
    /**
     * The meeting host\'s email address.
     * @type {string}
     * @memberof MeetingsCreateMeetingResponse
     */
    'host_email'?: string;
    /**
     * The [meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in **long** format(represented as int64 data type in JSON), also known as the meeting number.
     * @type {number}
     * @memberof MeetingsCreateMeetingResponse
     */
    'id'?: number;
    /**
     * The URL that registrants can use to register for a meeting. This field is only returned for meetings that have enabled registration.
     * @type {string}
     * @memberof MeetingsCreateMeetingResponse
     */
    'registration_url'?: string;
    /**
     * Agenda
     * @type {string}
     * @memberof MeetingsCreateMeetingResponse
     */
    'agenda'?: string;
    /**
     * The date and time when this meeting was created.
     * @type {string}
     * @memberof MeetingsCreateMeetingResponse
     */
    'created_at'?: string;
    /**
     * The meeting duration.
     * @type {number}
     * @memberof MeetingsCreateMeetingResponse
     */
    'duration'?: number;
    /**
     * H.323/SIP room system passcode
     * @type {string}
     * @memberof MeetingsCreateMeetingResponse
     */
    'h323_password'?: string;
    /**
     * URL for participants to join the meeting. This URL should only be shared with users that you would like to invite for the meeting.
     * @type {string}
     * @memberof MeetingsCreateMeetingResponse
     */
    'join_url'?: string;
    /**
     * The URL to join the chat.
     * @type {string}
     * @memberof MeetingsCreateMeetingResponse
     */
    'chat_join_url'?: string;
    /**
     * Array of occurrence objects.
     * @type {Array<MeetingsCreateMeetingResponseOccurrencesInner>}
     * @memberof MeetingsCreateMeetingResponse
     */
    'occurrences'?: Array<MeetingsCreateMeetingResponseOccurrencesInner>;
    /**
     * The meeting passcode. This passcode may only contain these characters: `[a-z A-Z 0-9 @ - _ * !]`  If **Require a passcode when scheduling new meetings** setting has been enabled and [locked](https://support.zoom.us/hc/en-us/articles/115005269866-Using-Tiered-Settings#locked) for the user, the passcode field will be autogenerated in the response even if it is not provided in the API request.    
     * @type {string}
     * @memberof MeetingsCreateMeetingResponse
     */
    'password'?: string;
    /**
     * [Personal meeting ID (PMI)](https://developers.zoom.us/docs/api/rest/using-zoom-apis/#understanding-personal-meeting-id-pmi). Only used for scheduled meetings and recurring meetings with no fixed time.
     * @type {string}
     * @memberof MeetingsCreateMeetingResponse
     */
    'pmi'?: string;
    /**
     * Whether the prescheduled meeting was created via the [GSuite app](https://support.zoom.us/hc/en-us/articles/360020187492-Zoom-for-GSuite-add-on). This only supports the meeting `type` value of `2` (scheduled meetings) and `3` (recurring meetings with no fixed time).  * `true` - A GSuite prescheduled meeting.  * `false` - A regular meeting.
     * @type {boolean}
     * @memberof MeetingsCreateMeetingResponse
     */
    'pre_schedule'?: boolean;
    /**
     * 
     * @type {MeetingsCreateMeetingResponseRecurrence}
     * @memberof MeetingsCreateMeetingResponse
     */
    'recurrence'?: MeetingsCreateMeetingResponseRecurrence;
    /**
     * 
     * @type {MeetingsCreateMeetingResponseSettings}
     * @memberof MeetingsCreateMeetingResponse
     */
    'settings'?: MeetingsCreateMeetingResponseSettings;
    /**
     * Meeting start date-time in UTC/GMT, such as `2020-03-31T12:02:00Z`.
     * @type {string}
     * @memberof MeetingsCreateMeetingResponse
     */
    'start_time'?: string;
    /**
     * URL to start the meeting. This URL should only be used by the host of the meeting and **should not be shared with anyone other than the host** of the meeting, since anyone with this URL will be able to log in to the Zoom Client as the host of the meeting.
     * @type {string}
     * @memberof MeetingsCreateMeetingResponse
     */
    'start_url'?: string;
    /**
     * Timezone to format `start_time`.
     * @type {string}
     * @memberof MeetingsCreateMeetingResponse
     */
    'timezone'?: string;
    /**
     * Meeting topic.
     * @type {string}
     * @memberof MeetingsCreateMeetingResponse
     */
    'topic'?: string;
    /**
     * Tracking fields.
     * @type {Array<MeetingsCreateMeetingResponseTrackingFieldsInner>}
     * @memberof MeetingsCreateMeetingResponse
     */
    'tracking_fields'?: Array<MeetingsCreateMeetingResponseTrackingFieldsInner>;
    /**
     * Meeting type.
     * @type {number}
     * @memberof MeetingsCreateMeetingResponse
     */
    'type'?: MeetingsCreateMeetingResponseTypeEnum;
}

type MeetingsCreateMeetingResponseTypeEnum = 1 | 2 | 3 | 8


