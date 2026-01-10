import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './Home.stories'

const { Default } = composeStories(stories)

describe('Home', () => {
  it('renders correctly', async () => {
    render(<Default />)

    const homePage = await screen.findByTestId('accounts-home-page')
    expect(homePage).toBeInTheDocument()
  })
})
