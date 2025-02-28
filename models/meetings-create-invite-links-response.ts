/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { MeetingsCreateInviteLinksResponseAttendeesInner } from './meetings-create-invite-links-response-attendees-inner';

/**
 * Invite links response.
 * @export
 * @interface MeetingsCreateInviteLinksResponse
 */
export interface MeetingsCreateInviteLinksResponse {
    /**
     * The attendee list.
     * @type {Array<MeetingsCreateInviteLinksResponseAttendeesInner>}
     * @memberof MeetingsCreateInviteLinksResponse
     */
    'attendees'?: Array<MeetingsCreateInviteLinksResponseAttendeesInner>;
}

