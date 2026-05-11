// Mock the hooks
const uploadContentMock = jest.fn()
const redirectToMock = jest.fn()

jest.mock('@hooks/use-actions', () => ({
  __esModule: true,
  default: () => ({
    uploadContent: uploadContentMock,
  }),
}))

jest.mock('@hooks/use-typed-selector', () => ({
  __esModule: true,
  default: jest.fn(),
}))

jest.mock('@utils', () => ({
  __esModule: true,
  ...jest.requireActual('@utils'),
  redirectTo: redirectToMock,
}))

import React from 'react'
import { renderWithProviders, screen } from '@test/utils/testing-library'
import userEvent from '@testing-library/user-event'
import UploadContent from './UploadContent'
import useTypedSelector from '@hooks/use-typed-selector'
import { selectContentStatus } from '@selectors/content'
import type { TypedUseSelectorHook } from 'react-redux'
import { AppReducerState } from '@reducers/app/app.reducer.types'

describe('UploadContent Container', () => {
  let user: ReturnType<typeof userEvent.setup>
  let selectorContentStatusMocked = { loading: false, error: null as null | string }
  const mockedUseTypedSelector = useTypedSelector as jest.MockedFunction<
    TypedUseSelectorHook<AppReducerState>
  >

  beforeAll(() => {
    user = userEvent.setup()
  })

  beforeEach(() => {
    selectorContentStatusMocked = { loading: false, error: null }
    uploadContentMock.mockClear()
    redirectToMock.mockClear()
    mockedUseTypedSelector.mockReset()

    mockedUseTypedSelector.mockImplementation((selector) => {
      if (selector === selectContentStatus) {
        return selectorContentStatusMocked
      }
    })
  })

  it('should render the content edit page', () => {
    renderWithProviders(<UploadContent />)
    expect(screen.getByTestId('upload-content-page')).toBeInTheDocument()
  })

  it('should display loading state', () => {
    selectorContentStatusMocked = { loading: true, error: null }
    renderWithProviders(<UploadContent />)
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('should display error state', () => {
    selectorContentStatusMocked = { loading: false, error: 'Error' }
    renderWithProviders(<UploadContent />)
    expect(screen.getByText('Error')).toBeInTheDocument()
  })

  it('should render form fields with resource data', () => {
    renderWithProviders(<UploadContent />)
    expect(screen.getByRole('textbox', { name: /titulo/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /descripcion/i })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: /contenido/i })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: /dirigido/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subir archivo/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /continuar/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /cancelar/i })).toBeInTheDocument()
  })

  it('should change the title', async () => {
    renderWithProviders(<UploadContent />)
    const titleInput = screen.getByRole('textbox', { name: /titulo/i })

    await user.type(titleInput, 'New title')

    expect(titleInput).toHaveValue('New title')
  })

  it('should change the topic type', async () => {
    renderWithProviders(<UploadContent />)
    const topicSelect = screen.getByRole('combobox', { name: /contenido/i })

    await user.click(topicSelect)

    const option = await screen.findByRole('option', { name: 'Avanzado' })
    await user.click(option)

    expect(topicSelect).toHaveTextContent('Avanzado')
  })

  it('should change the disability', async () => {
    renderWithProviders(<UploadContent />)
    const disabilitySelect = screen.getByRole('combobox', { name: /dirigido/i })

    await user.click(disabilitySelect)

    const option = await screen.findByRole('option', { name: 'Auditiva' })
    await user.click(option)

    expect(disabilitySelect).toHaveTextContent('Auditiva')
  })

  it('should handle file upload', async () => {
    renderWithProviders(<UploadContent />)

    const file = new File(['test'], 'test.png', { type: 'image/png' })
    const fileInput = screen.getByRole('button', { name: /subir archivo/i })

    await user.upload(fileInput, file)

    expect(fileInput).toBeInTheDocument()
  })

  it('should handle edit resource', async () => {
    renderWithProviders(<UploadContent />)

    const titleInput = screen.getByRole('textbox', { name: /titulo/i })
    await user.type(titleInput, 'New title')

    const descriptionInput = screen.getByRole('textbox', { name: /descripcion/i })
    await user.type(descriptionInput, 'New description')

    const topicSelect = screen.getByRole('combobox', { name: /contenido/i })
    await user.click(topicSelect)
    const topicOption = await screen.findByRole('option', { name: 'Avanzado' })
    await user.click(topicOption)

    const disabilitySelect = screen.getByRole('combobox', { name: /dirigido/i })
    await user.click(disabilitySelect)
    const disabilityOption = await screen.findByRole('option', { name: 'Auditiva' })
    await user.click(disabilityOption)

    const file = new File(['test'], 'test.png', { type: 'image/png' })
    const files = [file]
    const fileInput = screen.getByRole('button', { name: /subir archivo/i })
    await user.upload(fileInput, files)

    const editButton = screen.getByRole('button', { name: /continuar/i })
    await user.click(editButton)

    expect(uploadContentMock).toHaveBeenCalled()
  })
})
