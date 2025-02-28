/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CloudRecordingCreateRegistrantRequestCustomQuestionsInner } from './cloud-recording-create-registrant-request-custom-questions-inner';

/**
 *  Registrant.
 * @export
 * @interface CloudRecordingCreateRegistrantRequest
 */
export interface CloudRecordingCreateRegistrantRequest {
    /**
     * The registrant\'s address.
     * @type {string}
     * @memberof CloudRecordingCreateRegistrantRequest
     */
    'address'?: string;
    /**
     * The registrant\'s city.
     * @type {string}
     * @memberof CloudRecordingCreateRegistrantRequest
     */
    'city'?: string;
    /**
     * The registrant\'s questions and comments.
     * @type {string}
     * @memberof CloudRecordingCreateRegistrantRequest
     */
    'comments'?: string;
    /**
     * The registrant\'s two-letter [country code](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries).
     * @type {string}
     * @memberof CloudRecordingCreateRegistrantRequest
     */
    'country'?: string;
    /**
     * Information about custom questions.
     * @type {Array<CloudRecordingCreateRegistrantRequestCustomQuestionsInner>}
     * @memberof CloudRecordingCreateRegistrantRequest
     */
    'custom_questions'?: Array<CloudRecordingCreateRegistrantRequestCustomQuestionsInner>;
    /**
     * The registrant\'s email address. See [Email address display rules](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#email-address) for return value details.
     * @type {string}
     * @memberof CloudRecordingCreateRegistrantRequest
     */
    'email': string;
    /**
     * The registrant\'s first name.
     * @type {string}
     * @memberof CloudRecordingCreateRegistrantRequest
     */
    'first_name': string;
    /**
     * The registrant\'s industry.
     * @type {string}
     * @memberof CloudRecordingCreateRegistrantRequest
     */
    'industry'?: string;
    /**
     * The registrant\'s job title.
     * @type {string}
     * @memberof CloudRecordingCreateRegistrantRequest
     */
    'job_title'?: string;
    /**
     * The registrant\'s last name.
     * @type {string}
     * @memberof CloudRecordingCreateRegistrantRequest
     */
    'last_name'?: string;
    /**
     * The registrant\'s number of employees:  * `1-20`  * `21-50`  * `51-100`  * `101-250`  * `251-500`  * `501-1,000`  * `1,001-5,000`  * `5,001-10,000`  * `More than 10,000`
     * @type {string}
     * @memberof CloudRecordingCreateRegistrantRequest
     */
    'no_of_employees'?: CloudRecordingCreateRegistrantRequestNoOfEmployeesEnum;
    /**
     * The registrant\'s organization.
     * @type {string}
     * @memberof CloudRecordingCreateRegistrantRequest
     */
    'org'?: string;
    /**
     * The registrant\'s phone number.
     * @type {string}
     * @memberof CloudRecordingCreateRegistrantRequest
     */
    'phone'?: string;
    /**
     * The registrant\'s purchasing time frame:  * `Within a month`  * `1-3 months`  * `4-6 months`  * `More than 6 months`  * `No timeframe`
     * @type {string}
     * @memberof CloudRecordingCreateRegistrantRequest
     */
    'purchasing_time_frame'?: CloudRecordingCreateRegistrantRequestPurchasingTimeFrameEnum;
    /**
     * The registrant\'s role in the purchase process:  * `Decision Maker`  * `Evaluator/Recommender`  * `Influencer`  * `Not involved`
     * @type {string}
     * @memberof CloudRecordingCreateRegistrantRequest
     */
    'role_in_purchase_process'?: CloudRecordingCreateRegistrantRequestRoleInPurchaseProcessEnum;
    /**
     * The registrant\'s state or province.
     * @type {string}
     * @memberof CloudRecordingCreateRegistrantRequest
     */
    'state'?: string;
    /**
     * The registrant\'s status:  * `approved` &mdash; Registrant is approved.  * `denied` &mdash; Registrant is denied.  * `pending` &mdash; Registrant is waiting for approval.
     * @type {string}
     * @memberof CloudRecordingCreateRegistrantRequest
     */
    'status'?: CloudRecordingCreateRegistrantRequestStatusEnum;
    /**
     * The registrant\'s ZIP or postal code.
     * @type {string}
     * @memberof CloudRecordingCreateRegistrantRequest
     */
    'zip'?: string;
}

type CloudRecordingCreateRegistrantRequestNoOfEmployeesEnum = '' | '1-20' | '21-50' | '51-100' | '101-250' | '251-500' | '501-1,000' | '1,001-5,000' | '5,001-10,000' | 'More than 10,000'
type CloudRecordingCreateRegistrantRequestPurchasingTimeFrameEnum = '' | 'Within a month' | '1-3 months' | '4-6 months' | 'More than 6 months' | 'No timeframe'
type CloudRecordingCreateRegistrantRequestRoleInPurchaseProcessEnum = '' | 'Decision Maker' | 'Evaluator/Recommender' | 'Influencer' | 'Not involved'
type CloudRecordingCreateRegistrantRequestStatusEnum = 'approved' | 'denied' | 'pending'


