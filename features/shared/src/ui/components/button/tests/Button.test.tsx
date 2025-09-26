import { renderEnhanced } from "#testing-utils";
import { Button } from '../Button'

describe('Button', () => {
  it('renders correctly', () => {
    renderEnhanced(<Button label='test'/>)
  })
})
