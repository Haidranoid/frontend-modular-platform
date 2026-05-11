import type { Meta } from '@storybook/react-webpack5'
import { createComponentStory } from '#testing-utils'
import { Portal } from '#ui/components/portal'

type PortalType = typeof Portal

const meta = {
  title: 'Components/Portal',
  component: Portal,
  argTypes: {},
  args: {},
} as Meta<PortalType>

export default meta

const createPortalStory = createComponentStory<PortalType>

export const Default = createPortalStory({
  args: {
    children: 'portal test',
    container: document.body,
  },
})
