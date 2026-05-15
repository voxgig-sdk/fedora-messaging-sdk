# FedoraMessaging SDK utility: make_context
require_relative '../core/context'
module FedoraMessagingUtilities
  MakeContext = ->(ctxmap, basectx) {
    FedoraMessagingContext.new(ctxmap, basectx)
  }
end
