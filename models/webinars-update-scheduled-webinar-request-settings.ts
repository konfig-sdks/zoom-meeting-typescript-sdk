/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { WebinarsUpdateScheduledWebinarRequestSettingsAttendeesAndPanelistsReminderEmailNotification } from './webinars-update-scheduled-webinar-request-settings-attendees-and-panelists-reminder-email-notification';
import { WebinarsUpdateScheduledWebinarRequestSettingsFollowUpAbsenteesEmailNotification } from './webinars-update-scheduled-webinar-request-settings-follow-up-absentees-email-notification';
import { WebinarsUpdateScheduledWebinarRequestSettingsFollowUpAttendeesEmailNotification } from './webinars-update-scheduled-webinar-request-settings-follow-up-attendees-email-notification';
import { WebinarsUpdateScheduledWebinarRequestSettingsLanguageInterpretation } from './webinars-update-scheduled-webinar-request-settings-language-interpretation';
import { WebinarsUpdateScheduledWebinarRequestSettingsQuestionAndAnswer } from './webinars-update-scheduled-webinar-request-settings-question-and-answer';
import { WebinarsUpdateScheduledWebinarRequestSettingsSignLanguageInterpretation } from './webinars-update-scheduled-webinar-request-settings-sign-language-interpretation';

/**
 * Webinar settings.
 * @export
 * @interface WebinarsUpdateScheduledWebinarRequestSettings
 */
