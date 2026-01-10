import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { createIntegrationStory } from '@webapp/shared'
import { me_200_handler } from '#msw-handlers'
import { Home } from '#ui'

const meta = {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    withRouter: {
      routePath: '/auth',
      initialPath: '/auth',
    },
    msw: { handlers: [me_200_handler] },
  },
} satisfies Meta<typeof Home>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = createIntegrationStory<Story>({})
