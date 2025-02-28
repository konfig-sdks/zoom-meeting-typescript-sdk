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
 * @interface CloudRecordingUpdateRegistrationQuestionsRequestCustomQuestionsInner
 */
export interface CloudRecordingUpdateRegistrationQuestionsRequestCustomQuestionsInner {
    /**
     * Title of the question.
     * @type {string}
     * @memberof CloudRecordingUpdateRegistrationQuestionsRequestCustomQuestionsInner
     */
    'title'?: string;
    /**
     * Answer choices for the question. Can not be used with Short answer type.
     * @type {Array<string>}
     * @memberof CloudRecordingUpdateRegistrationQuestionsRequestCustomQuestionsInner
     */
    'answers'?: Array<string>;
    /**
     * State whether registrants are required to answer custom questions or not.
     * @type {boolean}
     * @memberof CloudRecordingUpdateRegistrationQuestionsRequestCustomQuestionsInner
     */
    'required'?: boolean;
    /**
     * The type of registration question and answers.
     * @type {string}
     * @memberof CloudRecordingUpdateRegistrationQuestionsRequestCustomQuestionsInner
     */
    'type'?: CloudRecordingUpdateRegistrationQuestionsRequestCustomQuestionsInnerTypeEnum;
}

type CloudRecordingUpdateRegistrationQuestionsRequestCustomQuestionsInnerTypeEnum = 'short' | 'single' | 'multiple'


