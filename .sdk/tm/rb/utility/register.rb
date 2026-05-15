# FedoraMessaging SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

FedoraMessagingUtility.registrar = ->(u) {
  u.clean = FedoraMessagingUtilities::Clean
  u.done = FedoraMessagingUtilities::Done
  u.make_error = FedoraMessagingUtilities::MakeError
  u.feature_add = FedoraMessagingUtilities::FeatureAdd
  u.feature_hook = FedoraMessagingUtilities::FeatureHook
  u.feature_init = FedoraMessagingUtilities::FeatureInit
  u.fetcher = FedoraMessagingUtilities::Fetcher
  u.make_fetch_def = FedoraMessagingUtilities::MakeFetchDef
  u.make_context = FedoraMessagingUtilities::MakeContext
  u.make_options = FedoraMessagingUtilities::MakeOptions
  u.make_request = FedoraMessagingUtilities::MakeRequest
  u.make_response = FedoraMessagingUtilities::MakeResponse
  u.make_result = FedoraMessagingUtilities::MakeResult
  u.make_point = FedoraMessagingUtilities::MakePoint
  u.make_spec = FedoraMessagingUtilities::MakeSpec
  u.make_url = FedoraMessagingUtilities::MakeUrl
  u.param = FedoraMessagingUtilities::Param
  u.prepare_auth = FedoraMessagingUtilities::PrepareAuth
  u.prepare_body = FedoraMessagingUtilities::PrepareBody
  u.prepare_headers = FedoraMessagingUtilities::PrepareHeaders
  u.prepare_method = FedoraMessagingUtilities::PrepareMethod
  u.prepare_params = FedoraMessagingUtilities::PrepareParams
  u.prepare_path = FedoraMessagingUtilities::PreparePath
  u.prepare_query = FedoraMessagingUtilities::PrepareQuery
  u.result_basic = FedoraMessagingUtilities::ResultBasic
  u.result_body = FedoraMessagingUtilities::ResultBody
  u.result_headers = FedoraMessagingUtilities::ResultHeaders
  u.transform_request = FedoraMessagingUtilities::TransformRequest
  u.transform_response = FedoraMessagingUtilities::TransformResponse
}
