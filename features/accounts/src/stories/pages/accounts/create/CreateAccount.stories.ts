import type { Meta } from '@storybook/react-webpack5'
import { createIntegrationStory } from '@webapp/shared'
import { accountsMswHandlers } from '#msw'
import { accountsStore } from '#app'
import { CreateAccount } from '#ui'

type CreateAccountType = typeof CreateAccount

const { createAccount_200_handler } = accountsMswHandlers

const meta = {
  title: 'Pages/CreateAccount',
  component: CreateAccount,
  parameters: {
    withRedux: {
      store: accountsStore,
    },
    withRouter: {
      routePath: '/accounts/create',
      initialPath: '/accounts/create',
    },
  },
} as Meta<CreateAccountType>

export default meta

const createCreateAccountStory = createIntegrationStory<CreateAccountType>

export const Default = createCreateAccountStory({
  parameters: {
    msw: { handlers: [createAccount_200_handler] },
  },
})
