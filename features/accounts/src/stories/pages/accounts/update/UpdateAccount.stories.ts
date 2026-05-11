import type { Meta } from '@storybook/react-webpack5'
import { createIntegrationStory } from '@webapp/shared'
import { authMswHandlers } from '@webapp/auth'
import { accountsMswHandlers } from '#msw'
import { accountsStore } from '#app'
import { UpdateAccount } from '#ui'

type UpdateAccountType = typeof UpdateAccount

const { updateAccount_200_handler, fetchAccountById_200_handler } = accountsMswHandlers
const { me_200_handler } = authMswHandlers

const meta = {
  title: 'Pages/UpdateAccount',
  component: UpdateAccount,
  parameters: {
    withRedux: {
      store: accountsStore,
    },
    withRouter: {
      routePath: '/accounts/:accountId/update',
      initialPath: '/accounts/1234567890/update',
    },
  },
} as Meta<UpdateAccountType>

export default meta

const createUpdateAccountStory = createIntegrationStory<UpdateAccountType>

export const Default = createUpdateAccountStory({
  parameters: {
    msw: {
      handlers: [updateAccount_200_handler, fetchAccountById_200_handler, me_200_handler],
    },
  },
})
