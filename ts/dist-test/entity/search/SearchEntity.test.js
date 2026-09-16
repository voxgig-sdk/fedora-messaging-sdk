"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('SearchEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when FEDORA_MESSAGING_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('FEDORA_MESSAGING_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.FedoraMessagingSDK.test();
        const ent = testsdk.Search();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.FEDORA_MESSAGING_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'search.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "category", "req": false, "short": "Message category", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "i", "req": false, "short": "Message ID", "type": "`$INTEGER`", "index$": 1 }, { "active": true, "name": "msg", "req": false, "short": "Message body/payload", "type": "`$OBJECT`", "index$": 2 }, { "active": true, "name": "msg_id", "req": false, "short": "Unique message identifier", "type": "`$STRING`", "index$": 3 }, { "active": true, "format": "double", "name": "timestamp", "req": false, "short": "Message timestamp", "type": "`$NUMBER`", "index$": 4 }, { "active": true, "name": "topic", "req": false, "short": "Message topic", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "username", "req": false, "short": "Username associated with the message", "type": "`$STRING`", "index$": 6 }], "name": "search", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "agent", "orig": "agent", "reqd": false, "type": "`$ARRAY`", "index$": 0 }, { "active": true, "example": "bodhi", "kind": "query", "name": "category", "orig": "category", "reqd": false, "type": "`$ARRAY`", "index$": 1 }, { "active": true, "example": 172800, "kind": "query", "name": "delta", "orig": "delta", "reqd": false, "type": "`$NUMBER`", "index$": 2 }, { "active": true, "example": "2021-06-25T06:11:40+00:00", "kind": "query", "name": "end", "orig": "end", "reqd": false, "type": "`$ANY`", "index$": 3 }, { "active": true, "kind": "query", "name": "not_agent", "orig": "not_agent", "reqd": false, "type": "`$ARRAY`", "index$": 4 }, { "active": true, "example": "buildsys", "kind": "query", "name": "not_category", "orig": "not_category", "reqd": false, "type": "`$ARRAY`", "index$": 5 }, { "active": true, "kind": "query", "name": "not_package", "orig": "not_package", "reqd": false, "type": "`$ARRAY`", "index$": 6 }, { "active": true, "kind": "query", "name": "not_topic", "orig": "not_topic", "reqd": false, "type": "`$ARRAY`", "index$": 7 }, { "active": true, "kind": "query", "name": "not_user", "orig": "not_user", "reqd": false, "type": "`$ARRAY`", "index$": 8 }, { "active": true, "example": "desc", "kind": "query", "name": "order", "orig": "order", "reqd": false, "type": "`$STRING`", "index$": 9 }, { "active": true, "example": "nethack", "kind": "query", "name": "package", "orig": "package", "reqd": false, "type": "`$ARRAY`", "index$": 10 }, { "active": true, "example": 2, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 11 }, { "active": true, "example": 1, "kind": "query", "name": "rows_per_page", "orig": "rows_per_page", "reqd": false, "type": "`$INTEGER`", "index$": 12 }, { "active": true, "example": "2021-06-25T06:11:39+00:00", "kind": "query", "name": "start", "orig": "start", "reqd": false, "type": "`$ANY`", "index$": 13 }, { "active": true, "kind": "query", "name": "topic", "orig": "topic", "reqd": false, "type": "`$ARRAY`", "index$": 14 }, { "active": true, "example": "toshio", "kind": "query", "name": "user", "orig": "user", "reqd": false, "type": "`$ARRAY`", "index$": 15 }] }, "contract": { "id": "GET /search", "json": "{\"operationId\":\"searchMessages\",\"parameters\":[{\"description\":\"Start timestamp (POSIX timestamp or ISO 8601 date/time string). Default is delta seconds before end time.\",\"example\":\"2021-06-25T06:11:39+00:00\",\"in\":\"query\",\"name\":\"start\",\"required\":false,\"schema\":{\"oneOf\":[{\"format\":\"double\",\"type\":\"number\"},{\"format\":\"date-time\",\"type\":\"string\"}]}},{\"description\":\"End timestamp (POSIX timestamp or ISO 8601 date/time string). Default is current time unless both start and delta are set.\",\"example\":\"2021-06-25T06:11:40+00:00\",\"in\":\"query\",\"name\":\"end\",\"required\":false,\"schema\":{\"oneOf\":[{\"format\":\"double\",\"type\":\"number\"},{\"format\":\"date-time\",\"type\":\"string\"}]}},{\"description\":\"Time range in seconds from end time (e.g., 172800 for 2 days). Used to calculate start time if not explicitly provided.\",\"example\":172800,\"in\":\"query\",\"name\":\"delta\",\"required\":false,\"schema\":{\"format\":\"double\",\"type\":\"number\"}},{\"description\":\"Number of results per page for pagination.\",\"example\":1,\"in\":\"query\",\"name\":\"rows_per_page\",\"required\":false,\"schema\":{\"default\":100,\"type\":\"integer\"}},{\"description\":\"Page number for pagination (1-indexed).\",\"example\":2,\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Sort order for results. 'desc' for newest to oldest, 'asc' for oldest to newest.\",\"in\":\"query\",\"name\":\"order\",\"required\":false,\"schema\":{\"default\":\"desc\",\"enum\":[\"desc\",\"asc\"],\"type\":\"string\"}},{\"description\":\"Filter messages by category (e.g., 'bodhi', 'wiki', 'buildsys'). Can be specified multiple times for OR logic.\",\"example\":\"bodhi\",\"explode\":true,\"in\":\"query\",\"name\":\"category\",\"required\":false,\"schema\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"Filter messages by username. Can be specified multiple times for OR logic.\",\"example\":\"toshio\",\"explode\":true,\"in\":\"query\",\"name\":\"user\",\"required\":false,\"schema\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"Filter messages by package name. Can be specified multiple times for OR logic.\",\"example\":\"nethack\",\"explode\":true,\"in\":\"query\",\"name\":\"package\",\"required\":false,\"schema\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"Filter messages by topic. Can be specified multiple times for OR logic.\",\"explode\":true,\"in\":\"query\",\"name\":\"topic\",\"required\":false,\"schema\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"Filter messages by agent. Can be specified multiple times for OR logic.\",\"explode\":true,\"in\":\"query\",\"name\":\"agent\",\"required\":false,\"schema\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"Exclude messages by category. Can be specified multiple times.\",\"example\":\"buildsys\",\"explode\":true,\"in\":\"query\",\"name\":\"not_category\",\"required\":false,\"schema\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"Exclude messages by username. Can be specified multiple times.\",\"explode\":true,\"in\":\"query\",\"name\":\"not_user\",\"required\":false,\"schema\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"Exclude messages by package name. Can be specified multiple times.\",\"explode\":true,\"in\":\"query\",\"name\":\"not_package\",\"required\":false,\"schema\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"Exclude messages by topic. Can be specified multiple times.\",\"explode\":true,\"in\":\"query\",\"name\":\"not_topic\",\"required\":false,\"schema\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"},{\"description\":\"Exclude messages by agent. Can be specified multiple times.\",\"explode\":true,\"in\":\"query\",\"name\":\"not_agent\",\"required\":false,\"schema\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"arguments\":{\"agents\":[],\"categories\":[],\"delta\":1728000,\"end\":1366221938,\"not_agents\":[],\"not_categories\":[],\"not_packages\":[],\"not_topics\":[],\"not_users\":[],\"order\":\"desc\",\"packages\":[],\"page\":1,\"rows_per_page\":1,\"start\":1364493938,\"topics\":[],\"users\":[]},\"count\":1,\"pages\":2052,\"raw_messages\":[],\"total\":2052},\"schema\":{\"properties\":{\"arguments\":{\"description\":\"Echo of all query parameters used to execute the search\",\"properties\":{\"agents\":{\"description\":\"List of agents filtered\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"categories\":{\"description\":\"List of categories filtered\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"delta\":{\"description\":\"Time range in seconds\",\"format\":\"double\",\"type\":\"number\"},\"end\":{\"description\":\"End timestamp (POSIX)\",\"format\":\"double\",\"type\":\"number\"},\"not_agents\":{\"description\":\"List of agents excluded\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"not_categories\":{\"description\":\"List of categories excluded\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"not_packages\":{\"description\":\"List of packages excluded\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"not_topics\":{\"description\":\"List of topics excluded\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"not_users\":{\"description\":\"List of users excluded\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"order\":{\"description\":\"Sort order\",\"enum\":[\"desc\",\"asc\"],\"type\":\"string\"},\"packages\":{\"description\":\"List of packages filtered\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"page\":{\"description\":\"Current page number\",\"type\":\"integer\"},\"rows_per_page\":{\"description\":\"Number of rows per page\",\"type\":\"integer\"},\"start\":{\"description\":\"Start timestamp (POSIX)\",\"format\":\"double\",\"type\":\"number\"},\"topics\":{\"description\":\"List of topics filtered\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"users\":{\"description\":\"List of users filtered\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"},\"count\":{\"description\":\"Number of messages returned in this page\",\"type\":\"integer\"},\"pages\":{\"description\":\"Total number of pages available\",\"type\":\"integer\"},\"raw_messages\":{\"description\":\"Array of raw message objects from Fedora Messaging\",\"items\":{\"description\":\"A Fedora Messaging message object\",\"properties\":{\"category\":{\"description\":\"Message category\",\"type\":\"string\"},\"i\":{\"description\":\"Message ID\",\"type\":\"integer\"},\"msg\":{\"additionalProperties\":true,\"description\":\"Message body/payload\",\"type\":\"object\"},\"msg_id\":{\"description\":\"Unique message identifier\",\"type\":\"string\"},\"timestamp\":{\"description\":\"Message timestamp\",\"format\":\"double\",\"type\":\"number\"},\"topic\":{\"description\":\"Message topic\",\"type\":\"string\"},\"username\":{\"description\":\"Username associated with the message\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"total\":{\"description\":\"Total number of messages matching the query\",\"type\":\"integer\"}},\"required\":[\"arguments\",\"count\",\"pages\",\"total\",\"raw_messages\"],\"type\":\"object\"}}},\"description\":\"Successful response with messages matching the query\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid parameters\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"},\"message\":{\"description\":\"Detailed error description\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/search", "segments": [{ "lit": "search" }], "select": { "exist": ["agent", "category", "delta", "end", "not_agent", "not_category", "not_package", "not_topic", "not_user", "order", "package", "page", "rows_per_page", "start", "topic", "user"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "search", "name__orig": "search", "Name": "Search", "name_": "search", "name-": "search", "NAME": "SEARCH", "index$": 0 }, { "active": true, "entity": "search", "key$": "BasicSearchFlow", "kind": "basic", "name": "BasicSearchFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "search_ref01" } }], "index$": 0 }] }, 'Search');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let search_ref01_data = Object.values(setup.data.existing.search)[0];
        // LIST
        const search_ref01_ent = client.Search();
        const search_ref01_match = {};
        const search_ref01_list = (await search_ref01_ent.list(search_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/search/SearchTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.FedoraMessagingSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['search01', 'search02', 'search03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'FEDORA_MESSAGING_TEST_SEARCH_ENTID': idmap,
        'FEDORA_MESSAGING_TEST_LIVE': 'FALSE',
        'FEDORA_MESSAGING_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['FEDORA_MESSAGING_TEST_SEARCH_ENTID'];
    const live = 'TRUE' === env.FEDORA_MESSAGING_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['FEDORA_MESSAGING_TEST_SEARCH_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.FedoraMessagingSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.FEDORA_MESSAGING_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=SearchEntity.test.js.map