/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Tracking Field
 * @export
 * @interface TrackingField
 */
export interface TrackingField {
    /**
     * ID of Tracking Field
     * @type {string}
     * @memberof TrackingField
     */
    'id'?: string;
    /**
     * Label/ Name for the tracking field.
     * @type {string}
     * @memberof TrackingField
     */
    'field'?: string;
    /**
     * Array of recommended values
     * @type {Array<string>}
     * @memberof TrackingField
     */
    'recommended_values'?: Array<string>;
    /**
     * Tracking Field Required
     * @type {boolean}
     * @memberof TrackingField
     */
    'required'?: boolean;
    /**
     * Tracking Field Visible
     * @type {boolean}
     * @memberof TrackingField
     */
    'visible'?: boolean;
}

