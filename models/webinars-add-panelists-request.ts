/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { WebinarsAddPanelistsRequestPanelistsInner } from './webinars-add-panelists-request-panelists-inner';

/**
 * Webinar panelist.
 * @export
 * @interface WebinarsAddPanelistsRequest
 */
export interface WebinarsAddPanelistsRequest {
    /**
     * List of panelist objects.
     * @type {Array<WebinarsAddPanelistsRequestPanelistsInner>}
     * @memberof WebinarsAddPanelistsRequest
     */
    'panelists'?: Array<WebinarsAddPanelistsRequestPanelistsInner>;
}

