# FedoraMessaging SDK utility: make_context

from fedoramessaging_sdk.core.context import FedoraMessagingContext


def make_context_util(ctxmap, basectx):
    return FedoraMessagingContext(ctxmap, basectx)
