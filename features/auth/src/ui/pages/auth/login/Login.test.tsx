import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import { loginStories } from '#stories'

const { Default } = composeStories(loginStories)

describe('Login', () => {
  it('renders correctly', () => {
    render(<Default />)

    const loginPage = screen.getByTestId('login-page')
    expect(loginPage).toBeInTheDocument()
  })
})
