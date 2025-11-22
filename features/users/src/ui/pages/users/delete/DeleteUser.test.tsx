import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import { deleteUserStories } from '#stories'

const { Default } = composeStories(deleteUserStories)

describe('DeleteUser', () => {
  it('renders correctly', async () => {
    render(<Default />)

    const deleteUserPage = await screen.findByTestId('delete-user-page')
    expect(deleteUserPage).toBeInTheDocument()
  })
})
