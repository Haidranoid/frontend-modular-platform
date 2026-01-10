import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './Input.stories'

const { Primary } = composeStories(stories)

describe('Input', () => {
  it('renders correctly', () => {
    render(<Primary />)
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
  })
})
