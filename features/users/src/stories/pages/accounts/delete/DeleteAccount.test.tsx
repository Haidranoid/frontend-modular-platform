import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './DeleteAccount.stories'

const { Default } = composeStories(stories)

describe('DeleteAccount', () => {
  it('renders correctly', async () => {
    render(<Default />)

    const deleteAccountPage = await screen.findByTestId('delete-account-page')
    expect(deleteAccountPage).toBeInTheDocument()
  })
})
