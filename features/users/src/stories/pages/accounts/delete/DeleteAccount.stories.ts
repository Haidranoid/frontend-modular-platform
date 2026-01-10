import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { createIntegrationStory } from '@webapp/shared'
import { deleteAccount_200_handler, fetchAccountById_200_handler } from '#msw-handlers'
import { DeleteAccount } from '#ui'

const meta = {
  title: 'Pages/DeleteAccount',
  component: DeleteAccount,
  parameters: {
    withRouter: {
      routePath: '/accounts/:accountId/delete',
      initialPath: '/accounts/1234567890/delete',
    },
  },
} satisfies Meta<typeof DeleteAccount>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = createIntegrationStory<Story>({
  parameters: {
    msw: {
      handlers: [deleteAccount_200_handler, fetchAccountById_200_handler],
    },
  },
})
