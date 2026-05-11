import type { Meta } from '@storybook/react-webpack5'
import { createAppStory } from '@webapp/shared'
import { authMswHandlers } from '@webapp/auth'
import { accountsMswHandlers } from '@webapp/accounts'
import { App } from '../../app'

type WebAppType = typeof App

const { me_200_handler } = authMswHandlers
const { fetchAccountById_200_handler, fetchAccounts_200_handler } = accountsMswHandlers

const meta = {
  title: 'App/Webapp',
  component: App,
  parameters: {},
} as Meta<WebAppType>

export default meta

const createWebAppStory = createAppStory<WebAppType>

export const Default = createWebAppStory({
  parameters: {
    msw: {
      handlers: [me_200_handler, fetchAccountById_200_handler, fetchAccounts_200_handler],
    },
  },
})
