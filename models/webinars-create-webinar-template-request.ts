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
 * @interface WebinarsCreateWebinarTemplateRequest
 */
export interface WebinarsCreateWebinarTemplateRequest {
    /**
     * The webinar ID in long (int64) format.
     * @type {number}
     * @memberof WebinarsCreateWebinarTemplateRequest
     */
    'webinar_id'?: number;
    /**
     * The webinar template\'s name.
     * @type {string}
     * @memberof WebinarsCreateWebinarTemplateRequest
     */
    'name'?: string;
    /**
     * If the field is set to true, the recurrence webinar template will be saved as the scheduled webinar.
     * @type {boolean}
     * @memberof WebinarsCreateWebinarTemplateRequest
     */
    'save_recurrence'?: boolean;
    /**
     * Overwrite an existing webinar template if the template is created from same existing webinar.
     * @type {boolean}
     * @memberof WebinarsCreateWebinarTemplateRequest
     */
    'overwrite'?: boolean;
}

