import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './Button.stories'

const { Primary } = composeStories(stories)

describe('Button', () => {
  it('renders correctly', () => {
    render(<Primary />)

    const button = screen.getByRole('button', { name: /button/i })
    expect(button).toBeInTheDocument()
  })
})
