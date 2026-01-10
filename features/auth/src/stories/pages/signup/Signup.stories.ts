import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { createIntegrationStory } from '@webapp/shared'
import { me_200_handler } from '#msw-handlers'
import { Signup } from '#ui'

const meta = {
  title: 'Pages/Signup',
  component: Signup,
  parameters: {
    withRouter: {
      routePath: '/auth/signup',
      initialPath: '/auth/signup',
    },
    msw: { handlers: [me_200_handler] },
  },
} satisfies Meta<typeof Signup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = createIntegrationStory<Story>({})
