# FedoraMessaging SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module FedoraMessagingFeatures
  def self.make_feature(name)
    case name
    when "base"
      FedoraMessagingBaseFeature.new
    when "ratelimit"
      FedoraMessagingRatelimitFeature.new
    when "retry"
      FedoraMessagingRetryFeature.new
    when "test"
      FedoraMessagingTestFeature.new
    when "timeout"
      FedoraMessagingTimeoutFeature.new
    else
      FedoraMessagingBaseFeature.new
    end
  end
end
