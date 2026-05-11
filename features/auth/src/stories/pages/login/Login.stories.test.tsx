import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { composeStories } from '@storybook/react'
import { axe } from 'jest-axe'

import * as stories from './Login.stories'

const LoginStories = composeStories(stories)

describe('Login', () => {
  let user: ReturnType<typeof userEvent.setup>

  beforeAll(() => {
    user = userEvent.setup()
  })

  it('should mount the component without crashing', async () => {
    render(<LoginStories.Default />)

    const loginPage = await screen.findByTestId('login-page')
    const currentPathnameElement = await screen.findByTestId('location-pathname')

    expect(loginPage).toBeInTheDocument()
    expect(currentPathnameElement).toHaveTextContent('/auth/login')
  })

  it.skip('should pass a11y accessibility', async () => {
    const { container } = render(<LoginStories.Default />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })

  describe('when Login form is fulfilled', () => {
    describe('with valid username and password', () => {
      it('should navigate to /auth route when submit button is clicked', async () => {
        render(<LoginStories.Default />)

        const loginPage = await screen.findByTestId('login-page')
        const currentPathnameElement = await screen.findByTestId('location-pathname')
        const usernameInputElement = await screen.findByRole('textbox', {
          name: /username/i,
        })
        const passwordInputElement = await screen.findByLabelText(/password/i)
        const submitButtonElement = await screen.findByRole('button', {
          name: /Continue/i,
        })

        expect(loginPage).toBeInTheDocument()
        expect(currentPathnameElement).toHaveTextContent('/auth/login')
        expect(usernameInputElement).toBeInTheDocument()
        expect(passwordInputElement).toBeInTheDocument()
        expect(submitButtonElement).toBeInTheDocument()

        await user.type(usernameInputElement, 'fake-username')
        await user.type(passwordInputElement, 'fake-password')

        expect(usernameInputElement).toHaveValue('fake-username')
        expect(passwordInputElement).toHaveValue('fake-password')

        await user.click(submitButtonElement)

        expect(currentPathnameElement).toHaveTextContent('/auth')
      })
    })

    describe('with invalid username and/or password', () => {
      it('and username and password are empty should stay in /auth/login route when submit button is clicked', async () => {
        render(<LoginStories.Default />)

        const loginPage = await screen.findByTestId('login-page')
        const currentPathnameElement = await screen.findByTestId('location-pathname')
        const usernameInputElement = await screen.findByRole('textbox', {
          name: /username/i,
        })
        const passwordInputElement = await screen.findByLabelText(/password/i)
        const submitButtonElement = await screen.findByRole('button', {
          name: /Continue/i,
        })

        expect(loginPage).toBeInTheDocument()
        expect(currentPathnameElement).toHaveTextContent('/auth/login')
        expect(usernameInputElement).toBeInTheDocument()
        expect(passwordInputElement).toBeInTheDocument()
        expect(submitButtonElement).toBeInTheDocument()

        expect(usernameInputElement).toHaveValue('')
        expect(passwordInputElement).toHaveValue('')

        await user.click(submitButtonElement)

        expect(currentPathnameElement).toHaveTextContent('/auth/login')
      })

      it('and username and password have invalid length should stay in /auth/login route when submit button is clicked', async () => {
        render(<LoginStories.Default />)

        const loginPage = await screen.findByTestId('login-page')
        const currentPathnameElement = await screen.findByTestId('location-pathname')
        const usernameInputElement = await screen.findByRole('textbox', {
          name: /username/i,
        })
        const passwordInputElement = await screen.findByLabelText(/password/i)
        const submitButtonElement = await screen.findByRole('button', {
          name: /Continue/i,
        })

        expect(loginPage).toBeInTheDocument()
        expect(currentPathnameElement).toHaveTextContent('/auth/login')
        expect(usernameInputElement).toBeInTheDocument()
        expect(passwordInputElement).toBeInTheDocument()
        expect(submitButtonElement).toBeInTheDocument()

        expect(usernameInputElement).toHaveValue('')
        expect(passwordInputElement).toHaveValue('')

        await user.type(usernameInputElement, 'usr')
        await user.type(passwordInputElement, 'psw')
        await user.click(submitButtonElement)

        const usernameErrorMessageElement = await screen.findByText(
          'username field is required',
        )
        const passwordErrorMessageElement = await screen.findByText(
          'password field is required',
        )

        expect(usernameErrorMessageElement).toHaveTextContent(
          'username field is required',
        )
        expect(passwordErrorMessageElement).toHaveTextContent(
          'password field is required',
        )
        expect(currentPathnameElement).toHaveTextContent('/auth/login')
      })
    })
  })
})
