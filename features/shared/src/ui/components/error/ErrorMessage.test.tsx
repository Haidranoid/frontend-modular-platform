import { renderEnhanced, screen } from '#testing-utils'
import { ErrorMessage } from './ErrorMessage'

describe('ErrorMessage', () => {
  it('renders correctly', () => {
    renderEnhanced(<ErrorMessage>error message</ErrorMessage>)
    const errorMessage = screen.getByTestId('error-component')
    expect(errorMessage).toBeInTheDocument()
  })
})
