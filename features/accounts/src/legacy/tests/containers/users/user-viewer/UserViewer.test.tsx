import React from 'react'
import { renderWithProviders, screen } from '@test/utils/testing-library'
import userEvent from '@testing-library/user-event'
import { mockStudentUser } from '@test/mocks/users/usersMocks'
import UserViewer, { UserViewerProps, dummyUser } from './UserViewer'

const initialProps: UserViewerProps = {
  mode: 'read',
  user: dummyUser,
  handleOnCreate: jest.fn(),
  handleOnUpdate: jest.fn(),
  callback: jest.fn(),
  onCancel: jest.fn(),
}
const renderSetup = (customProps: Partial<UserViewerProps> = {}) => {
  const props: UserViewerProps = { ...initialProps, ...customProps }
  return renderWithProviders(<UserViewer {...props} />, {
    selectiveProviders: { themeProvider: true },
  })
}

describe('UserViewer Component', () => {
  let user: ReturnType<typeof userEvent.setup>
  beforeAll(async () => {
    user = userEvent.setup()
  })

  it('should render the component without crash', () => {
    renderSetup()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('should change the user password', async () => {
    renderSetup({
      mode: 'edit',
      user: dummyUser,
    })

    const password = screen.getByRole('textbox', {
      name: /contraseña/i,
    })
    await user.type(password, 'new password')

    expect(password).toHaveValue('new password')
  })

  it('should change the user role', async () => {
    renderSetup({
      mode: 'edit',
      user: dummyUser,
    })

    const userRole = screen.getByRole('combobox', { name: /tipo de usuario/i })
    await user.click(userRole)
    const roleOption = await screen.findByRole('option', { name: 'Estudiante' })
    await user.click(roleOption)

    expect(userRole).toHaveTextContent('Estudiante')
  })

  it('should change the student disability', async () => {
    renderSetup({
      mode: 'edit',
      user: mockStudentUser,
    })

    const userDisability = screen.getByRole('combobox', { name: /tipo de discapacidad/i })
    await user.click(userDisability)
    const disabilityOption = await screen.findByRole('option', { name: 'Motora' })
    await user.click(disabilityOption)

    expect(userDisability).toHaveTextContent('Motora')
  })

  it('should display the UserViewer as create mode', async () => {
    const createUserMock = jest.fn()
    renderSetup({
      mode: 'create',
      handleOnCreate: createUserMock,
    })

    const createButton = screen.getByRole('button', { name: /continuar/i })
    await user.click(createButton)

    expect(createUserMock).toHaveBeenCalled()
  })

  it('should display the UserViewer as create mode and click cancel', async () => {
    const cancelCreateUserMock = jest.fn()
    renderSetup({
      mode: 'create',
      onCancel: cancelCreateUserMock,
    })

    const cancelButton = screen.getByRole('button', { name: /cancelar/i })
    await user.click(cancelButton)

    expect(cancelCreateUserMock).toHaveBeenCalled()
  })

  it('should display the UserViewer as create mode and click continue to create', async () => {
    const createUserMock = jest.fn()
    renderSetup({
      mode: 'create',
      handleOnCreate: createUserMock,
    })

    const continueButton = screen.getByRole('button', { name: /continuar/i })
    await user.click(continueButton)

    expect(createUserMock).toHaveBeenCalled()
  })

  it('should display the UserViewer as create mode and click cancel but without onCancel', async () => {
    renderSetup({
      mode: 'edit',
      user: dummyUser,
      onCancel: undefined,
    })

    const cancelButton = screen.getByRole('button', { name: /cancelar/i })

    expect(async () => {
      await user.click(cancelButton)
    }).not.toThrow()
  })
})
