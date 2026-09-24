
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { FedoraMessagingSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = FedoraMessagingSDK.test()
    equal(testsdk instanceof FedoraMessagingSDK, true,
      'FedoraMessagingSDK.test() must return a client synchronously')
  })

})
