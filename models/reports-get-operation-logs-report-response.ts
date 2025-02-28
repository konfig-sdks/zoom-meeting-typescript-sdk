/*
Zoom Meeting API

The Zoom Meeting APIs let developers to access information from Zoom. 

The version of the OpenAPI document: 2


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ReportsGetOperationLogsReportResponseOperationLogsInner } from './reports-get-operation-logs-report-response-operation-logs-inner';

/**
 * Pagination object.
 * @export
 * @interface ReportsGetOperationLogsReportResponse
 */
export interface ReportsGetOperationLogsReportResponse {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of the available result list exceeds the page size. The expiration period is 15 minutes.
     * @type {string}
     * @memberof ReportsGetOperationLogsReportResponse
     */
    'next_page_token'?: string;
    /**
     * The amount of records returns within a single API call. 
     * @type {number}
     * @memberof ReportsGetOperationLogsReportResponse
     */
    'page_size'?: number;
    /**
     * Array of operation log objects
     * @type {Array<ReportsGetOperationLogsReportResponseOperationLogsInner>}
     * @memberof ReportsGetOperationLogsReportResponse
     */
    'operation_logs'?: Array<ReportsGetOperationLogsReportResponseOperationLogsInner>;
}

