import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './Home.stories'

const { Default } = composeStories(stories)

describe('Home', () => {
  it('renders correctly', () => {
    render(<Default />)

    const homePage = screen.getByTestId('users-home-page')
    expect(homePage).toBeInTheDocument()
  })
})
