import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import { signupStories } from '#stories'

const { Default } = composeStories(signupStories)

describe('Signup', () => {
  it('renders correctly', () => {
    render(<Default />)

    const signupPage = screen.getByTestId('signup-page')
    expect(signupPage).toBeInTheDocument()
  })
})
