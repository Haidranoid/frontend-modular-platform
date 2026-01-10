import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './Select.stories'

const { Default } = composeStories(stories)

describe('Select', () => {
  it('renders correctly', () => {
    render(<Default />)
    //screen.debug()
    const select = screen.getByRole('combobox')
    expect(select).toBeInTheDocument()
  })
})
