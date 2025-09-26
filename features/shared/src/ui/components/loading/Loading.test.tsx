import { renderEnhanced, screen } from '#testing-utils'
import { Loading } from './Loading'

describe('Loading', () => {
  it('renders correctly', () => {
    renderEnhanced(<Loading color="primary" />)
    const loading = screen.getByRole('status')
    expect(loading).toBeInTheDocument()
  })
})
