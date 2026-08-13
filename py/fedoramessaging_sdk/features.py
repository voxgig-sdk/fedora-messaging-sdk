# FedoraMessaging SDK feature factory

from fedoramessaging_sdk.feature.base_feature import FedoraMessagingBaseFeature
from fedoramessaging_sdk.feature.test_feature import FedoraMessagingTestFeature


def _make_feature(name):
    features = {
        "base": lambda: FedoraMessagingBaseFeature(),
        "test": lambda: FedoraMessagingTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
