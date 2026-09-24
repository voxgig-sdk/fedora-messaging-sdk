// Typed models for the FedoraMessaging SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Search {
  category?: string
  i?: number
  msg?: Record<string, any>
  msg_id?: string
  timestamp?: number
  topic?: string
  username?: string
}

export interface SearchListMatch {
  agent?: any[]
  category?: any[]
  delta?: number
  end?: any
  not_agent?: any[]
  not_category?: any[]
  not_package?: any[]
  not_topic?: any[]
  not_user?: any[]
  order?: string
  package?: any[]
  page?: number
  rows_per_page?: number
  start?: any
  topic?: any[]
  user?: any[]
}

