/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CloudRecordingGetMeetingRecordingsResponseParticipantAudioFilesInner } from './cloud-recording-get-meeting-recordings-response-participant-audio-files-inner';
import { CloudRecordingGetMeetingRecordingsResponseRecordingFilesInner } from './cloud-recording-get-meeting-recordings-response-recording-files-inner';

/**
 * This field returns a list of recording files for each participant. The API only returns this response when the **Record a separate audio file of each participant** setting is enabled.
 * @export
 * @interface CloudRecordingGetMeetingRecordingsResponse
 */
export interface CloudRecordingGetMeetingRecordingsResponse {
    /**
     * The user account\'s unique identifier.
     * @type {string}
     * @memberof CloudRecordingGetMeetingRecordingsResponse
     */
    'account_id'?: string;
    /**
     * The meeting duration.
     * @type {number}
     * @memberof CloudRecordingGetMeetingRecordingsResponse
     */
    'duration'?: number;
    /**
     * The ID of the user set as host of meeting.
     * @type {string}
     * @memberof CloudRecordingGetMeetingRecordingsResponse
     */
    'host_id'?: string;
    /**
     * The meeting ID, also known as the meeting number.
     * @type {number}
     * @memberof CloudRecordingGetMeetingRecordingsResponse
     */
    'id'?: number;
    /**
     *  The number of recording files returned in the response of this API call. This includes the `recording_files` and  `participant_audio_files` files.
     * @type {number}
     * @memberof CloudRecordingGetMeetingRecordingsResponse
     */
    'recording_count'?: number;
    /**
     * The time when the meeting started.
     * @type {string}
     * @memberof CloudRecordingGetMeetingRecordingsResponse
     */
    'start_time'?: string;
    /**
     * The meeting topic.
     * @type {string}
     * @memberof CloudRecordingGetMeetingRecordingsResponse
     */
    'topic'?: string;
    /**
     * The recording\'s total file size. This includes the `recording_files` and `participant_audio_files` files.
     * @type {number}
     * @memberof CloudRecordingGetMeetingRecordingsResponse
     */
    'total_size'?: number;
    /**
     * The recording\'s associated type of meeting or webinar.   If the recording is of a meeting:  * `1` - Instant meeting.  * `2` - Scheduled meeting.  * `3` - A recurring meeting with no fixed time.  * `4` - A meeting created via PMI (Personal Meeting ID).  * `7` - A [Personal Audio Conference](https://support.zoom.us/hc/en-us/articles/204517069-Getting-Started-with-Personal-Audio-Conference) (PAC).  * `8` - Recurring meeting with a fixed time.   If the recording is of a webinar:  * `5` - A webinar.  * `6` - A recurring webinar without a fixed time  * `9` - A recurring webinar with a fixed time.  If the recording is **not** from a meeting or webinar:   * `99` - A recording uploaded via the [**Recordings**](https://zoom.us/recording) interface on the Zoom Web Portal.
     * @type {string}
     * @memberof CloudRecordingGetMeetingRecordingsResponse
     */
    'type'?: CloudRecordingGetMeetingRecordingsResponseTypeEnum;
    /**
     * The unique meeting identifier. Each instance of the meeting has its own UUID.
     * @type {string}
     * @memberof CloudRecordingGetMeetingRecordingsResponse
     */
    'uuid'?: string;
    /**
     * The cloud recording\'s passcode to be used in the URL. Directly splice this recording\'s passcode in `play_url` or `share_url` with `?pwd=` to access and play. Example: \'https://zoom.us/rec/share/_**************?pwd=yNYIS408EJygs7rE5vVsJwXIz4-VW7MH\'.
     * @type {string}
     * @memberof CloudRecordingGetMeetingRecordingsResponse
     */
    'recording_play_passcode'?: string;
    /**
     * The list of recording file.
     * @type {Array<CloudRecordingGetMeetingRecordingsResponseRecordingFilesInner>}
     * @memberof CloudRecordingGetMeetingRecordingsResponse
     */
    'recording_files'?: Array<CloudRecordingGetMeetingRecordingsResponseRecordingFilesInner>;
    /**
     * The JWT token to download the meeting\'s recording. This response only returns if the `download_access_token` is included in the `include_fields` query parameter.
     * @type {string}
     * @memberof CloudRecordingGetMeetingRecordingsResponse
     */
    'download_access_token'?: string;
    /**
     * The cloud recording\'s passcode.
     * @type {string}
     * @memberof CloudRecordingGetMeetingRecordingsResponse
     */
    'password'?: string;
    /**
     * A list of recording files. The API only returns this response when the **Record a separate audio file of each participant** setting is enabled.
     * @type {Array<CloudRecordingGetMeetingRecordingsResponseParticipantAudioFilesInner>}
     * @memberof CloudRecordingGetMeetingRecordingsResponse
     */
    'participant_audio_files'?: Array<CloudRecordingGetMeetingRecordingsResponseParticipantAudioFilesInner>;
}

type CloudRecordingGetMeetingRecordingsResponseTypeEnum = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '99'


