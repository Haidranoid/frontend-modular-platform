import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './Loading.stories'

const { Primary } = composeStories(stories)

describe('Loading', () => {
  it('should mount the component without crashing', () => {
    render(<Primary />)
    const loading = screen.getByRole('status')
    expect(loading).toBeInTheDocument()
  })
})
