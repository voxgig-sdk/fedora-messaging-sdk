-- ProjectName SDK configuration

local function make_config()
  return {
    main = {
      name = "FedoraMessaging",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://apps.fedoraproject.org/datagrepper/v2",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["search"] = {},
      },
    },
    entity = {
      ["search"] = {
        ["fields"] = {
          {
            ["name"] = "category",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 0,
          },
          {
            ["name"] = "i",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["active"] = true,
            ["index$"] = 1,
          },
          {
            ["name"] = "msg",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["active"] = true,
            ["index$"] = 2,
          },
          {
            ["name"] = "msg_id",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 3,
          },
          {
            ["name"] = "timestamp",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["active"] = true,
            ["index$"] = 4,
          },
          {
            ["name"] = "topic",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 5,
          },
          {
            ["name"] = "username",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["active"] = true,
            ["index$"] = 6,
          },
        },
        ["name"] = "search",
        ["op"] = {
          ["list"] = {
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "agent",
                      ["orig"] = "agent",
                      ["reqd"] = false,
                      ["type"] = "`$ARRAY`",
                      ["active"] = true,
                    },
                    {
                      ["example"] = "bodhi",
                      ["kind"] = "query",
                      ["name"] = "category",
                      ["orig"] = "category",
                      ["reqd"] = false,
                      ["type"] = "`$ARRAY`",
                      ["active"] = true,
                    },
                    {
                      ["example"] = 172800,
                      ["kind"] = "query",
                      ["name"] = "delta",
                      ["orig"] = "delta",
                      ["reqd"] = false,
                      ["type"] = "`$NUMBER`",
                      ["active"] = true,
                    },
                    {
                      ["example"] = "2021-06-25T06:11:40+00:00",
                      ["kind"] = "query",
                      ["name"] = "end",
                      ["orig"] = "end",
                      ["reqd"] = false,
                      ["type"] = "`$ANY`",
                      ["active"] = true,
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "not_agent",
                      ["orig"] = "not_agent",
                      ["reqd"] = false,
                      ["type"] = "`$ARRAY`",
                      ["active"] = true,
                    },
                    {
                      ["example"] = "buildsys",
                      ["kind"] = "query",
                      ["name"] = "not_category",
                      ["orig"] = "not_category",
                      ["reqd"] = false,
                      ["type"] = "`$ARRAY`",
                      ["active"] = true,
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "not_package",
                      ["orig"] = "not_package",
                      ["reqd"] = false,
                      ["type"] = "`$ARRAY`",
                      ["active"] = true,
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "not_topic",
                      ["orig"] = "not_topic",
                      ["reqd"] = false,
                      ["type"] = "`$ARRAY`",
                      ["active"] = true,
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "not_user",
                      ["orig"] = "not_user",
                      ["reqd"] = false,
                      ["type"] = "`$ARRAY`",
                      ["active"] = true,
                    },
                    {
                      ["example"] = "desc",
                      ["kind"] = "query",
                      ["name"] = "order",
                      ["orig"] = "order",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                      ["active"] = true,
                    },
                    {
                      ["example"] = "nethack",
                      ["kind"] = "query",
                      ["name"] = "package",
                      ["orig"] = "package",
                      ["reqd"] = false,
                      ["type"] = "`$ARRAY`",
                      ["active"] = true,
                    },
                    {
                      ["example"] = 2,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                      ["active"] = true,
                    },
                    {
                      ["example"] = 1,
                      ["kind"] = "query",
                      ["name"] = "rows_per_page",
                      ["orig"] = "rows_per_page",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                      ["active"] = true,
                    },
                    {
                      ["example"] = "2021-06-25T06:11:39+00:00",
                      ["kind"] = "query",
                      ["name"] = "start",
                      ["orig"] = "start",
                      ["reqd"] = false,
                      ["type"] = "`$ANY`",
                      ["active"] = true,
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "topic",
                      ["orig"] = "topic",
                      ["reqd"] = false,
                      ["type"] = "`$ARRAY`",
                      ["active"] = true,
                    },
                    {
                      ["example"] = "toshio",
                      ["kind"] = "query",
                      ["name"] = "user",
                      ["orig"] = "user",
                      ["reqd"] = false,
                      ["type"] = "`$ARRAY`",
                      ["active"] = true,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/search",
                ["parts"] = {
                  "search",
                },
                ["select"] = {
                  ["exist"] = {
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
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["active"] = true,
                ["index$"] = 0,
              },
            },
            ["input"] = "data",
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
