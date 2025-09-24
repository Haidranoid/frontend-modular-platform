import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { StorybookApp } from '../App'
import { StorybookContextBox } from "@webapp/shared";
import { Fragment } from "react";

const meta = {
  title: 'App/Auth',
  component: StorybookApp,
  parameters: {
    layout: 'fullscreen',
    disableGlobalDecorators: true,
  },
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => (
      <Fragment>
        <Story />
        {/*<StorybookContextBox
          title="App Context"
          items={[]}
          domElement={document.getElementsByTagName('body')[0]}
        />*/}
      </Fragment>
    ),
  ],
} satisfies Meta<typeof StorybookApp>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
