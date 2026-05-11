import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import { axe } from 'jest-axe'

import * as stories from './UpdateAccount.stories'

const UpdateAccountStories = composeStories(stories)

describe('UpdateAccount', () => {
  //let user: ReturnType<typeof userEvent.setup>

  beforeAll(() => {
    //user = userEvent.setup()
  })

  it('shows loading state while data is being fetched', async () => {
    render(<UpdateAccountStories.Default />)

    const loadingElement = screen.queryByTestId('loading-component')

    expect(loadingElement).toBeInTheDocument()
  })

  it('transitions from loading to loaded state', async () => {
    render(<UpdateAccountStories.Default />)

    const loadingElement = screen.queryByTestId('loading-component')
    expect(loadingElement).toBeInTheDocument()

    const updateAccountPage = await screen.findByTestId('update-account-page')
    expect(updateAccountPage).toBeInTheDocument()

    expect(loadingElement).not.toBeInTheDocument()
  })

  it('should mount the component without crashing', async () => {
    render(<UpdateAccountStories.Default />)

    const loadingElement = screen.queryByTestId('loading-component')
    expect(loadingElement).toBeInTheDocument()

    const updateAccountPage = await screen.findByTestId('update-account-page')
    const currentPathnameElement = await screen.findByTestId('location-pathname')

    expect(updateAccountPage).toBeInTheDocument()
    expect(currentPathnameElement).toHaveTextContent('/accounts')
  })

  it.skip('should pass a11y accessibility', async () => {
    const { container } = render(<UpdateAccountStories.Default />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
