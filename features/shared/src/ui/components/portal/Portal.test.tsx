import { render } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './Portal.stories'

const { Default } = composeStories(stories)

describe('Portal', () => {
  it('renders correctly', () => {
    render(<Default />)
    const children = document.body.querySelectorAll('div')
    expect(children.length).toBeGreaterThan(0)
  })
})
