import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './Home.stories'

const { Default } = composeStories(stories)

describe('Home', () => {
  it('renders correctly', async () => {
    render(<Default />)

    const homePage = await screen.findByTestId('auth-home-page')
    expect(homePage).toBeInTheDocument()
  })
  it.skip('renders correctly - run()', async () => {
    // loads the mocks declared in the story and the fetch calls are triggered
    // the components is rendered with all the info available, findBy is not needed
    await Default.run()

    render(<Default />)

    const homePage = screen.getByTestId('auth-home-page')
    expect(homePage).toBeInTheDocument()
  })
})
