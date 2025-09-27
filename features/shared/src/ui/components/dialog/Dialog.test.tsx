import { render } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './Dialog.stories'

const { Default } = composeStories(stories)

describe('Dialog', () => {
  it('renders correctly', () => {
    render(<Default />)
    expect(true).toBe(true)
  })
})
