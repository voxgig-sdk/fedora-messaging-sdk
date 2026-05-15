# ProjectName SDK exists test

import pytest
from fedoramessaging_sdk import FedoraMessagingSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = FedoraMessagingSDK.test(None, None)
        assert testsdk is not None
