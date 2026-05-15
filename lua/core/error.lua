-- FedoraMessaging SDK error

local FedoraMessagingError = {}
FedoraMessagingError.__index = FedoraMessagingError


function FedoraMessagingError.new(code, msg, ctx)
  local self = setmetatable({}, FedoraMessagingError)
  self.is_sdk_error = true
  self.sdk = "FedoraMessaging"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function FedoraMessagingError:error()
  return self.msg
end


function FedoraMessagingError:__tostring()
  return self.msg
end


return FedoraMessagingError
