import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'

import * as stories from './Select.stories'

const SelectStories = composeStories(stories)

describe('Select', () => {
  it('should mount the component without crashing', () => {
    render(<SelectStories.Default />)

    const selectElement = screen.getByRole('combobox')
    expect(selectElement).toBeInTheDocument()
  })

  describe('when $size property is provided', () => {
    describe('and is set to small', () => {
      it('should  have the dimensions equal to { height: 30px, fontSize: 0.85rem }', () => {
        render(<SelectStories.Size_Small />)

        const selectElement = screen.getByRole('combobox')
        expect(selectElement).toBeInTheDocument()
        expect(selectElement).toHaveStyle({
          height: '30px',
          fontSize: '0.85rem',
        })
      })
    })

    describe('and is set to medium', () => {
      it('should  have the dimensions equal to { height: 32px, fontSize: 0.9rem }', () => {
        render(<SelectStories.Size_Medium />)

        const selectElement = screen.getByRole('combobox')
        expect(selectElement).toBeInTheDocument()
        expect(selectElement).toHaveStyle({
          height: '32px',
          fontSize: '0.9rem',
        })
      })
    })

    describe('and is set to large', () => {
      it('should  have the dimensions equal to { height: 36px, fontSize: 1rem }', () => {
        render(<SelectStories.Size_Large />)

        const selectElement = screen.getByRole('combobox')
        expect(selectElement).toBeInTheDocument()
        expect(selectElement).toHaveStyle({
          height: '36px',
          fontSize: '1rem',
        })
      })
    })
  })
})
