-- Typed models for the FedoraMessaging SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
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
---@field category? string
---@field i? number
---@field msg? table
---@field msg_id? string
---@field timestamp? number
---@field topic? string
---@field username? string

local M = {}

return M
