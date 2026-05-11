import { render } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './Dialog.stories'

const { Default } = composeStories(stories)

describe('Dialog', () => {
  it('should mount the component without crashing', () => {
    render(<Default />)
    expect(true).toBe(true)
  })
})
