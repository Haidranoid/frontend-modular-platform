import type { Meta } from '@storybook/react-webpack5'
import { createIntegrationStory } from '@webapp/shared'
import { authMswHandlers } from '@webapp/auth'
import { accountsMswHandlers } from '#msw'
import { accountsStore } from '#app'
import { Home } from '#ui'

type HomeType = typeof Home

const { fetchAccounts_200_handler } = accountsMswHandlers
const { me_200_handler } = authMswHandlers

const meta = {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    withRedux: {
      store: accountsStore,
    },
    withRouter: {
      routePath: '/accounts',
      initialPath: '/accounts',
    },
  },
} as Meta<HomeType>

export default meta

const createHomeStory = createIntegrationStory<HomeType>

export const Default = createHomeStory({
  parameters: {
    msw: { handlers: [fetchAccounts_200_handler, me_200_handler] },
  },
})
