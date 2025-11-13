import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { createStory } from '@webapp/shared'
import { signup_200 } from "#msw-handlers";
import { Signup } from './Signup'

const meta = {
  title: 'Pages/Signup',
  component: Signup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Signup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = createStory({
  parameters: {
    withMemoryRouter: {
      initialPath: '/auth/signup'
    },
    msw: { handlers: [signup_200] }
  }
})
