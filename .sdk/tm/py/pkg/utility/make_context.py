# FedoraMessaging SDK utility: make_context

from projectname_sdk.core.context import FedoraMessagingContext


def make_context_util(ctxmap, basectx):
    return FedoraMessagingContext(ctxmap, basectx)
