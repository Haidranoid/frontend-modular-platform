import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import { axe } from 'jest-axe'

import * as stories from './CreateAccount.stories'

const CreateAccountStories = composeStories(stories)

describe('CreateAccount', () => {
  //let user: ReturnType<typeof userEvent.setup>

  beforeAll(() => {
    //user = userEvent.setup()
  })

  it('shows loading state while data is being fetched', async () => {
    render(<CreateAccountStories.Default />)

    const loadingElement = screen.queryByTestId('loading-component')

    expect(loadingElement).toBeInTheDocument()
  })

  it('transitions from loading to loaded state', async () => {
    render(<CreateAccountStories.Default />)

    const loadingElement = screen.queryByTestId('loading-component')
    expect(loadingElement).toBeInTheDocument()

    const createAccountPage = await screen.findByTestId('create-account-page')
    expect(createAccountPage).toBeInTheDocument()

    expect(loadingElement).not.toBeInTheDocument()
  })

  it('should mount the component without crashing', async () => {
    render(<CreateAccountStories.Default />)

    const loadingElement = screen.queryByTestId('loading-component')
    expect(loadingElement).toBeInTheDocument()

    const createAccountPage = await screen.findByTestId('create-account-page')
    const currentPathnameElement = await screen.findByTestId('location-pathname')

    expect(createAccountPage).toBeInTheDocument()
    expect(currentPathnameElement).toHaveTextContent('/accounts')
  })

  it.skip('should pass a11y accessibility', async () => {
    const { container } = render(<CreateAccountStories.Default />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
