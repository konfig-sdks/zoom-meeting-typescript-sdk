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
 * @interface CloudRecordingListRegistrationQuestionsResponseQuestionsInner
 */
export interface CloudRecordingListRegistrationQuestionsResponseQuestionsInner {
    /**
     * Field name.
     * @type {string}
     * @memberof CloudRecordingListRegistrationQuestionsResponseQuestionsInner
     */
    'field_name'?: CloudRecordingListRegistrationQuestionsResponseQuestionsInnerFieldNameEnum;
    /**
     * State whether the field is required to be answered by the registrant or not.
     * @type {boolean}
     * @memberof CloudRecordingListRegistrationQuestionsResponseQuestionsInner
     */
    'required'?: boolean;
}

type CloudRecordingListRegistrationQuestionsResponseQuestionsInnerFieldNameEnum = 'last_name' | 'address' | 'city' | 'country' | 'zip' | 'state' | 'phone' | 'industry' | 'org' | 'job_title' | 'purchasing_time_frame' | 'role_in_purchase_process' | 'no_of_employees' | 'comments'


