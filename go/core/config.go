package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "FedoraMessaging",
			"slug": "fedora-messaging",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://apps.fedoraproject.org/datagrepper/v2",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"search": map[string]any{},
			},
		},
		"entity": map[string]any{
			"search": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "category",
						"short": "Message category",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "i",
						"short": "Message ID",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "msg",
						"short": "Message body/payload",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "msg_id",
						"short": "Unique message identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "timestamp",
						"short": "Message timestamp",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "topic",
						"short": "Message topic",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "username",
						"short": "Username associated with the message",
						"type": "`$STRING`",
					},
				},
				"name": "search",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "agent",
											"orig": "agent",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": "bodhi",
											"kind": "query",
											"name": "category",
											"orig": "category",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": 172800,
											"kind": "query",
											"name": "delta",
											"orig": "delta",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"example": "2021-06-25T06:11:40+00:00",
											"kind": "query",
											"name": "end",
											"orig": "end",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "not_agent",
											"orig": "not_agent",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": "buildsys",
											"kind": "query",
											"name": "not_category",
											"orig": "not_category",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "not_package",
											"orig": "not_package",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "not_topic",
											"orig": "not_topic",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"kind": "query",
											"name": "not_user",
											"orig": "not_user",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": "desc",
											"kind": "query",
											"name": "order",
											"orig": "order",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "nethack",
											"kind": "query",
											"name": "package",
											"orig": "package",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": 2,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "rows_per_page",
											"orig": "rows_per_page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "2021-06-25T06:11:39+00:00",
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "topic",
											"orig": "topic",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": "toshio",
											"kind": "query",
											"name": "user",
											"orig": "user",
											"type": "`$ARRAY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/search",
								"parts": []any{
									"search",
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
