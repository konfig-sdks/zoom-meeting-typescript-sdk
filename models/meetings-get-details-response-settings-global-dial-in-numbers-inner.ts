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
 * @interface MeetingsGetDetailsResponseSettingsGlobalDialInNumbersInner
 */
export interface MeetingsGetDetailsResponseSettingsGlobalDialInNumbersInner {
    /**
     * City of the number, if any. For example, Chicago.
     * @type {string}
     * @memberof MeetingsGetDetailsResponseSettingsGlobalDialInNumbersInner
     */
    'city'?: string;
    /**
     * Country code. For example, BR.
     * @type {string}
     * @memberof MeetingsGetDetailsResponseSettingsGlobalDialInNumbersInner
     */
    'country'?: string;
    /**
     * Full name of country. For example, Brazil.
     * @type {string}
     * @memberof MeetingsGetDetailsResponseSettingsGlobalDialInNumbersInner
     */
    'country_name'?: string;
    /**
     * Phone number. For example, +1 2332357613.
     * @type {string}
     * @memberof MeetingsGetDetailsResponseSettingsGlobalDialInNumbersInner
     */
    'number'?: string;
    /**
     * Type of number. 
     * @type {string}
     * @memberof MeetingsGetDetailsResponseSettingsGlobalDialInNumbersInner
     */
    'type'?: MeetingsGetDetailsResponseSettingsGlobalDialInNumbersInnerTypeEnum;
}

type MeetingsGetDetailsResponseSettingsGlobalDialInNumbersInnerTypeEnum = 'toll' | 'tollfree'


