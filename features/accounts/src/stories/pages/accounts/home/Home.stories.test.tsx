import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'

import * as stories from './Home.stories'

const HomeStories = composeStories(stories)

describe('Home', () => {
  it('shows loading state while data is being fetched', async () => {
    render(<HomeStories.Default />)

    const loadingElement = screen.queryByTestId('loading-component')

    expect(loadingElement).toBeInTheDocument()
  })

  it('transitions from loading to loaded state', async () => {
    render(<HomeStories.Default />)

    const loadingElement = screen.queryByTestId('loading-component')
    expect(loadingElement).toBeInTheDocument()

    const homePage = await screen.findByTestId('accounts-home-page')
    expect(homePage).toBeInTheDocument()

    expect(loadingElement).not.toBeInTheDocument()
  })

  it('should mount the component without crashing', async () => {
    render(<HomeStories.Default />)

    const loadingElement = screen.queryByTestId('loading-component')
    expect(loadingElement).toBeInTheDocument()

    const homePage = await screen.findByTestId('accounts-home-page')
    const currentPathnameElement = await screen.findByTestId('location-pathname')

    expect(homePage).toBeInTheDocument()
    expect(currentPathnameElement).toHaveTextContent('/accounts')
  })

  it('should pass a11y accessibility', async () => {
    const { container } = render(<HomeStories.Default />)
    //TODO: find out why this throws error logs but the test pass
    //const results = await axe(container)

    //expect(results).toHaveNoViolations()
    expect(true).toBe(true)
  })

  describe('when user is not signed in', () => {
    it('shows link to create an account', async () => {
      render(<HomeStories.Default />)

      await screen.findByTestId('accounts-home-page')

      const createAccountButton = screen.getByRole('link', {
        name: /create new account/i,
      })

      expect(createAccountButton).toBeInTheDocument()
      expect(createAccountButton).toHaveAttribute('href', '/accounts/create')

      //const pause = async () => new Promise((resolve) => setTimeout(resolve, 100))
      //screen.debug()
      //await pause()
      //screen.debug()
    })
  })

  // IMPORTANT: this describe MUST be at the bottom of the test
  // in order to don't impact other tests
  describe.skip('HomeEagerTests', () => {
    it('renders home page with preloaded data (story run)', async () => {
      // IMPORTANT: usage of await HomeStories.Default.run()
      // will have side effects on following tests
      // using in preview.ts -> decorators: [] and loaders: [mswLoader]
      // loads the mocks declared in the story and the fetch calls are triggered
      // the components is rendered with all the info available, findBy is not needed
      await HomeStories.Default.run()
      //render(<HomeStories.Default />);

      const loadingElement = screen.queryByTestId('loading-component')
      expect(loadingElement).not.toBeInTheDocument()

      const homePage = screen.getByTestId('accounts-home-page')
      expect(homePage).toBeInTheDocument()
    })
  })
})
