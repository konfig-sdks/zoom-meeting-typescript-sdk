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
 * @interface MeetingsListRegistrationQuestionsResponseQuestionsInner
 */
export interface MeetingsListRegistrationQuestionsResponseQuestionsInner {
    /**
     * Field name of the question.
     * @type {string}
     * @memberof MeetingsListRegistrationQuestionsResponseQuestionsInner
     */
    'field_name'?: MeetingsListRegistrationQuestionsResponseQuestionsInnerFieldNameEnum;
    /**
     * Indicates whether or not the displayed fields are required to be filled out by registrants.
     * @type {boolean}
     * @memberof MeetingsListRegistrationQuestionsResponseQuestionsInner
     */
    'required'?: boolean;
}

type MeetingsListRegistrationQuestionsResponseQuestionsInnerFieldNameEnum = 'last_name' | 'address' | 'city' | 'country' | 'zip' | 'state' | 'phone' | 'industry' | 'org' | 'job_title' | 'purchasing_time_frame' | 'role_in_purchase_process' | 'no_of_employees' | 'comments'


