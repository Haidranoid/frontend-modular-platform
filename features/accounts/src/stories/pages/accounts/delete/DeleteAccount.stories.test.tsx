import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import { axe } from 'jest-axe'

import * as stories from './DeleteAccount.stories'

const DeleteAccountStories = composeStories(stories)

describe('DeleteAccount', () => {
  //let user: ReturnType<typeof userEvent.setup>

  beforeAll(() => {
    //user = userEvent.setup()
  })

  it('shows loading state while data is being fetched', async () => {
    render(<DeleteAccountStories.Default />)

    const loadingElement = screen.queryByTestId('loading-component')

    expect(loadingElement).toBeInTheDocument()
  })

  it('transitions from loading to loaded state', async () => {
    render(<DeleteAccountStories.Default />)

    const loadingElement = screen.queryByTestId('loading-component')
    expect(loadingElement).toBeInTheDocument()

    const deleteAccountPage = await screen.findByTestId('delete-account-page')
    expect(deleteAccountPage).toBeInTheDocument()

    expect(loadingElement).not.toBeInTheDocument()
  })

  it('should mount the component without crashing', async () => {
    render(<DeleteAccountStories.Default />)

    const loadingElement = screen.queryByTestId('loading-component')
    expect(loadingElement).toBeInTheDocument()

    const deleteAccountPage = await screen.findByTestId('delete-account-page')
    const currentPathnameElement = await screen.findByTestId('location-pathname')

    expect(deleteAccountPage).toBeInTheDocument()
    expect(currentPathnameElement).toHaveTextContent('/accounts')
  })

  it.skip('should pass a11y accessibility', async () => {
    const { container } = render(<DeleteAccountStories.Default />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
