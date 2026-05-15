
import { Context } from './Context'


class FedoraMessagingError extends Error {

  isFedoraMessagingError = true

  sdk = 'FedoraMessaging'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  FedoraMessagingError
}

