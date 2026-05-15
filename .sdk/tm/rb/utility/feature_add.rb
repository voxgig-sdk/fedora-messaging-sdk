# FedoraMessaging SDK utility: feature_add
module FedoraMessagingUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
