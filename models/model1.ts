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
 * @interface Model1
 */
export interface Model1 {
    /**
     * The app version to be upgraded. If upgrade type is `0`, this field won\'t work. If upgrade type is `1`, this field will work.
     * @type {string}
     * @memberof Model1
     */
    'app_version'?: string;
    /**
     * Upgrade app.
     * @type {string}
     * @memberof Model1
     */
    'upgrade_type': Model1UpgradeTypeEnum;
}

type Model1UpgradeTypeEnum = 'UPGRADE_APP'


