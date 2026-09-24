# FedoraMessaging SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "FedoraMessaging",
            "slug": "fedora-messaging",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://apps.fedoraproject.org/datagrepper/v2",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "search": {},
            },
        },
        "entity": {
      "search": {
        "fields": [
          {
            "name": "category",
            "title": "Category",
            "type": "`$STRING`",
            "short": "Message category",
          },
          {
            "name": "i",
            "title": "I",
            "type": "`$INTEGER`",
            "short": "Message ID",
          },
          {
            "name": "msg",
            "title": "Msg",
            "type": "`$OBJECT`",
            "short": "Message body/payload",
          },
          {
            "name": "msg_id",
            "title": "Msg Id",
            "type": "`$STRING`",
            "short": "Unique message identifier",
          },
          {
            "name": "timestamp",
            "title": "Timestamp",
            "type": "`$NUMBER`",
            "short": "Message timestamp",
            "format": "double",
          },
          {
            "name": "topic",
            "title": "Topic",
            "type": "`$STRING`",
            "short": "Message topic",
          },
          {
            "name": "username",
            "title": "Username",
            "type": "`$STRING`",
            "short": "Username associated with the message",
          },
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
                    "lit": "search",
                  },
                ],
                "parts": [
                  "search",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "agent",
                      "orig": "agent",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "category",
                      "orig": "category",
                      "type": "`$ARRAY`",
                      "kind": "query",
                      "example": "bodhi",
                    },
                    {
                      "name": "delta",
                      "orig": "delta",
                      "type": "`$NUMBER`",
                      "kind": "query",
                      "example": 172800,
                    },
                    {
                      "name": "end",
                      "orig": "end",
                      "type": "`$ANY`",
                      "kind": "query",
                      "example": "2021-06-25T06:11:40+00:00",
                    },
                    {
                      "name": "not_agent",
                      "orig": "not_agent",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "not_category",
                      "orig": "not_category",
                      "type": "`$ARRAY`",
                      "kind": "query",
                      "example": "buildsys",
                    },
                    {
                      "name": "not_package",
                      "orig": "not_package",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "not_topic",
                      "orig": "not_topic",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "not_user",
                      "orig": "not_user",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "order",
                      "orig": "order",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "desc",
                    },
                    {
                      "name": "package",
                      "orig": "package",
                      "type": "`$ARRAY`",
                      "kind": "query",
                      "example": "nethack",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 2,
                    },
                    {
                      "name": "rows_per_page",
                      "orig": "rows_per_page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "start",
                      "orig": "start",
                      "type": "`$ANY`",
                      "kind": "query",
                      "example": "2021-06-25T06:11:39+00:00",
                    },
                    {
                      "name": "topic",
                      "orig": "topic",
                      "type": "`$ARRAY`",
                      "kind": "query",
                    },
                    {
                      "name": "user",
                      "orig": "user",
                      "type": "`$ARRAY`",
                      "kind": "query",
                      "example": "toshio",
                    },
                  ],
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
                    "user",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
