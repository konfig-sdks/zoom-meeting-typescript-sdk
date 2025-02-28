/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ReportsGetMeetingDetailReportsResponseCustomKeysInner } from './reports-get-meeting-detail-reports-response-custom-keys-inner';
import { ReportsGetMeetingDetailReportsResponseTrackingFieldsInner } from './reports-get-meeting-detail-reports-response-tracking-fields-inner';

/**
 * 
 * @export
 * @interface ReportsGetMeetingDetailReportsResponse
 */
export interface ReportsGetMeetingDetailReportsResponse {
    /**
     * Custom keys and values assigned to the meeting.
     * @type {Array<ReportsGetMeetingDetailReportsResponseCustomKeysInner>}
     * @memberof ReportsGetMeetingDetailReportsResponse
     */
    'custom_keys'?: Array<ReportsGetMeetingDetailReportsResponseCustomKeysInner>;
    /**
     * Department of the host.
     * @type {string}
     * @memberof ReportsGetMeetingDetailReportsResponse
     */
    'dept'?: string;
    /**
     * Meeting duration.
     * @type {number}
     * @memberof ReportsGetMeetingDetailReportsResponse
     */
    'duration'?: number;
    /**
     * Meeting end time.
     * @type {string}
     * @memberof ReportsGetMeetingDetailReportsResponse
     */
    'end_time'?: string;
    /**
     * [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in &quot;**long**&quot; format(represented as int64 data type in JSON), also known as the meeting number.
     * @type {number}
     * @memberof ReportsGetMeetingDetailReportsResponse
     */
    'id'?: number;
    /**
     * Number of meeting participants.
     * @type {number}
     * @memberof ReportsGetMeetingDetailReportsResponse
     */
    'participants_count'?: number;
    /**
     * Meeting start time.
     * @type {string}
     * @memberof ReportsGetMeetingDetailReportsResponse
     */
    'start_time'?: string;
    /**
     * Meeting topic.
     * @type {string}
     * @memberof ReportsGetMeetingDetailReportsResponse
     */
    'topic'?: string;
    /**
     * Number of meeting minutes. This represents the total amount of meeting minutes attended by each participant including the host, for meetings hosted by the user. For instance if there were one host(named A) and one participant(named B) in a meeting, the value of total_minutes would be calculated as below:  **total_minutes** = Total Meeting Attendance Minutes of A + Total Meeting Attendance Minutes of B
     * @type {number}
     * @memberof ReportsGetMeetingDetailReportsResponse
     */
    'total_minutes'?: number;
    /**
     * Tracking fields.
     * @type {Array<ReportsGetMeetingDetailReportsResponseTrackingFieldsInner>}
     * @memberof ReportsGetMeetingDetailReportsResponse
     */
    'tracking_fields'?: Array<ReportsGetMeetingDetailReportsResponseTrackingFieldsInner>;
    /**
     * Meeting type.
     * @type {number}
     * @memberof ReportsGetMeetingDetailReportsResponse
     */
    'type'?: number;
    /**
     * User email.
     * @type {string}
     * @memberof ReportsGetMeetingDetailReportsResponse
     */
    'user_email'?: string;
    /**
     * User display name.
     * @type {string}
     * @memberof ReportsGetMeetingDetailReportsResponse
     */
    'user_name'?: string;
    /**
     * Meeting UUID. Each meeting instance will generate its own UUID(i.e., after a meeting ends, a new UUID will be generated for the next instance of the meeting). [Double encode](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis/#meeting-id-and-uuid) your UUID when using it for API calls if the UUID begins with a \'/\' or contains \'//\' in it.
     * @type {string}
     * @memberof ReportsGetMeetingDetailReportsResponse
     */
    'uuid'?: string;
}

