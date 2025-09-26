import { composeStories } from '@storybook/react'
import { render, screen } from '@webapp/shared'
import * as stories from './Login.stories'

const { Default } = composeStories(stories)

describe('Login', () => {
  it('renders correctly', () => {
    render(<Default />)

    const loginPage = screen.getByTestId('login-page')
    expect(loginPage).toBeInTheDocument()
  })
})
