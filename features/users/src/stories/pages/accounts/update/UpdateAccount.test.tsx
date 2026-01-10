import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './UpdateAccount.stories'

const { Default } = composeStories(stories)

describe('UpdateAccount', () => {
  it('renders correctly', async () => {
    render(<Default />)

    const updateAccountPage = await screen.findByTestId('update-account-page')
    expect(updateAccountPage).toBeInTheDocument()
  })
})
