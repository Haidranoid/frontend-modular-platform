import type { Meta } from '@storybook/react-webpack5'
import { createIntegrationStory } from '@webapp/shared'
import { authMswHandlers } from '#msw'
import { authStore } from '#app'
import { Home } from '#ui'

type HomeType = typeof Home

const { me_200_handler } = authMswHandlers

const meta = {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    withRedux: {
      store: authStore,
    },
    withRouter: {
      routePath: '/auth',
      initialPath: '/auth',
    },
  },
} as Meta<HomeType>

export default meta

const createHomeStory = createIntegrationStory<HomeType>

export const Default = createHomeStory({
  parameters: {
    msw: { handlers: [me_200_handler] },
  },
})
