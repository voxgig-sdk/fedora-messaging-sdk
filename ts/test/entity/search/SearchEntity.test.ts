

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { FedoraMessagingSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('SearchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when FEDORA_MESSAGING_TEST_LIVE=TRUE.
  afterEach(liveDelay('FEDORA_MESSAGING_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = FedoraMessagingSDK.test()
    const ent = testsdk.Search()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.FEDORA_MESSAGING_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'search.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"category":{"a":true,"h":"Category","n":"category","r":false,"sh":"Message category","t":"`$STRING`","key$":"category","index$":0},"i":{"a":true,"h":"I","n":"i","r":false,"sh":"Message ID","t":"`$INTEGER`","key$":"i","index$":1},"msg":{"a":true,"h":"Msg","n":"msg","r":false,"sh":"Message body/payload","t":"`$OBJECT`","key$":"msg","index$":2},"msg_id":{"a":true,"h":"Msg Id","n":"msg_id","r":false,"sh":"Unique message identifier","t":"`$STRING`","key$":"msg_id","index$":3},"timestamp":{"a":true,"fo":"double","h":"Timestamp","n":"timestamp","r":false,"sh":"Message timestamp","t":"`$NUMBER`","key$":"timestamp","index$":4},"topic":{"a":true,"h":"Topic","n":"topic","r":false,"sh":"Message topic","t":"`$STRING`","key$":"topic","index$":5},"username":{"a":true,"h":"Username","n":"username","r":false,"sh":"Username associated with the message","t":"`$STRING`","key$":"username","index$":6}},"name":"search","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /search","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"agent","or":"agent","r":false,"t":"`$ARRAY`","index$":0},{"a":true,"ex":"bodhi","k":"query","n":"category","or":"category","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"ex":172800,"k":"query","n":"delta","or":"delta","r":false,"t":"`$NUMBER`","index$":2},{"a":true,"ex":"2021-06-25T06:11:40+00:00","k":"query","n":"end","or":"end","r":false,"t":"`$ANY`","index$":3},{"a":true,"k":"query","n":"not_agent","or":"not_agent","r":false,"t":"`$ARRAY`","index$":4},{"a":true,"ex":"buildsys","k":"query","n":"not_category","or":"not_category","r":false,"t":"`$ARRAY`","index$":5},{"a":true,"k":"query","n":"not_package","or":"not_package","r":false,"t":"`$ARRAY`","index$":6},{"a":true,"k":"query","n":"not_topic","or":"not_topic","r":false,"t":"`$ARRAY`","index$":7},{"a":true,"k":"query","n":"not_user","or":"not_user","r":false,"t":"`$ARRAY`","index$":8},{"a":true,"ex":"desc","k":"query","n":"order","or":"order","r":false,"t":"`$STRING`","index$":9},{"a":true,"ex":"nethack","k":"query","n":"package","or":"package","r":false,"t":"`$ARRAY`","index$":10},{"a":true,"ex":2,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":11},{"a":true,"ex":1,"k":"query","n":"rows_per_page","or":"rows_per_page","r":false,"t":"`$INTEGER`","index$":12},{"a":true,"ex":"2021-06-25T06:11:39+00:00","k":"query","n":"start","or":"start","r":false,"t":"`$ANY`","index$":13},{"a":true,"k":"query","n":"topic","or":"topic","r":false,"t":"`$ARRAY`","index$":14},{"a":true,"ex":"toshio","k":"query","n":"user","or":"user","r":false,"t":"`$ARRAY`","index$":15}]},"k":"http","m":"GET","o":"/search","q":{"exist":["agent","category","delta","end","not_agent","not_category","not_package","not_topic","not_user","order","package","page","rows_per_page","start","topic","user"]},"r":{},"s":[{"lit":"search"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"search","name__orig":"search","Name":"Search","name_":"search","name-":"search","NAME":"SEARCH","index$":0}, {"active":true,"entity":"search","key$":"BasicSearchFlow","kind":"basic","name":"BasicSearchFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"search_ref01"}}],"index$":0}]}, 'Search', {"GET /search":{"protocol":"http","operationId":"searchMessages","responses":{"200":{"description":"Successful response with messages matching the query","content":{"application/json":{"schema":{"type":"object","properties":{"arguments":{"description":"Echo of all query parameters used to execute the search","key$":"arguments","properties":{"agents":{"description":"List of agents filtered","items":{"type":"string"},"type":"array"},"categories":{"description":"List of categories filtered","items":{"type":"string"},"type":"array"},"delta":{"description":"Time range in seconds","format":"double","type":"number"},"end":{"description":"End timestamp (POSIX)","format":"double","type":"number"},"not_agents":{"description":"List of agents excluded","items":{"type":"string"},"type":"array"},"not_categories":{"description":"List of categories excluded","items":{"type":"string"},"type":"array"},"not_packages":{"description":"List of packages excluded","items":{"type":"string"},"type":"array"},"not_topics":{"description":"List of topics excluded","items":{"type":"string"},"type":"array"},"not_users":{"description":"List of users excluded","items":{"type":"string"},"type":"array"},"order":{"description":"Sort order","enum":["desc","asc"],"type":"string"},"packages":{"description":"List of packages filtered","items":{"type":"string"},"type":"array"},"page":{"description":"Current page number","type":"integer"},"rows_per_page":{"description":"Number of rows per page","type":"integer"},"start":{"description":"Start timestamp (POSIX)","format":"double","type":"number"},"topics":{"description":"List of topics filtered","items":{"type":"string"},"type":"array"},"users":{"description":"List of users filtered","items":{"type":"string"},"type":"array"}},"type":"object"},"count":{"description":"Number of messages returned in this page","key$":"count","type":"integer"},"pages":{"description":"Total number of pages available","key$":"pages","type":"integer"},"total":{"description":"Total number of messages matching the query","key$":"total","type":"integer"},"raw_messages":{"description":"Array of raw message objects from Fedora Messaging","items":{"description":"A Fedora Messaging message object","properties":{"category":{"description":"Message category","type":"string","key$":"category"},"i":{"description":"Message ID","type":"integer","key$":"i"},"msg":{"additionalProperties":true,"description":"Message body/payload","type":"object","key$":"msg"},"msg_id":{"description":"Unique message identifier","type":"string","key$":"msg_id"},"timestamp":{"description":"Message timestamp","format":"double","type":"number","key$":"timestamp"},"topic":{"description":"Message topic","type":"string","key$":"topic"},"username":{"description":"Username associated with the message","type":"string","key$":"username"}},"type":"object","x-ref":"#/components/schemas/Message","index$":0},"key$":"raw_messages","type":"array"}},"required":["arguments","count","pages","total","raw_messages"],"x-ref":"#/components/schemas/SearchResponse"},"example":{"arguments":{"delta":1728000,"end":1366221938,"page":1,"rows_per_page":1,"order":"desc","start":1364493938,"topics":[],"agents":[],"categories":[],"users":[],"packages":[],"not_topics":[],"not_agents":[],"not_categories":[],"not_users":[],"not_packages":[]},"count":1,"pages":2052,"raw_messages":[],"total":2052}}}},"400":{"description":"Bad request - invalid parameters","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"},"message":{"type":"string","description":"Detailed error description"}},"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"},"message":{"type":"string","description":"Detailed error description"}},"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"start","in":"query","description":"Start timestamp (POSIX timestamp or ISO 8601 date/time string). Default is delta seconds before end time.","required":false,"schema":{"oneOf":[{"type":"number","format":"double"},{"type":"string","format":"date-time"}]},"example":"2021-06-25T06:11:39+00:00","index$":0},{"name":"end","in":"query","description":"End timestamp (POSIX timestamp or ISO 8601 date/time string). Default is current time unless both start and delta are set.","required":false,"schema":{"oneOf":[{"type":"number","format":"double"},{"type":"string","format":"date-time"}]},"example":"2021-06-25T06:11:40+00:00","index$":1},{"name":"delta","in":"query","description":"Time range in seconds from end time (e.g., 172800 for 2 days). Used to calculate start time if not explicitly provided.","required":false,"schema":{"type":"number","format":"double"},"example":172800,"index$":2},{"name":"rows_per_page","in":"query","description":"Number of results per page for pagination.","required":false,"schema":{"type":"integer","default":100},"example":1,"index$":3},{"name":"page","in":"query","description":"Page number for pagination (1-indexed).","required":false,"schema":{"type":"integer","default":1,"minimum":1},"example":2,"index$":4},{"name":"order","in":"query","description":"Sort order for results. 'desc' for newest to oldest, 'asc' for oldest to newest.","required":false,"schema":{"type":"string","enum":["desc","asc"],"default":"desc"},"index$":5},{"name":"category","in":"query","description":"Filter messages by category (e.g., 'bodhi', 'wiki', 'buildsys'). Can be specified multiple times for OR logic.","required":false,"schema":{"type":"array","items":{"type":"string"}},"explode":true,"style":"form","example":"bodhi","index$":6},{"name":"user","in":"query","description":"Filter messages by username. Can be specified multiple times for OR logic.","required":false,"schema":{"type":"array","items":{"type":"string"}},"explode":true,"style":"form","example":"toshio","index$":7},{"name":"package","in":"query","description":"Filter messages by package name. Can be specified multiple times for OR logic.","required":false,"schema":{"type":"array","items":{"type":"string"}},"explode":true,"style":"form","example":"nethack","index$":8},{"name":"topic","in":"query","description":"Filter messages by topic. Can be specified multiple times for OR logic.","required":false,"schema":{"type":"array","items":{"type":"string"}},"explode":true,"style":"form","index$":9},{"name":"agent","in":"query","description":"Filter messages by agent. Can be specified multiple times for OR logic.","required":false,"schema":{"type":"array","items":{"type":"string"}},"explode":true,"style":"form","index$":10},{"name":"not_category","in":"query","description":"Exclude messages by category. Can be specified multiple times.","required":false,"schema":{"type":"array","items":{"type":"string"}},"explode":true,"style":"form","example":"buildsys","index$":11},{"name":"not_user","in":"query","description":"Exclude messages by username. Can be specified multiple times.","required":false,"schema":{"type":"array","items":{"type":"string"}},"explode":true,"style":"form","index$":12},{"name":"not_package","in":"query","description":"Exclude messages by package name. Can be specified multiple times.","required":false,"schema":{"type":"array","items":{"type":"string"}},"explode":true,"style":"form","index$":13},{"name":"not_topic","in":"query","description":"Exclude messages by topic. Can be specified multiple times.","required":false,"schema":{"type":"array","items":{"type":"string"}},"explode":true,"style":"form","index$":14},{"name":"not_agent","in":"query","description":"Exclude messages by agent. Can be specified multiple times.","required":false,"schema":{"type":"array","items":{"type":"string"}},"explode":true,"style":"form","index$":15}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let search_ref01_data = Object.values(setup.data.existing.search)[0] as any

    // LIST
    const search_ref01_ent = client.Search()
    const search_ref01_match: any = {}

    const search_ref01_list = (await search_ref01_ent.list(search_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/search/SearchTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = FedoraMessagingSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['search01','search02','search03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'FEDORA_MESSAGING_TEST_SEARCH_ENTID': idmap,
    'FEDORA_MESSAGING_TEST_LIVE': 'FALSE',
    'FEDORA_MESSAGING_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['FEDORA_MESSAGING_TEST_SEARCH_ENTID']

  const live = 'TRUE' === env.FEDORA_MESSAGING_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['FEDORA_MESSAGING_TEST_SEARCH_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new FedoraMessagingSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
