/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DevicesUpgradeZpaOsAppRequestData } from './devices-upgrade-zpa-os-app-request-data';

/**
 * 
 * @export
 * @interface DevicesUpgradeZpaOsAppRequest
 */
export interface DevicesUpgradeZpaOsAppRequest {
    /**
     * The ZDM group ID.
     * @type {string}
     * @memberof DevicesUpgradeZpaOsAppRequest
     */
    'zdm_group_id': string;
    /**
     * 
     * @type {DevicesUpgradeZpaOsAppRequestData}
     * @memberof DevicesUpgradeZpaOsAppRequest
     */
    'data': DevicesUpgradeZpaOsAppRequestData;
}

