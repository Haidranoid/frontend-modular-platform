import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './CreateAccount.stories'

const { Default } = composeStories(stories)

describe('CreateAccount', () => {
  it('renders correctly', () => {
    render(<Default />)

    const homePage = screen.getByTestId('create-account-page')
    expect(homePage).toBeInTheDocument()
  })
})
