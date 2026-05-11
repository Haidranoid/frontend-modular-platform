import type { Meta } from '@storybook/react-webpack5'
import { createIntegrationStory } from '@webapp/shared'
import { authMswHandlers } from '@webapp/auth'
import { accountsMswHandlers } from '#msw'
import { accountsStore } from '#app'
import { DeleteAccount } from '#ui'

type DeleteAccountType = typeof DeleteAccount

const { deleteAccount_200_handler, fetchAccountById_200_handler } = accountsMswHandlers
const { me_200_handler } = authMswHandlers

const meta = {
  title: 'Pages/DeleteAccount',
  component: DeleteAccount,
  parameters: {
    withRedux: {
      store: accountsStore,
    },
    withRouter: {
      routePath: '/accounts/:accountId/delete',
      initialPath: '/accounts/1234567890/delete',
    },
  },
} as Meta<DeleteAccountType>

export default meta

const createDeleteAccountStory = createIntegrationStory<DeleteAccountType>

export const Default = createDeleteAccountStory({
  parameters: {
    msw: {
      handlers: [deleteAccount_200_handler, fetchAccountById_200_handler, me_200_handler],
    },
  },
})
