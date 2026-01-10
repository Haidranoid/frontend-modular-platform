import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './Loading.stories'

const { Default } = composeStories(stories)

describe('Loading', () => {
  it('renders correctly', () => {
    render(<Default />)
    const loading = screen.getByRole('status')
    expect(loading).toBeInTheDocument()
  })
})
