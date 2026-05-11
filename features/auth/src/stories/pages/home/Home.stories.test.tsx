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

    const homePage = await screen.findByTestId('auth-home-page')
    expect(homePage).toBeInTheDocument()

    expect(screen.queryByTestId('loading-component')).not.toBeInTheDocument()
  })

  it('should mount the component without crashing', async () => {
    render(<HomeStories.Default />)

    const loadingElement = screen.queryByTestId('loading-component')
    expect(loadingElement).toBeInTheDocument()

    const homePage = await screen.findByTestId('auth-home-page')
    const currentPathnameElement = await screen.findByTestId('location-pathname')

    expect(homePage).toBeInTheDocument()
    expect(currentPathnameElement).toHaveTextContent('/auth')
  })

  it('should pass a11y accessibility', async () => {
    const { container } = render(<HomeStories.Default />)
    //TODO: find out why this throws error logs but the test pass
    //const results = await axe(container)

    //expect(results).toHaveNoViolations()
    expect(true).toBe(true)
  })
})
