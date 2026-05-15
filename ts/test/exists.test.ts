
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { FedoraMessagingSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await FedoraMessagingSDK.test()
    equal(null !== testsdk, true)
  })

})
