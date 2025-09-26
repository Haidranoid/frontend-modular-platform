import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './Button.stories'

const { Primary } = composeStories(stories, {
  decorators: [
    // Decorators defined here will be added to all composed stories from this function
  ],
  globalTypes: {
    // Override globals for all composed stories from this function
  },
  parameters: {
    // Override parameters for all composed stories from this function
  },
})

describe('Button', () => {
  it('renders correctly', () => {
    render(<Primary />)

    const button = screen.getByRole('button', { name: /button/i })
    expect(button).toBeInTheDocument()
  })
})
