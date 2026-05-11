import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { composeStories } from '@storybook/react'
import { axe } from 'jest-axe'
import { darkTheme, lightTheme } from '#styles'

import * as stories from './Input.stories'

const Input = composeStories(stories)

describe('Input', () => {
  let user: ReturnType<typeof userEvent.setup>

  beforeAll(() => {
    user = userEvent.setup()
  })

  it('should mount the component without crashing', () => {
    render(<Input.Default />)

    const inputElement = screen.getByRole('textbox', { name: /username/i })
    expect(inputElement).toBeInTheDocument()
  })

  it('should show the text that the user is typing', async () => {
    render(<Input.Default />)

    const inputElement = screen.getByRole('textbox', { name: /username/i })
    await user.type(inputElement, 'typing input text')

    expect(inputElement).toHaveValue('typing input text')
  })

  it('should pass a11y accessibility', async () => {
    const { container } = render(<Input.Default />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })

  it('should find the component using aria-label', () => {
    render(<Input.Default aria-label={'aria-label-input'} />)

    const inputElement = screen.getByRole('textbox', { name: /aria-label-input/i })
    expect(inputElement).toBeInTheDocument()
  })

  describe('when DarkTheme is active', () => {
    describe('and $status property is provided', () => {
      it('and is set to success, should have the DarkTheme styles and success status colors', () => {
        render(<Input.Dark_Status_Success $status={'success'} />)

        const inputElement = screen.getByRole('textbox', { name: /username/i })
        expect(inputElement).toBeInTheDocument()
        expect(inputElement).toHaveStyle({
          borderColor: darkTheme.colors.border.success,
        })
      })

      it('and is set to error, should have the DarkTheme styles and error status colors', () => {
        render(<Input.Dark_Status_Error $status={'error'} />)

        const inputElement = screen.getByRole('textbox', { name: /username/i })
        expect(inputElement).toBeInTheDocument()
        expect(inputElement).toHaveStyle({
          borderColor: darkTheme.colors.border.error,
        })
      })

      it('and is set to warning, should have the DarkTheme styles and warning status colors', () => {
        render(<Input.Dark_Status_Warning $status={'warning'} />)

        const inputElement = screen.getByRole('textbox', { name: /username/i })
        expect(inputElement).toBeInTheDocument()
        expect(inputElement).toHaveStyle({
          borderColor: darkTheme.colors.border.warning,
        })
      })
    })
  })

  describe('when LightTheme is active', () => {
    describe('and $status property is provided', () => {
      it('and is set to success, should have the LightTheme styles and success status colors', () => {
        render(<Input.Light_Status_Success $status={'success'} />)

        const inputElement = screen.getByRole('textbox', { name: /username/i })
        expect(inputElement).toBeInTheDocument()
        expect(inputElement).toHaveStyle({
          borderColor: lightTheme.colors.border.success,
        })
      })

      it('and is set to error, should have the LightTheme styles and error status colors', () => {
        render(<Input.Light_Status_Error $status={'error'} />)

        const inputElement = screen.getByRole('textbox', { name: /username/i })
        expect(inputElement).toBeInTheDocument()
        expect(inputElement).toHaveStyle({
          borderColor: lightTheme.colors.border.error,
        })
      })

      it('and is set to warning, should have the LightTheme styles and warning status colors', () => {
        render(<Input.Light_Status_Warning $status={'warning'} />)

        const inputElement = screen.getByRole('textbox', { name: /username/i })
        expect(inputElement).toBeInTheDocument()
        expect(inputElement).toHaveStyle({
          borderColor: lightTheme.colors.border.warning,
        })
      })
    })
  })

  describe('when $size property is provided', () => {
    describe('and is set to small', () => {
      it('should  have the dimensions equal to { height: 30px, fontSize: 0.85rem }', () => {
        render(<Input.Size_Small />)

        const inputElement = screen.getByRole('textbox', { name: /username/i })
        expect(inputElement).toBeInTheDocument()
        expect(inputElement).toHaveStyle({
          height: '30px',
          fontSize: '0.85rem',
        })
      })
    })
    describe('and is set to medium', () => {
      it('should  have the dimensions equal to { height: 32px, fontSize: 0.9rem }', () => {
        render(<Input.Size_Medium />)

        const inputElement = screen.getByRole('textbox', { name: /username/i })
        expect(inputElement).toBeInTheDocument()
        expect(inputElement).toHaveStyle({
          height: '32px',
          fontSize: '0.9rem',
        })
      })
    })
    describe('and is set to large', () => {
      it('should  have the dimensions equal to { height: 36px, fontSize: 1rem }', () => {
        render(<Input.Size_Large />)

        const inputElement = screen.getByRole('textbox', { name: /username/i })
        expect(inputElement).toBeInTheDocument()
        expect(inputElement).toHaveStyle({
          height: '36px',
          fontSize: '1rem',
        })
      })
    })
  })
})
