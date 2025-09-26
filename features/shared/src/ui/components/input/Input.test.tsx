import { renderEnhanced, screen } from '#testing-utils'
import { Input } from './Input'

describe('Input', () => {
  it('renders correctly', () => {
    renderEnhanced(<Input />)
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
  })
})
