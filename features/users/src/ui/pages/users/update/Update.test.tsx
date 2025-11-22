import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import { updateUserStories } from '#stories'

const { Default } = composeStories(updateUserStories)

describe('UpdateUser', () => {
  it('renders correctly', async () => {
    render(<Default />)

    const updateUserPage = await screen.findByTestId('update-user-page')
    expect(updateUserPage).toBeInTheDocument()
  })
})
