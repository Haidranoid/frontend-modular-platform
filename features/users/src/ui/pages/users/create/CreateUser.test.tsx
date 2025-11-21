import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import { createUserStories } from '#stories'

const { Default } = composeStories(createUserStories)

describe('CreateUser', () => {
  it('renders correctly', () => {
    render(<Default />)

    const homePage = screen.getByTestId('create-user-page')
    expect(homePage).toBeInTheDocument()
  })
})
