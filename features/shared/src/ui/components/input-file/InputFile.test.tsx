import { renderEnhanced, screen } from '#testing-utils'
import { InputFile } from './InputFile'

describe('InputFile', () => {
  it('renders correctly', () => {
    renderEnhanced(
      <InputFile
        files={undefined}
        label={'inputFile test'}
        accept={'.png'}
        handleOnChange={jest.fn()}
      />,
    )
    const inputFile = screen.getByRole('button')
    expect(inputFile).toBeInTheDocument()
  })
})
