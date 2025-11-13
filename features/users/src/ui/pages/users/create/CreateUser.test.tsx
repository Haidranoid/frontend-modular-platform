import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './CreateUser.stories'

const { Default } = composeStories(stories)

describe('CreateUser', () => {
  it('renders correctly', () => {
    render(<Default />)

    const homePage = screen.getByTestId('create-user-page')
    expect(homePage).toBeInTheDocument()
  })
})
