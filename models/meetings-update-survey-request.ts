/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { MeetingsUpdateSurveyRequestCustomSurvey } from './meetings-update-survey-request-custom-survey';

/**
 * Information about the meeting survey.
 * @export
 * @interface MeetingsUpdateSurveyRequest
 */
export interface MeetingsUpdateSurveyRequest {
    /**
     * 
     * @type {MeetingsUpdateSurveyRequestCustomSurvey}
     * @memberof MeetingsUpdateSurveyRequest
     */
    'custom_survey'?: MeetingsUpdateSurveyRequestCustomSurvey;
    /**
     * Whether the **Show in the browser when the meeting ends** option is enabled.  * `true` - Enabled.  * `false` - Disabled.    This value defaults to `true`.
     * @type {boolean}
     * @memberof MeetingsUpdateSurveyRequest
     */
    'show_in_the_browser'?: boolean;
    /**
     * The link to the third party meeting survey.
     * @type {string}
     * @memberof MeetingsUpdateSurveyRequest
     */
    'third_party_survey'?: string;
}

