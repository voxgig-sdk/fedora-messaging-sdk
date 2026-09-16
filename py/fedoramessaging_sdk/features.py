# FedoraMessaging SDK feature factory

from fedoramessaging_sdk.feature.base_feature import FedoraMessagingBaseFeature
from fedoramessaging_sdk.feature.ratelimit_feature import FedoraMessagingRatelimitFeature
from fedoramessaging_sdk.feature.retry_feature import FedoraMessagingRetryFeature
from fedoramessaging_sdk.feature.test_feature import FedoraMessagingTestFeature
from fedoramessaging_sdk.feature.timeout_feature import FedoraMessagingTimeoutFeature


_FEATURES = {
    "base": lambda: FedoraMessagingBaseFeature(),
    "ratelimit": lambda: FedoraMessagingRatelimitFeature(),
    "retry": lambda: FedoraMessagingRetryFeature(),
    "test": lambda: FedoraMessagingTestFeature(),
    "timeout": lambda: FedoraMessagingTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
