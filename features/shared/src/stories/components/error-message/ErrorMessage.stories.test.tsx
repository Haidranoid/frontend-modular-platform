import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './ErrorMessage.stories'

const { Default } = composeStories(stories)

describe('ErrorMessage', () => {
  it('should mount the component without crashing', () => {
    render(<Default />)
    const errorMessage = screen.getByTestId('error-component')
    expect(errorMessage).toBeInTheDocument()
  })
})
