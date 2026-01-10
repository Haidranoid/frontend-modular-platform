import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { createAppStory } from '@webapp/shared'
import { authMswHandlers } from '@webapp/auth'
import { accountsMswHandlers } from '@webapp/users'
import { App } from '../../app'

const { me_200_handler } = authMswHandlers

const { fetchAccountById_200_handler, fetchAccounts_200_handler } = accountsMswHandlers

const meta = {
  title: 'App/Webapp',
  component: App,
  parameters: {
    msw: {
      handlers: [me_200_handler, fetchAccountById_200_handler, fetchAccounts_200_handler],
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
