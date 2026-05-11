import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './StorybookContextBox.stories'

const { Default } = composeStories(stories)

describe.skip('StorybookContextBox', () => {
  beforeAll(() => {
    const originalWarn = console.warn
    jest.spyOn(console, 'warn').mockImplementation((msg, ...args) => {
      if (
        typeof msg === 'string' &&
        msg.includes('Selector unknown returned the root state')
      ) {
        return // ignora solo ese warning
      }
      return originalWarn(msg, ...args)
    })
  })

  it('should mount the component without crashing', () => {
    render(<Default />)
    const storybookContextBox = screen.getByTestId('storybook-context-box')
    expect(storybookContextBox).toBeInTheDocument()
  })
})
