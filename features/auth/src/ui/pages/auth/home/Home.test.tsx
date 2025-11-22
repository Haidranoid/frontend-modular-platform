import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import { homeStories } from '#stories'

const { Default } = composeStories(homeStories)

describe('Home', () => {
  it('renders correctly', () => {
    render(<Default />)

    const homePage = screen.getByTestId('auth-home-page')
    expect(homePage).toBeInTheDocument()
  })
})
