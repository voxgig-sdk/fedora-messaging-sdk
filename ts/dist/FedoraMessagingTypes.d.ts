export interface Search {
    category?: string;
    i?: number;
    msg?: Record<string, any>;
    msg_id?: string;
    timestamp?: number;
    topic?: string;
    username?: string;
}
export interface SearchListMatch {
    agent?: any[];
    category?: any[];
    delta?: number;
    end?: any;
    not_agent?: any[];
    not_category?: any[];
    not_package?: any[];
    not_topic?: any[];
    not_user?: any[];
    order?: string;
    package?: any[];
    page?: number;
    rows_per_page?: number;
    start?: any;
    topic?: any[];
    user?: any[];
}
