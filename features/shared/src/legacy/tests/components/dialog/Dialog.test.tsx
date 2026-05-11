import React from 'react'
import { render, screen } from '@test/utils/testing-library'
import userEvent from '@testing-library/user-event'
import Dialog, { DialogProps } from './Dialog'
import { axe } from 'jest-axe'

const initialProps: DialogProps = {
  title: 'Dialog test',
  dialogControls: [true, jest.fn],
  dialogType: 'default',
  onResponse: jest.fn(),
  children: <i>dialog children test</i>,
}
const renderSetup = (customProps: Partial<DialogProps> = {}) => {
  const props: DialogProps = { ...initialProps, ...customProps }
  return render(<Dialog {...props}>{props.children}</Dialog>)
}

describe('Dialog Component', () => {
  let user: ReturnType<typeof userEvent.setup>
  beforeAll(async () => {
    user = userEvent.setup()
  })

  it('should test a11y', async () => {
    const { container } = renderSetup()
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('should render the component without crash', () => {
    renderSetup()
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('should render the select dialog type', async () => {
    const onResponseMock = jest.fn()
    const selectValues = ['test1', 'test2']
    renderSetup({
      dialogType: 'select',
      selectValues,
      dialogControls: [true, jest.fn],
      onResponse: onResponseMock,
    })

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByRole('list')).toBeInTheDocument()

    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(2)

    await user.click(listItems[0])

    expect(onResponseMock).toHaveBeenCalledWith('test1')
  })

  it('should render the confirmation dialog type and click continue', async () => {
    const onResponseMock = jest.fn()
    const onCancelMock = jest.fn()
    renderSetup({
      dialogType: 'confirmation',
      dialogControls: [true, jest.fn],
      onResponse: onResponseMock,
      onClose: onCancelMock,
    })

    expect(screen.getByRole('dialog')).toBeInTheDocument()

    const continueButton = screen.getByRole('button', { name: /continuar/i })
    const cancelButton = screen.getByRole('button', { name: /cancelar/i })
    expect(continueButton).toBeInTheDocument()
    expect(cancelButton).toBeInTheDocument()

    await user.click(continueButton)

    expect(onResponseMock).toHaveBeenCalled()
  })

  it('should render the confirmation dialog type and click cancel', async () => {
    const onResponseMock = jest.fn()
    const onCancelMock = jest.fn()
    renderSetup({
      dialogType: 'confirmation',
      dialogControls: [true, jest.fn],
      onResponse: onResponseMock,
      onClose: onCancelMock,
    })

    expect(screen.getByRole('dialog')).toBeInTheDocument()

    const continueButton = screen.getByRole('button', { name: /continuar/i })
    const cancelButton = screen.getByRole('button', { name: /cancelar/i })
    expect(continueButton).toBeInTheDocument()
    expect(cancelButton).toBeInTheDocument()

    await user.click(cancelButton)

    expect(onCancelMock).toHaveBeenCalled()
  })

  it('should render the input dialog type and click cancel', async () => {
    const onResponseMock = jest.fn()
    const onCancelMock = jest.fn()
    renderSetup({
      dialogType: 'input',
      dialogControls: [true, jest.fn],
      onResponse: onResponseMock,
      onClose: onCancelMock,
    })

    expect(screen.getByRole('dialog')).toBeInTheDocument()

    const inputText = screen.getByRole('textbox')
    expect(inputText).toBeInTheDocument()
  })
})
