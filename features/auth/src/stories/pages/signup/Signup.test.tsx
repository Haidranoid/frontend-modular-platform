import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './Signup.stories'

const { Default } = composeStories(stories)

describe('Signup', () => {
  it('renders correctly', async () => {
    render(<Default />)

    const signupPage = await screen.findByTestId('signup-page')
    expect(signupPage).toBeInTheDocument()
  })
})
