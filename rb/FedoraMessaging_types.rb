# frozen_string_literal: true

# Typed models for the FedoraMessaging SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
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

# Match filter for Search#list (any subset of Search fields).
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
SearchListMatch = Struct.new(
  :category,
  :i,
  :msg,
  :msg_id,
  :timestamp,
  :topic,
  :username,
  keyword_init: true
)

