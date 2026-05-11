import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { composeStories } from '@storybook/react'
import { axe } from 'jest-axe'
import { darkTheme, lightTheme } from '#styles'

import * as stories from './Button.stories'

const ButtonStories = composeStories(stories)

describe('Button', () => {
  let user: ReturnType<typeof userEvent.setup>

  beforeAll(() => {
    user = userEvent.setup()
  })

  it('should mount the component without crashing', () => {
    render(<ButtonStories.Variant_Default />)

    const buttonElement = screen.getByRole('button', { name: /Default/i })
    expect(buttonElement).toBeInTheDocument()
  })

  it('should call onClick event when is clicked', async () => {
    const handleOnClickMock = jest.fn()

    render(<ButtonStories.Variant_Default onClick={handleOnClickMock} />)

    const buttonElement = screen.getByRole('button', { name: /Default/i })
    await user.click(buttonElement)

    expect(handleOnClickMock).toHaveBeenCalledTimes(1)
  })

  it('should pass a11y accessibility', async () => {
    const { container } = render(<ButtonStories.Variant_Default />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })

  it('should find the component using aria-label', () => {
    render(<ButtonStories.Variant_Default aria-label={'aria-label-button'} />)

    const buttonElement = screen.getByRole('button', { name: /aria-label-button/i })
    expect(buttonElement).toBeInTheDocument()
  })

  describe('when DarkTheme is active', () => {
    describe('and is the Default variant', () => {
      it('should have the DarkTheme styles and Default variant', () => {
        render(<ButtonStories.Dark_Variant_Default $variant={'default'} />)

        const buttonElement = screen.getByRole('button', { name: /Default/i })
        expect(buttonElement).toBeInTheDocument()
        expect(buttonElement).toHaveStyle({
          backgroundColor: darkTheme.colors.brand.primary,
        })
      })
    })

    describe('and is the Primary variant', () => {
      it('should have the DarkTheme styles and Primary variant', () => {
        render(<ButtonStories.Dark_Variant_Primary />)

        const buttonElement = screen.getByRole('button', { name: /Primary/i })
        expect(buttonElement).toBeInTheDocument()
        expect(buttonElement).toHaveStyle({
          backgroundColor: darkTheme.colors.brand.primary,
        })
      })
    })

    describe('and is the Secondary variant', () => {
      it('should have the DarkTheme styles and Secondary variant', () => {
        render(<ButtonStories.Dark_Variant_Secondary />)

        const buttonElement = screen.getByRole('button', { name: /Secondary/i })
        expect(buttonElement).toBeInTheDocument()
        expect(buttonElement).toHaveStyle({
          backgroundColor: darkTheme.colors.brand.secondary,
        })
      })
    })
  })

  describe('when LightTheme is active', () => {
    describe('and is the Default variant', () => {
      it('should have the LightTheme styles and Default variant', () => {
        render(<ButtonStories.Light_Variant_Default $variant={'default'} />)

        const buttonElement = screen.getByRole('button', { name: /Default/i })
        expect(buttonElement).toBeInTheDocument()
        expect(buttonElement).toHaveStyle({
          backgroundColor: lightTheme.colors.brand.primary,
        })
      })
    })

    describe('and is the Primary variant', () => {
      it('should have the LightTheme styles and Primary variant', () => {
        render(<ButtonStories.Light_Variant_Primary />)

        const buttonElement = screen.getByRole('button', { name: /Primary/i })
        expect(buttonElement).toBeInTheDocument()
        expect(buttonElement).toHaveStyle({
          backgroundColor: lightTheme.colors.brand.primary,
        })
      })
    })

    describe('and is the Secondary variant', () => {
      it('should have the LightTheme styles and Secondary variant', () => {
        render(<ButtonStories.Light_Variant_Secondary />)

        const buttonElement = screen.getByRole('button', { name: /Secondary/i })
        expect(buttonElement).toBeInTheDocument()
        expect(buttonElement).toHaveStyle({
          backgroundColor: lightTheme.colors.brand.secondary,
        })
      })
    })
  })

  describe('when $size property is provided', () => {
    describe('and is set to small', () => {
      it('should have the dimensions equal to { with: 100px, height: 36px, fontSize: 0.85rem }', () => {
        render(<ButtonStories.Size_Small />)

        const buttonElement = screen.getByRole('button', { name: /Small/i })
        expect(buttonElement).toBeInTheDocument()
        expect(buttonElement).toHaveStyle({
          width: '100px',
          height: '36px',
          fontSize: '0.85rem',
        })
      })
    })

    describe('and is set to medium', () => {
      it('should have the dimensions equal to { with: 140px, height: 40px, fontSize: 0.9rem }', () => {
        render(<ButtonStories.Size_Medium />)

        const buttonElement = screen.getByRole('button', { name: /Medium/i })
        expect(buttonElement).toBeInTheDocument()
        expect(buttonElement).toHaveStyle({
          width: '140px',
          height: '40px',
          fontSize: '0.9rem',
        })
      })
    })

    describe('and is set to large', () => {
      it('should have the dimensions equal to { with: 180px, height: 45px, fontSize: 1rem }', () => {
        render(<ButtonStories.Size_Large />)

        const buttonElement = screen.getByRole('button', { name: /Large/i })
        expect(buttonElement).toBeInTheDocument()
        expect(buttonElement).toHaveStyle({
          width: '180px',
          height: '45px',
          fontSize: '1rem',
        })
      })
    })
  })
})

/*
  describe('when ThemeProvider is being used', () => {
  describe('and DarkTheme is active', () => {
  describe('with DarkTheme active', () => {
  describe('using DarkTheme', () => {

// ======================== Criteria ========================= //

function DataForm() {
  const [email, setEmail] = useState('asdf@asdf.com')

  return (
    <form>
      <h3>Enter Data</h3>

      <div data-testid="image wrapper">
        <img alt="data" src="data.jpg" />
      </div>

      <label htmlFor="email">Email</label>
      <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label htmlFor="color">Color</label>
      <input id="color" placeholder="Red" />

      <button title="Click when ready to submit">Submit</button>
    </form>
  )
}

render(<DataForm />)

test('selecting different elements', () => {
  render(<DataForm />)

  const elements = [
    screen.getByRole('button'),
    screen.getByText(/enter/i),

    screen.getByLabelText(/email/i),
    screen.getByPlaceholderText('Red'),
    screen.getByDisplayValue('asdf@asdf.com'),
    screen.getByAltText('data'),
    screen.getByTitle(/ready to submit/i),

    screen.getByTestId('image wrapper'),
  ]

  for (let element of elements) {
    expect(element).toBeInTheDocument()
  }
})
 */
