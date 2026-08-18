
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'FedoraMessaging',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://apps.fedoraproject.org/datagrepper/v2",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      search: {
      },

    }
  }


  entity = {
    "search": {
      "fields": [
        {
          "name": "category",
          "type": "`$STRING`"
        },
        {
          "name": "i",
          "type": "`$INTEGER`"
        },
        {
          "name": "msg",
          "type": "`$OBJECT`"
        },
        {
          "name": "msg_id",
          "type": "`$STRING`"
        },
        {
          "name": "timestamp",
          "type": "`$NUMBER`"
        },
        {
          "name": "topic",
          "type": "`$STRING`"
        },
        {
          "name": "username",
          "type": "`$STRING`"
        }
      ],
      "name": "search",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "agent",
                    "orig": "agent",
                    "type": "`$ARRAY`"
                  },
                  {
                    "example": "bodhi",
                    "kind": "query",
                    "name": "category",
                    "orig": "category",
                    "type": "`$ARRAY`"
                  },
                  {
                    "example": 172800,
                    "kind": "query",
                    "name": "delta",
                    "orig": "delta",
                    "type": "`$NUMBER`"
                  },
                  {
                    "example": "2021-06-25T06:11:40+00:00",
                    "kind": "query",
                    "name": "end",
                    "orig": "end",
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "not_agent",
                    "orig": "not_agent",
                    "type": "`$ARRAY`"
                  },
                  {
                    "example": "buildsys",
                    "kind": "query",
                    "name": "not_category",
                    "orig": "not_category",
                    "type": "`$ARRAY`"
                  },
                  {
                    "kind": "query",
                    "name": "not_package",
                    "orig": "not_package",
                    "type": "`$ARRAY`"
                  },
                  {
                    "kind": "query",
                    "name": "not_topic",
                    "orig": "not_topic",
                    "type": "`$ARRAY`"
                  },
                  {
                    "kind": "query",
                    "name": "not_user",
                    "orig": "not_user",
                    "type": "`$ARRAY`"
                  },
                  {
                    "example": "desc",
                    "kind": "query",
                    "name": "order",
                    "orig": "order",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "nethack",
                    "kind": "query",
                    "name": "package",
                    "orig": "package",
                    "type": "`$ARRAY`"
                  },
                  {
                    "example": 2,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "rows_per_page",
                    "orig": "rows_per_page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "2021-06-25T06:11:39+00:00",
                    "kind": "query",
                    "name": "start",
                    "orig": "start",
                    "type": "`$ANY`"
                  },
                  {
                    "kind": "query",
                    "name": "topic",
                    "orig": "topic",
                    "type": "`$ARRAY`"
                  },
                  {
                    "example": "toshio",
                    "kind": "query",
                    "name": "user",
                    "orig": "user",
                    "type": "`$ARRAY`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/search",
              "parts": [
                "search"
              ],
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
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

