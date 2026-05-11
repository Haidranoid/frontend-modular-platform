import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { createComponentStory } from '#testing-utils'
import { ContextBox } from '#ui'

type ContextBoxType = typeof ContextBox

const meta = {
  title: 'Components/ContextBox',
  component: ContextBox,
  argTypes: {},
  args: {},
} as Meta<ContextBoxType>

export default meta

const createContextBoxStory = createComponentStory<ContextBoxType>

const Default = createContextBoxStory({
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
