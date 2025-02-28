/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about custom questions.
 * @export
 * @interface CloudRecordingListRegistrantsResponseRegistrantsInnerCustomQuestionsInner
 */
export interface CloudRecordingListRegistrantsResponseRegistrantsInnerCustomQuestionsInner {
    /**
     * The title of the custom question.
     * @type {string}
     * @memberof CloudRecordingListRegistrantsResponseRegistrantsInnerCustomQuestionsInner
     */
    'title'?: string;
    /**
     * The custom question\'s response value. This has a limit of 128 characters.
     * @type {string}
     * @memberof CloudRecordingListRegistrantsResponseRegistrantsInnerCustomQuestionsInner
     */
    'value'?: string;
}

