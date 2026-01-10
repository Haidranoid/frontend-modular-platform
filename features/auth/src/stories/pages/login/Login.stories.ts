import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { createIntegrationStory } from '@webapp/shared'
import { me_200_handler } from '#msw-handlers'
import { Login } from '#ui'

const meta = {
  title: 'Pages/Login',
  component: Login,
  parameters: {
    withRouter: {
      routePath: '/auth/login',
      initialPath: '/auth/login',
    },
  },
} satisfies Meta<typeof Login>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = createIntegrationStory<Story>({
  parameters: {
    msw: { handlers: [me_200_handler] },
  },
})
