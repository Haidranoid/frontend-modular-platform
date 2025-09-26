import { renderEnhanced, screen } from '#testing-utils'
import { Select } from './Select'

describe('Select', () => {
  it('renders correctly', () => {
    renderEnhanced(
      <Select
        label="select test"
        optionValues={['optionValue1', 'optionValue2']}
        handleOnChange={jest.fn()}
      />,
    )
    //screen.debug()
    const select = screen.getByRole('combobox')
    expect(select).toBeInTheDocument()
  })
})
