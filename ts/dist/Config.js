"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'FedoraMessaging',
        slug: "fedora-messaging",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://apps.fedoraproject.org/datagrepper/v2",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            search: {},
        }
    };
    entity = {
        "search": {
            "fields": [
                {
                    "name": "category",
                    "title": "Category",
                    "type": "`$STRING`",
                    "short": "Message category"
                },
                {
                    "name": "i",
                    "title": "I",
                    "type": "`$INTEGER`",
                    "short": "Message ID"
                },
                {
                    "name": "msg",
                    "title": "Msg",
                    "type": "`$OBJECT`",
                    "short": "Message body/payload"
                },
                {
                    "name": "msg_id",
                    "title": "Msg Id",
                    "type": "`$STRING`",
                    "short": "Unique message identifier"
                },
                {
                    "name": "timestamp",
                    "title": "Timestamp",
                    "type": "`$NUMBER`",
                    "short": "Message timestamp",
                    "format": "double"
                },
                {
                    "name": "topic",
                    "title": "Topic",
                    "type": "`$STRING`",
                    "short": "Message topic"
                },
                {
                    "name": "username",
                    "title": "Username",
                    "type": "`$STRING`",
                    "short": "Username associated with the message"
                }
            ],
            "name": "search",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/search",
                            "segments": [
                                {
                                    "lit": "search"
                                }
                            ],
                            "parts": [
                                "search"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "agent",
                                        "orig": "agent",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "category",
                                        "orig": "category",
                                        "type": "`$ARRAY`",
                                        "kind": "query",
                                        "example": "bodhi"
                                    },
                                    {
                                        "name": "delta",
                                        "orig": "delta",
                                        "type": "`$NUMBER`",
                                        "kind": "query",
                                        "example": 172800
                                    },
                                    {
                                        "name": "end",
                                        "orig": "end",
                                        "type": "`$ANY`",
                                        "kind": "query",
                                        "example": "2021-06-25T06:11:40+00:00"
                                    },
                                    {
                                        "name": "not_agent",
                                        "orig": "not_agent",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "not_category",
                                        "orig": "not_category",
                                        "type": "`$ARRAY`",
                                        "kind": "query",
                                        "example": "buildsys"
                                    },
                                    {
                                        "name": "not_package",
                                        "orig": "not_package",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "not_topic",
                                        "orig": "not_topic",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "not_user",
                                        "orig": "not_user",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "order",
                                        "orig": "order",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "desc"
                                    },
                                    {
                                        "name": "package",
                                        "orig": "package",
                                        "type": "`$ARRAY`",
                                        "kind": "query",
                                        "example": "nethack"
                                    },
                                    {
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 2
                                    },
                                    {
                                        "name": "rows_per_page",
                                        "orig": "rows_per_page",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "example": 1
                                    },
                                    {
                                        "name": "start",
                                        "orig": "start",
                                        "type": "`$ANY`",
                                        "kind": "query",
                                        "example": "2021-06-25T06:11:39+00:00"
                                    },
                                    {
                                        "name": "topic",
                                        "orig": "topic",
                                        "type": "`$ARRAY`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "user",
                                        "orig": "user",
                                        "type": "`$ARRAY`",
                                        "kind": "query",
                                        "example": "toshio"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "agent",
                                    "category",
                                    "delta",
                                    "end",
                                    "not_agent",
                                    "not_category",
                                    "not_package",
                                    "not_topic",
                                    "not_user",
                                    "order",
                                    "package",
                                    "page",
                                    "rows_per_page",
                                    "start",
                                    "topic",
                                    "user"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map