import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { createIntegrationStory } from '@webapp/shared'
import { updateAccount_200_handler, fetchAccountById_200_handler } from '#msw-handlers'
import { UpdateAccount } from '#ui'

const meta = {
  title: 'Pages/UpdateAccount',
  component: UpdateAccount,
  parameters: {
    withRouter: {
      routePath: '/accounts/:accountId/update',
      initialPath: '/accounts/1234567890/update',
    },
  },
} satisfies Meta<typeof UpdateAccount>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = createIntegrationStory<Story>({
  parameters: {
    msw: {
      handlers: [updateAccount_200_handler, fetchAccountById_200_handler],
    },
  },
})
