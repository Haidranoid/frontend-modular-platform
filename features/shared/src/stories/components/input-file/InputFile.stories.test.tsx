import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './InputFile.stories'

const { Default } = composeStories(stories)

describe('InputFile', () => {
  it('should mount the component without crashing', () => {
    render(<Default />)
    const inputFile = screen.getByRole('button')
    expect(inputFile).toBeInTheDocument()
  })
})
