# frozen_string_literal: true

# Typed models for the FedoraMessaging SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Search entity data model.
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] i
#   @return [Integer, nil]
#
# @!attribute [rw] msg
#   @return [Hash, nil]
#
# @!attribute [rw] msg_id
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [Float, nil]
#
# @!attribute [rw] topic
#   @return [String, nil]
#
# @!attribute [rw] username
#   @return [String, nil]
Search = Struct.new(
  :category,
  :i,
  :msg,
  :msg_id,
  :timestamp,
  :topic,
  :username,
  keyword_init: true
)

# Request payload for Search#list.
#
# @!attribute [rw] agent
#   @return [Array, nil]
#
# @!attribute [rw] category
#   @return [Array, nil]
#
# @!attribute [rw] delta
#   @return [Float, nil]
#
# @!attribute [rw] end
#   @return [Object, nil]
#
# @!attribute [rw] not_agent
#   @return [Array, nil]
#
# @!attribute [rw] not_category
#   @return [Array, nil]
#
# @!attribute [rw] not_package
#   @return [Array, nil]
#
# @!attribute [rw] not_topic
#   @return [Array, nil]
#
# @!attribute [rw] not_user
#   @return [Array, nil]
#
# @!attribute [rw] order
#   @return [String, nil]
#
# @!attribute [rw] package
#   @return [Array, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] rows_per_page
#   @return [Integer, nil]
#
# @!attribute [rw] start
#   @return [Object, nil]
#
# @!attribute [rw] topic
#   @return [Array, nil]
#
# @!attribute [rw] user
#   @return [Array, nil]
SearchListMatch = Struct.new(
  :agent,
  :category,
  :delta,
  :end,
  :not_agent,
  :not_category,
  :not_package,
  :not_topic,
  :not_user,
  :order,
  :package,
  :page,
  :rows_per_page,
  :start,
  :topic,
  :user,
  keyword_init: true
)

