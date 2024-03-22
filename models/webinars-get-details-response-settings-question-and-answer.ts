/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * [Q&amp;A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other\'s%20questions.) for webinar.
 * @export
 * @interface WebinarsGetDetailsResponseSettingsQuestionAndAnswer
 */
export interface WebinarsGetDetailsResponseSettingsQuestionAndAnswer {
    /**
     * * `true` - Allow participants to submit questions.  * `false` - Do not allow submit questions.
     * @type {boolean}
     * @memberof WebinarsGetDetailsResponseSettingsQuestionAndAnswer
     */
    'allow_submit_questions'?: boolean;
    /**
     * * `true` - Allow participants to send questions without providing their name to the host, co-host, and panelists.  * `false` - Do not allow anonymous questions.
     * @type {boolean}
     * @memberof WebinarsGetDetailsResponseSettingsQuestionAndAnswer
     */
    'allow_anonymous_questions'?: boolean;
    /**
     * Indicate whether you want attendees to be able to view answered questions only or view all questions.  * `only` - Attendees are able to view answered questions only.  *  `all` - Attendees are able to view all questions submitted in the Q&amp;A.
     * @type {string}
     * @memberof WebinarsGetDetailsResponseSettingsQuestionAndAnswer
     */
    'answer_questions'?: WebinarsGetDetailsResponseSettingsQuestionAndAnswerAnswerQuestionsEnum;
    /**
     * * `true` - Attendees can answer questions or leave a comment in the question thread.  * `false` - Attendees can not answer questions or leave a comment in the question thread
     * @type {boolean}
     * @memberof WebinarsGetDetailsResponseSettingsQuestionAndAnswer
     */
    'attendees_can_comment'?: boolean;
    /**
     * * `true` - Attendees can click the thumbs up button to bring popular questions to the top of the Q&amp;A window.  * `false` - Attendees can not click the thumbs up button on questions.
     * @type {boolean}
     * @memberof WebinarsGetDetailsResponseSettingsQuestionAndAnswer
     */
    'attendees_can_upvote'?: boolean;
    /**
     * If simulive webinar,   * `true` - allow auto-reply to attendees.   * `false` - don\'t allow auto-reply to the attendees.
     * @type {boolean}
     * @memberof WebinarsGetDetailsResponseSettingsQuestionAndAnswer
     */
    'allow_auto_reply'?: boolean;
    /**
     * If `allow_auto_reply` = true, the text to be included in the automatic response. 
     * @type {string}
     * @memberof WebinarsGetDetailsResponseSettingsQuestionAndAnswer
     */
    'auto_reply_text'?: string;
    /**
     * * `true`: Enable [Q&amp;A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other\'s%20questions.) for webinar.  * `false`: Disable Q&amp;A for webinar.
     * @type {boolean}
     * @memberof WebinarsGetDetailsResponseSettingsQuestionAndAnswer
     */
    'enable'?: boolean;
}

type WebinarsGetDetailsResponseSettingsQuestionAndAnswerAnswerQuestionsEnum = 'only' | 'all'


