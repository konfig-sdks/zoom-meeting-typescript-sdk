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
 * @interface ReportsGetDailyUsageReportResponseDatesInner
 */
export interface ReportsGetDailyUsageReportResponseDatesInner {
    /**
     * Date for this object.
     * @type {string}
     * @memberof ReportsGetDailyUsageReportResponseDatesInner
     */
    'date'?: string;
    /**
     * Number of meeting minutes on this date.
     * @type {number}
     * @memberof ReportsGetDailyUsageReportResponseDatesInner
     */
    'meeting_minutes'?: number;
    /**
     * Number of meetings on this date.
     * @type {number}
     * @memberof ReportsGetDailyUsageReportResponseDatesInner
     */
    'meetings'?: number;
    /**
     * Number of new users on this date.
     * @type {number}
     * @memberof ReportsGetDailyUsageReportResponseDatesInner
     */
    'new_users'?: number;
    /**
     * Number of participants on this date.
     * @type {number}
     * @memberof ReportsGetDailyUsageReportResponseDatesInner
     */
    'participants'?: number;
}

