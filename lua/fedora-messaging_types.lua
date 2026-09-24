-- Typed models for the FedoraMessaging SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Search
---@field category? string
---@field i? number
---@field msg? table
---@field msg_id? string
---@field timestamp? number
---@field topic? string
---@field username? string

---@class SearchListMatch
---@field agent? table
---@field category? table
---@field delta? number
---@field end? any
---@field not_agent? table
---@field not_category? table
---@field not_package? table
---@field not_topic? table
---@field not_user? table
---@field order? string
---@field package? table
---@field page? number
---@field rows_per_page? number
---@field start? any
---@field topic? table
---@field user? table

local M = {}

return M
