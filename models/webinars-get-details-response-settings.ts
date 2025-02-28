/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { WebinarsGetDetailsResponseSettingsAttendeesAndPanelistsReminderEmailNotification } from './webinars-get-details-response-settings-attendees-and-panelists-reminder-email-notification';
import { WebinarsGetDetailsResponseSettingsFollowUpAbsenteesEmailNotification } from './webinars-get-details-response-settings-follow-up-absentees-email-notification';
import { WebinarsGetDetailsResponseSettingsFollowUpAttendeesEmailNotification } from './webinars-get-details-response-settings-follow-up-attendees-email-notification';
import { WebinarsGetDetailsResponseSettingsLanguageInterpretation } from './webinars-get-details-response-settings-language-interpretation';
import { WebinarsGetDetailsResponseSettingsQuestionAndAnswer } from './webinars-get-details-response-settings-question-and-answer';
import { WebinarsGetDetailsResponseSettingsSignLanguageInterpretation } from './webinars-get-details-response-settings-sign-language-interpretation';

/**
 * Webinar settings.
 * @export
 * @interface WebinarsGetDetailsResponseSettings
 */
export interface WebinarsGetDetailsResponseSettings {
    /**
     * Allow attendees to join from multiple devices.
     * @type {boolean}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'allow_multiple_devices'?: boolean;
    /**
     * Alternative host emails or IDs. Multiple values separated by comma.
     * @type {string}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'alternative_hosts'?: string;
    /**
     * Whether the **Allow alternative hosts to add or edit polls** feature is enabled. This requires Zoom version 5.8.0 or higher.
     * @type {boolean}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'alternative_host_update_polls'?: boolean;
    /**
     * `0` - Automatically approve.    `1` - Manually approve.    `2` - No registration required.
     * @type {number}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'approval_type'?: WebinarsGetDetailsResponseSettingsApprovalTypeEnum;
    /**
     * 
     * @type {WebinarsGetDetailsResponseSettingsAttendeesAndPanelistsReminderEmailNotification}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'attendees_and_panelists_reminder_email_notification'?: WebinarsGetDetailsResponseSettingsAttendeesAndPanelistsReminderEmailNotification;
    /**
     * Determine how participants can join the audio portion of the webinar.
     * @type {string}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'audio'?: WebinarsGetDetailsResponseSettingsAudioEnum;
    /**
     * Third party audio conference info.
     * @type {string}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'audio_conference_info'?: string;
    /**
     * If user has configured [**Sign Into Zoom with Specified Domains**](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f) option, this will list the domains that are authenticated.
     * @type {string}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'authentication_domains'?: string;
    /**
     * Authentication name set in the [authentication profile](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f).
     * @type {string}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'authentication_name'?: string;
    /**
     * Webinar authentication option id.
     * @type {string}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'authentication_option'?: string;
    /**
     * Automatic recording.   `local` - Record on local.    `cloud` -  Record on cloud.    `none` - Disabled.
     * @type {string}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'auto_recording'?: WebinarsGetDetailsResponseSettingsAutoRecordingEnum;
    /**
     * Close registration after event date.
     * @type {boolean}
     * @memberof WebinarsGetDetailsResponseSettings
     * @deprecated
     */
    'close_registration'?: boolean;
    /**
     * Contact email for registration.
     * @type {string}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'contact_email'?: string;
    /**
     * Contact name for registration.
     * @type {string}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'contact_name'?: string;
    /**
     * Set the email language. The only options are `en-US`,`de-DE`,`es-ES`,`fr-FR`,`jp-JP`,`pt-PT`,`ru-RU`,`zh-CN`, `zh-TW`, `ko-KO`, `it-IT`, `vi-VN`.
     * @type {string}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'email_language'?: string;
    /**
     * Only signed in users can join this meeting.  **This field is deprecated and will not be supported in the future.**       As an alternative, use the `meeting_authentication`, `authentication_option` and `authentication_domains` fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the Webinar.
     * @type {boolean}
     * @memberof WebinarsGetDetailsResponseSettings
     * @deprecated
     */
    'enforce_login'?: boolean;
    /**
     * Only signed in users with specified domains can join meetings.  **This field is deprecated and will not be supported in the future.**       As an alternative, use the `meeting_authentication`, `authentication_option`, and `authentication_domains` fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the Webinar.
     * @type {string}
     * @memberof WebinarsGetDetailsResponseSettings
     * @deprecated
     */
    'enforce_login_domains'?: string;
    /**
     * 
     * @type {WebinarsGetDetailsResponseSettingsFollowUpAbsenteesEmailNotification}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'follow_up_absentees_email_notification'?: WebinarsGetDetailsResponseSettingsFollowUpAbsenteesEmailNotification;
    /**
     * 
     * @type {WebinarsGetDetailsResponseSettingsFollowUpAttendeesEmailNotification}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'follow_up_attendees_email_notification'?: WebinarsGetDetailsResponseSettingsFollowUpAttendeesEmailNotification;
    /**
     * List of global dial-in countries
     * @type {Array<string>}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'global_dial_in_countries'?: Array<string>;
    /**
     * Default to HD video.
     * @type {boolean}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'hd_video'?: boolean;
    /**
     * Whether HD video for attendees is enabled.
     * @type {boolean}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'hd_video_for_attendees'?: boolean;
    /**
     * Start video when host joins webinar.
     * @type {boolean}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'host_video'?: boolean;
    /**
     * 
     * @type {WebinarsGetDetailsResponseSettingsLanguageInterpretation}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'language_interpretation'?: WebinarsGetDetailsResponseSettingsLanguageInterpretation;
    /**
     * 
     * @type {WebinarsGetDetailsResponseSettingsSignLanguageInterpretation}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'sign_language_interpretation'?: WebinarsGetDetailsResponseSettingsSignLanguageInterpretation;
    /**
     * Require panelists to authenticate to join.
     * @type {boolean}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'panelist_authentication'?: boolean;
    /**
     * Only authenticated users can join the webinar.
     * @type {boolean}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'meeting_authentication'?: boolean;
    /**
     * Add watermark that identifies the viewing participant.
     * @type {boolean}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'add_watermark'?: boolean;
    /**
     * Add audio watermark that identifies the participants.
     * @type {boolean}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'add_audio_watermark'?: boolean;
    /**
     * Send notification email to registrants when the host updates a webinar.
     * @type {boolean}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'notify_registrants'?: boolean;
    /**
     * Make the webinar on-demand.
     * @type {boolean}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'on_demand'?: boolean;
    /**
     * Send invitation email to panelists. If `false`, do not send invitation email to panelists.
     * @type {boolean}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'panelists_invitation_email_notification'?: boolean;
    /**
     * Start video when panelists join webinar.
     * @type {boolean}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'panelists_video'?: boolean;
    /**
     * Zoom will open a survey page in attendees\' browsers after leaving the webinar.
     * @type {boolean}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'post_webinar_survey'?: boolean;
    /**
     * Enable practice session.
     * @type {boolean}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'practice_session'?: boolean;
    /**
     * 
     * @type {WebinarsGetDetailsResponseSettingsQuestionAndAnswer}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'question_and_answer'?: WebinarsGetDetailsResponseSettingsQuestionAndAnswer;
    /**
     * Send confirmation email to registrants
     * @type {boolean}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'registrants_confirmation_email'?: boolean;
    /**
     * Send email notifications to registrants about approval, cancellation, denial of the registration. The value of this field must be set to true in order to use the `registrants_confirmation_email` field.
     * @type {boolean}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'registrants_email_notification'?: boolean;
    /**
     * Restrict number of registrants for a webinar. By default, it is set to `0`. A `0` value means that the restriction option is disabled. Provide a number higher than 0 to restrict the webinar registrants by the that number.
     * @type {number}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'registrants_restrict_number'?: number;
    /**
     * Registration types. Only used for recurring webinars with a fixed time.    `1` - Attendees register once and can attend any of the webinar sessions.    `2` - Attendees need to register for each session in order to attend.    `3` - Attendees register once and can choose one or more sessions to attend.
     * @type {number}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'registration_type'?: WebinarsGetDetailsResponseSettingsRegistrationTypeEnum;
    /**
     * Always send 1080p video to attendees.
     * @type {boolean}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'send_1080p_video_to_attendees'?: boolean;
    /**
     * Show social share buttons on the registration page.
     * @type {boolean}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'show_share_button'?: boolean;
    /**
     * Survey URL for post webinar survey.
     * @type {string}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'survey_url'?: string;
    /**
     * Whether the **Webinar Session Branding** setting is enabled. This setting lets hosts visually customize a webinar by setting a session background. This also lets hosts use [webinar session branding](https://support.zoom.us/hc/en-us/articles/4836268732045-Using-Webinar-Session-Branding) to set the Virtual Background for and apply name tags to hosts, alternative hosts, panelists, interpreters, and speakers.
     * @type {boolean}
     * @memberof WebinarsGetDetailsResponseSettings
     */
    'enable_session_branding'?: boolean;
}

type WebinarsGetDetailsResponseSettingsApprovalTypeEnum = 0 | 1 | 2
type WebinarsGetDetailsResponseSettingsAudioEnum = 'both' | 'telephony' | 'voip' | 'thirdParty'
type WebinarsGetDetailsResponseSettingsAutoRecordingEnum = 'local' | 'cloud' | 'none'
type WebinarsGetDetailsResponseSettingsRegistrationTypeEnum = 1 | 2 | 3


