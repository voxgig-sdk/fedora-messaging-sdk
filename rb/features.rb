# FedoraMessaging SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module FedoraMessagingFeatures
  def self.make_feature(name)
    case name
    when "base"
      FedoraMessagingBaseFeature.new
    when "test"
      FedoraMessagingTestFeature.new
    else
      FedoraMessagingBaseFeature.new
    end
  end
end
