# FedoraMessaging SDK utility: prepare_body
module FedoraMessagingUtilities
  PrepareBody = ->(ctx) {
    ctx.op.input == "data" ? ctx.utility.transform_request.call(ctx) : nil
  }
end
