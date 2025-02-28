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
 * @interface ReportsListSignInSignOutActivitiesResponseActivityLogsInner
 */
export interface ReportsListSignInSignOutActivitiesResponseActivityLogsInner {
    /**
     * Zoom client version of the user.
     * @type {string}
     * @memberof ReportsListSignInSignOutActivitiesResponseActivityLogsInner
     */
    'version'?: string;
    /**
     * The client interface type using which the activity was performed.
     * @type {string}
     * @memberof ReportsListSignInSignOutActivitiesResponseActivityLogsInner
     */
    'client_type'?: string;
    /**
     * Email address of the user used for the activity.
     * @type {string}
     * @memberof ReportsListSignInSignOutActivitiesResponseActivityLogsInner
     */
    'email'?: string;
    /**
     * The IP address of the user\'s device.
     * @type {string}
     * @memberof ReportsListSignInSignOutActivitiesResponseActivityLogsInner
     */
    'ip_address'?: string;
    /**
     * Time during which the activity occurred.
     * @type {string}
     * @memberof ReportsListSignInSignOutActivitiesResponseActivityLogsInner
     */
    'time'?: string;
    /**
     * The type of activity.  * `Sign in` &mdash; Sign in activity by user.  * `Sign out` &mdash; Sign out activity by user.
     * @type {string}
     * @memberof ReportsListSignInSignOutActivitiesResponseActivityLogsInner
     */
    'type'?: ReportsListSignInSignOutActivitiesResponseActivityLogsInnerTypeEnum;
}

type ReportsListSignInSignOutActivitiesResponseActivityLogsInnerTypeEnum = 'Sign in' | 'Sign out'


