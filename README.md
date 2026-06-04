# FedoraMessaging SDK

Query historical Fedora Messaging events by user, package, topic, or time range

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Fedora Messaging API

Datagrepper is a web application and JSON API that lets you retrieve historical messages sent across the [Fedora Messaging](https://fedora-messaging.readthedocs.io/) bus. It is operated by the [Fedora Project](https://fedoraproject.org/) infrastructure team and queries messages that have been consumed and persisted by the companion service Datanommer.

What you get from the API:

- Search across Fedora's full historical message archive (Bodhi updates, wiki edits, Koji builds, askbot activity, and more).
- Filter by `category`, `user`, `package`, `topic`, or `agent`, with corresponding `not_*` negative filters that exclude matches.
- Time-window queries via `start` and `end` (POSIX timestamps or ISO 8601) or a rolling `delta` in seconds.
- Pagination with `page` and `rows_per_page`, plus ordering via `order=desc` (default) or `order=asc`.
- JSON responses containing the echoed query arguments, pagination metadata, total count, and a `raw_messages` array.

Operational notes: the public base URL is `https://apps.fedoraproject.org/datagrepper/v2`, the API is unauthenticated, and CORS is not enabled (call it server-side or via a proxy). Reference documentation lives at `/datagrepper/reference/` and help is available in `#fedora-apps` on Libera Chat.

## Try it

**TypeScript**
```bash
npm install fedora-messaging
```

**Python**
```bash
pip install fedora-messaging-sdk
```

**PHP**
```bash
composer require voxgig/fedora-messaging-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/fedora-messaging-sdk/go
```

**Ruby**
```bash
gem install fedora-messaging-sdk
```

**Lua**
```bash
luarocks install fedora-messaging-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { FedoraMessagingSDK } from 'fedora-messaging'

const client = new FedoraMessagingSDK({})

// List all searchs
const searchs = await client.Search().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o fedora-messaging-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "fedora-messaging": {
      "command": "/abs/path/to/fedora-messaging-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Search** | Historical Fedora Messaging events; queried via `GET /v2/search` with category, user, package, topic, agent, and time-range filters. | `/search` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from fedoramessaging_sdk import FedoraMessagingSDK

client = FedoraMessagingSDK({})

# List all searchs
searchs, err = client.Search(None).list(None, None)
```

### PHP

```php
<?php
require_once 'fedoramessaging_sdk.php';

$client = new FedoraMessagingSDK([]);

// List all searchs
[$searchs, $err] = $client->Search(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/fedora-messaging-sdk/go"

client := sdk.NewFedoraMessagingSDK(map[string]any{})

// List all searchs
searchs, err := client.Search(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "FedoraMessaging_sdk"

client = FedoraMessagingSDK.new({})

# List all searchs
searchs, err = client.Search(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("fedora-messaging_sdk")

local client = sdk.new({})

-- List all searchs
local searchs, err = client:Search(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = FedoraMessagingSDK.test()
const result = await client.Search().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = FedoraMessagingSDK.test(None, None)
result, err = client.Search(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = FedoraMessagingSDK::test(null, null);
[$result, $err] = $client->Search(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Search(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = FedoraMessagingSDK.test(nil, nil)
result, err = client.Search(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Search(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Fedora Messaging API

- Upstream: [https://apps.fedoraproject.org/datagrepper/](https://apps.fedoraproject.org/datagrepper/)
- API docs: [https://apps.fedoraproject.org/datagrepper/reference/](https://apps.fedoraproject.org/datagrepper/reference/)

- Datagrepper is developed by Red Hat and Fedora Infrastructure contributors.
- Source code is hosted on GitHub under the Fedora Infra organisation.
- Message data is part of the public Fedora project event stream and can be reused subject to Fedora's project policies.
- No API key is required to query the public endpoint; please be considerate with request volume.

---

Generated from the Fedora Messaging API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
