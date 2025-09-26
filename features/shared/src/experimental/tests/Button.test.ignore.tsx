import { renderEnhanced, screen } from '#testing-utils'
import { Button } from '../Button'

describe.skip('Button', () => {
  it('renders correctly', () => {
    renderEnhanced(<Button label="test" />)
    const button = screen.getByRole('button', { name: /test/i })
    expect(button).toBeInTheDocument()
  })
})
