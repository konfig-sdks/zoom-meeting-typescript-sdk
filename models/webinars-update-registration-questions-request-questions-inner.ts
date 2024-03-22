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
 * @interface WebinarsUpdateRegistrationQuestionsRequestQuestionsInner
 */
export interface WebinarsUpdateRegistrationQuestionsRequestQuestionsInner {
    /**
     * Field name
     * @type {string}
     * @memberof WebinarsUpdateRegistrationQuestionsRequestQuestionsInner
     */
    'field_name'?: WebinarsUpdateRegistrationQuestionsRequestQuestionsInnerFieldNameEnum;
    /**
     * State whether the selected fields are required or optional.
     * @type {boolean}
     * @memberof WebinarsUpdateRegistrationQuestionsRequestQuestionsInner
     */
    'required'?: boolean;
}

type WebinarsUpdateRegistrationQuestionsRequestQuestionsInnerFieldNameEnum = 'last_name' | 'address' | 'city' | 'country' | 'zip' | 'state' | 'phone' | 'industry' | 'org' | 'job_title' | 'purchasing_time_frame' | 'role_in_purchase_process' | 'no_of_employees' | 'comments'


