import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { createIntegrationStory } from '@webapp/shared'
import { createAccount_200_handler } from '#msw-handlers'
import { CreateAccount } from '#ui'

const meta = {
  title: 'Pages/CreateAccount',
  component: CreateAccount,
  parameters: {
    withRouter: {
      routePath: '/accounts/create',
      initialPath: '/accounts/create',
    },
  },
} satisfies Meta<typeof CreateAccount>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = createIntegrationStory<Story>({
  parameters: {
    msw: { handlers: [createAccount_200_handler] },
  },
})
