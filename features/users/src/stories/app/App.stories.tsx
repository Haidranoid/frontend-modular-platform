import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { createAppStory } from '@webapp/shared'
import {
  fetchAccountById_200_handler,
  fetchAccounts_200_handler,
  createAccount_200_handler,
  updateAccount_200_handler,
  deleteAccount_200_handler,
} from '#msw-handlers'
import { App } from '#app'

const meta = {
  title: 'App/Accounts',
  component: App,
  parameters: {
    msw: {
      handlers: [
        fetchAccounts_200_handler,
        fetchAccountById_200_handler,
        createAccount_200_handler,
        updateAccount_200_handler,
        deleteAccount_200_handler,
      ],
    },
  },
} satisfies Meta<typeof App>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = createAppStory<Story>({
  parameters: {
    initialPath: '/accounts',
  },
})
