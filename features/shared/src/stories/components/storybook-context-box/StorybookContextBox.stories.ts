import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { createComponentStory } from '#testing-utils'
import { ContextBox } from '#ui'

const meta = {
  title: 'Components/ContextBox',
  component: ContextBox,
  argTypes: {},
  args: {},
} satisfies Meta<typeof ContextBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = createComponentStory<Story>({
  args: {
    title: 'App Context',
    reducerId: '',
    items: [],
    config: {
      location: {
        x: 0,
        y: 200,
      },
      size: {
        width: 300,
        height: 500,
      },
    },
    domElement: document.getElementsByTagName('body')[0],
  },
})