export interface WebinarsUpdateScheduledWebinarRequestSettings {
    /**
     * Allow attendees to join from multiple devices.
     * @type {boolean}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'allow_multiple_devices'?: boolean;
    /**
     * Alternative host emails or IDs. Separate multiple values by commas.
     * @type {string}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'alternative_hosts'?: string;
    /**
     * Whether the **Allow alternative hosts to add or edit polls** feature is enabled. This requires Zoom version 5.8.0 or higher.
     * @type {boolean}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'alternative_host_update_polls'?: boolean;
    /**
     * `0` - Automatically approve.    `1` - Manually approve.    `2` - No registration required.
     * @type {number}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'approval_type'?: WebinarsUpdateScheduledWebinarRequestSettingsApprovalTypeEnum;
    /**
     * 
     * @type {WebinarsUpdateScheduledWebinarRequestSettingsAttendeesAndPanelistsReminderEmailNotification}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'attendees_and_panelists_reminder_email_notification'?: WebinarsUpdateScheduledWebinarRequestSettingsAttendeesAndPanelistsReminderEmailNotification;
    /**
     * Determine how participants can join the audio portion of the webinar.
     * @type {string}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'audio'?: WebinarsUpdateScheduledWebinarRequestSettingsAudioEnum;
    /**
     * Third party audio conference info.
     * @type {string}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'audio_conference_info'?: string;
    /**
     * If user has configured [**Sign Into Zoom with Specified Domains**](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f) option, this will list the domains that are authenticated.
     * @type {string}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'authentication_domains'?: string;
    /**
     * Authentication name set in the [authentication profile](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f).
     * @type {string}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'authentication_name'?: string;
    /**
     * Webinar authentication option ID.
     * @type {string}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'authentication_option'?: string;
    /**
     * Automatic recording.   `local` - Record on local.    `cloud` -  Record on cloud.    `none` - Disabled.
     * @type {string}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'auto_recording'?: WebinarsUpdateScheduledWebinarRequestSettingsAutoRecordingEnum;
    /**
     * Close registration after event date.
     * @type {boolean}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     * @deprecated
     */
    'close_registration'?: boolean;
    /**
     * Contact email for registration
     * @type {string}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'contact_email'?: string;
    /**
     * Contact name for registration
     * @type {string}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'contact_name'?: string;
    /**
     * Set the email language to one of the following. `en-US`,`de-DE`,`es-ES`,`fr-FR`,`jp-JP`,`pt-PT`,`ru-RU`,`zh-CN`, `zh-TW`, `ko-KO`, `it-IT`, `vi-VN`.
     * @type {string}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'email_language'?: string;
    /**
     * Only signed in users can join this meeting.  **This field is deprecated and will not be supported in the future.**    As an alternative, use the ``meeting_authentication`, `authentication_option`, and `authentication_domains` fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the webinar.
     * @type {boolean}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     * @deprecated
     */
    'enforce_login'?: boolean;
    /**
     * Only signed in users with specified domains can join meetings.  **This field is deprecated and will not be supported in the future.**   As an alternative, use the `meeting_authentication`, `authentication_option`, and `authentication_domains` fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the webinar.
     * @type {string}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     * @deprecated
     */
    'enforce_login_domains'?: string;
    /**
     * 
     * @type {WebinarsUpdateScheduledWebinarRequestSettingsFollowUpAbsenteesEmailNotification}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'follow_up_absentees_email_notification'?: WebinarsUpdateScheduledWebinarRequestSettingsFollowUpAbsenteesEmailNotification;
    /**
     * 
     * @type {WebinarsUpdateScheduledWebinarRequestSettingsFollowUpAttendeesEmailNotification}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'follow_up_attendees_email_notification'?: WebinarsUpdateScheduledWebinarRequestSettingsFollowUpAttendeesEmailNotification;
    /**
     * List of global dial-in countries
     * @type {Array<string>}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'global_dial_in_countries'?: Array<string>;
    /**
     * Default to HD video.
     * @type {boolean}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'hd_video'?: boolean;
    /**
     * Whether HD video for attendees is enabled.
     * @type {boolean}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'hd_video_for_attendees'?: boolean;
    /**
     * Start video when host joins the webinar.
     * @type {boolean}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'host_video'?: boolean;
    /**
     * 
     * @type {WebinarsUpdateScheduledWebinarRequestSettingsLanguageInterpretation}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'language_interpretation'?: WebinarsUpdateScheduledWebinarRequestSettingsLanguageInterpretation;
    /**
     * 
     * @type {WebinarsUpdateScheduledWebinarRequestSettingsSignLanguageInterpretation}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'sign_language_interpretation'?: WebinarsUpdateScheduledWebinarRequestSettingsSignLanguageInterpretation;
    /**
     * Require panelists to authenticate to join.
     * @type {boolean}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'panelist_authentication'?: boolean;
    /**
     * Only authenticated users can join the webinar.
     * @type {boolean}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'meeting_authentication'?: boolean;
    /**
     * Add watermark that identifies the viewing participant.
     * @type {boolean}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'add_watermark'?: boolean;
    /**
     * Add audio watermark that identifies the participants.
     * @type {boolean}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'add_audio_watermark'?: boolean;
    /**
     * Send notification email to registrants when the host updates a webinar.
     * @type {boolean}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'notify_registrants'?: boolean;
    /**
     * Make the webinar on-demand.
     * @type {boolean}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'on_demand'?: boolean;
    /**
     * Send invitation email to panelists. If `false`, do not send invitation email to panelists.
     * @type {boolean}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'panelists_invitation_email_notification'?: boolean;
    /**
     * Start video when panelists join the webinar.
     * @type {boolean}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'panelists_video'?: boolean;
    /**
     * Zoom will open a survey page in attendees\' browsers after leaving the webinar.
     * @type {boolean}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'post_webinar_survey'?: boolean;
    /**
     * Enable practice session.
     * @type {boolean}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'practice_session'?: boolean;
    /**
     * 
     * @type {WebinarsUpdateScheduledWebinarRequestSettingsQuestionAndAnswer}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'question_and_answer'?: WebinarsUpdateScheduledWebinarRequestSettingsQuestionAndAnswer;
    /**
     * Send confirmation email to registrants
     * @type {boolean}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'registrants_confirmation_email'?: boolean;
    /**
     * Send email notifications to registrants about approval, cancellation, denial of the registration. The value of this field must be set to true in order to use the `registrants_confirmation_email` field.
     * @type {boolean}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'registrants_email_notification'?: boolean;
    /**
     * Restrict number of registrants for a webinar. By default, it is set to `0`. A `0` value means that the restriction option is disabled. Provide a number higher than 0 to restrict the webinar registrants by the that number.
     * @type {number}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'registrants_restrict_number'?: number;
    /**
     * Registration types. Only used for recurring webinars with a fixed time.    `1` - Attendees register once and can attend any of the webinar sessions.    `2` - Attendees need to register for each session in order to attend.    `3` - Attendees register once and can choose one or more sessions to attend.
     * @type {number}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'registration_type'?: WebinarsUpdateScheduledWebinarRequestSettingsRegistrationTypeEnum;
    /**
     * Always send 1080p video to attendees.
     * @type {boolean}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'send_1080p_video_to_attendees'?: boolean;
    /**
     * Show social share buttons on the registration page.
     * @type {boolean}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'show_share_button'?: boolean;
    /**
     * Survey url for post webinar survey
     * @type {string}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'survey_url'?: string;
    /**
     * Whether the **Webinar Session Branding** setting is enabled. This setting lets hosts visually customize a webinar by setting a session background. This also lets hosts use [Webinar Session Branding](https://support.zoom.us/hc/en-us/articles/4836268732045-Using-Webinar-Session-Branding) to set the virtual background for and apply name tags to hosts, alternative hosts, panelists, interpreters, and speakers.
     * @type {boolean}
     * @memberof WebinarsUpdateScheduledWebinarRequestSettings
     */
    'enable_session_branding'?: boolean;
}

type WebinarsUpdateScheduledWebinarRequestSettingsApprovalTypeEnum = 0 | 1 | 2
type WebinarsUpdateScheduledWebinarRequestSettingsAudioEnum = 'both' | 'telephony' | 'voip' | 'thirdParty'
type WebinarsUpdateScheduledWebinarRequestSettingsAutoRecordingEnum = 'local' | 'cloud' | 'none'
type WebinarsUpdateScheduledWebinarRequestSettingsRegistrationTypeEnum = 1 | 2 | 3


