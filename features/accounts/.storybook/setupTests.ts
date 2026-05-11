import { spyOn } from 'storybook/test'
import { setProjectAnnotations } from '@storybook/react'
import * as globalStorybookConfig from './preview'

setProjectAnnotations([
  globalStorybookConfig,
  {
    async beforeEach() {
      spyOn(console, 'log').mockName('console.log')
      spyOn(console, 'warn').mockName('console.warn')
      spyOn(console, 'error').mockName('console.error')
    },
  },
])
