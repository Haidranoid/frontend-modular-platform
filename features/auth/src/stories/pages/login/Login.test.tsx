import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './Login.stories'

const { Default } = composeStories(stories)

describe('Login', () => {
  it('renders correctly', async () => {
    render(<Default />)

    const loginPage = await screen.findByTestId('login-page')
    expect(loginPage).toBeInTheDocument()
  })
})
