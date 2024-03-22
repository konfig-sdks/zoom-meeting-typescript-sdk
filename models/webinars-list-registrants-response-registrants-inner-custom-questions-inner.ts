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
 * @interface WebinarsListRegistrantsResponseRegistrantsInnerCustomQuestionsInner
 */
export interface WebinarsListRegistrantsResponseRegistrantsInnerCustomQuestionsInner {
    /**
     * The title of the custom question.
     * @type {string}
     * @memberof WebinarsListRegistrantsResponseRegistrantsInnerCustomQuestionsInner
     */
    'title'?: string;
    /**
     * The custom question\'s response value. This has a limit of 128 characters.
     * @type {string}
     * @memberof WebinarsListRegistrantsResponseRegistrantsInnerCustomQuestionsInner
     */
    'value'?: string;
}

