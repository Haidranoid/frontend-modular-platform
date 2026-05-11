import type { Meta } from '@storybook/react-webpack5'
import { createAppStory } from '@webapp/shared'
import { authMswHandlers } from '@webapp/auth'
import { accountsMswHandlers } from '#msw'
import { App } from '#app'

type AccountsAppType = typeof App

const {
  fetchAccounts_200_handler,
  fetchAccountById_200_handler,
  createAccount_200_handler,
  updateAccount_200_handler,
  deleteAccount_200_handler,
} = accountsMswHandlers
const { me_200_handler } = authMswHandlers

const meta = {
  title: 'App/Accounts',
  component: App,
  parameters: {},
} as Meta<AccountsAppType>

export default meta

const createAccountsAppStory = createAppStory<AccountsAppType>

export const Default = createAccountsAppStory({
  parameters: {
    msw: {
      handlers: [
        me_200_handler,
        fetchAccounts_200_handler,
        fetchAccountById_200_handler,
        createAccount_200_handler,
        updateAccount_200_handler,
        deleteAccount_200_handler,
      ],
    },
  },
})
