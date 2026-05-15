package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "FedoraMessaging",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://apps.fedoraproject.org/datagrepper/v2",
			"auth": map[string]any{
				"prefix": "Bearer",
			},
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
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "i",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "msg",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "msg_id",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "timestamp",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "topic",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "username",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 6,
					},
				},
				"name": "search",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "agent",
											"orig": "agent",
											"reqd": false,
											"type": "`$ARRAY`",
											"active": true,
										},
										map[string]any{
											"example": "bodhi",
											"kind": "query",
											"name": "category",
											"orig": "category",
											"reqd": false,
											"type": "`$ARRAY`",
											"active": true,
										},
										map[string]any{
											"example": 172800,
											"kind": "query",
											"name": "delta",
											"orig": "delta",
											"reqd": false,
											"type": "`$NUMBER`",
											"active": true,
										},
										map[string]any{
											"example": "2021-06-25T06:11:40+00:00",
											"kind": "query",
											"name": "end",
											"orig": "end",
											"reqd": false,
											"type": "`$ANY`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "not_agent",
											"orig": "not_agent",
											"reqd": false,
											"type": "`$ARRAY`",
											"active": true,
										},
										map[string]any{
											"example": "buildsys",
											"kind": "query",
											"name": "not_category",
											"orig": "not_category",
											"reqd": false,
											"type": "`$ARRAY`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "not_package",
											"orig": "not_package",
											"reqd": false,
											"type": "`$ARRAY`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "not_topic",
											"orig": "not_topic",
											"reqd": false,
											"type": "`$ARRAY`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "not_user",
											"orig": "not_user",
											"reqd": false,
											"type": "`$ARRAY`",
											"active": true,
										},
										map[string]any{
											"example": "desc",
											"kind": "query",
											"name": "order",
											"orig": "order",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": "nethack",
											"kind": "query",
											"name": "package",
											"orig": "package",
											"reqd": false,
											"type": "`$ARRAY`",
											"active": true,
										},
										map[string]any{
											"example": 2,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "rows_per_page",
											"orig": "rows_per_page",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"example": "2021-06-25T06:11:39+00:00",
											"kind": "query",
											"name": "start",
											"orig": "start",
											"reqd": false,
											"type": "`$ANY`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "topic",
											"orig": "topic",
											"reqd": false,
											"type": "`$ARRAY`",
											"active": true,
										},
										map[string]any{
											"example": "toshio",
											"kind": "query",
											"name": "user",
											"orig": "user",
											"reqd": false,
											"type": "`$ARRAY`",
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
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
