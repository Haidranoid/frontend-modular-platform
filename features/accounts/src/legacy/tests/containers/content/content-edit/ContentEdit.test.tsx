import React from 'react'
import { renderWithProviders, screen } from '@test/utils/testing-library'
import userEvent from '@testing-library/user-event'
import { mockSingleContentOne } from '@test/mocks/content/contentMocks'
import ContentEdit from './ContentEdit'
import { Content } from '@interfaces/content/content.types'

// Mock the hooks
const getSingleResourceMock = jest.fn()
const updateSingleResourceMock = jest.fn()

jest.mock('@hooks/use-actions', () => ({
  __esModule: true,
  default: () => ({
    getSingleResource: getSingleResourceMock,
    updateSingleResource: updateSingleResourceMock,
  }),
}))

jest.mock('@hooks/use-typed-selector', () => ({
  __esModule: true,
  default: jest.fn(),
}))

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '1' }),
}))

import useTypedSelector from '@hooks/use-typed-selector'
import { selectContentStatus, selectSingleResource } from '@selectors/content'
import type { TypedUseSelectorHook } from 'react-redux'
import { AppReducerState } from '@reducers/app/app.reducer.types'

describe('ContentEdit Container', () => {
  let user: ReturnType<typeof userEvent.setup>
  let selectorContentStatusMocked = { loading: false, error: null as null | string }
  let selectorSingleResourceMocked: Content | null = null
  const mockedUseTypedSelector = useTypedSelector as jest.MockedFunction<
    TypedUseSelectorHook<AppReducerState>
  >

  beforeAll(() => {
    user = userEvent.setup()
  })

  beforeEach(() => {
    selectorContentStatusMocked = { loading: false, error: null }
    selectorSingleResourceMocked = null
    mockedUseTypedSelector.mockReset()
    getSingleResourceMock.mockClear()
    updateSingleResourceMock.mockClear()

    mockedUseTypedSelector.mockImplementation((selector) => {
      if (selector === selectContentStatus) {
        return selectorContentStatusMocked
      }
      if (selector === selectSingleResource) {
        return selectorSingleResourceMocked
      }
    })
  })

  it('should render the content edit page', () => {
    renderWithProviders(<ContentEdit />)
    expect(screen.getByTestId('content-edit-page')).toBeInTheDocument()
  })

  it('should call getSingleResource on mount', () => {
    renderWithProviders(<ContentEdit />)
    expect(getSingleResourceMock).toHaveBeenCalledWith({ id: 1 })
  })

  it('should display loading state', () => {
    selectorContentStatusMocked = { loading: true, error: null }
    renderWithProviders(<ContentEdit />)
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('should display error state', () => {
    selectorContentStatusMocked = { loading: false, error: 'Error loading resource' }
    renderWithProviders(<ContentEdit />)
    expect(screen.getByText('Error loading resource')).toBeInTheDocument()
  })

  it('should render form fields with resource data', () => {
    selectorSingleResourceMocked = mockSingleContentOne
    renderWithProviders(<ContentEdit />)
    expect(screen.getByRole('textbox', { name: /titulo/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /descripcion/i })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: /contenido/i })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: /dirigido/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subir archivo/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /continuar/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /eliminar/i })).toBeInTheDocument()
  })

  it('should change the title', async () => {
    renderWithProviders(<ContentEdit />)
    const titleInput = screen.getByRole('textbox', { name: /titulo/i })

    await user.type(titleInput, 'New title')

    expect(titleInput).toHaveValue('New title')
  })

  it('should change the topic type', async () => {
    selectorSingleResourceMocked = mockSingleContentOne
    renderWithProviders(<ContentEdit />)
    const topicSelect = screen.getByRole('combobox', { name: /contenido/i })

    await user.click(topicSelect)

    const option = await screen.findByRole('option', { name: 'Avanzado' })
    await user.click(option)

    expect(topicSelect).toHaveTextContent('Avanzado')
  })

  it('should change the disability', async () => {
    selectorSingleResourceMocked = mockSingleContentOne
    renderWithProviders(<ContentEdit />)
    const disabilitySelect = screen.getByRole('combobox', { name: /dirigido/i })

    await user.click(disabilitySelect)

    const option = await screen.findByRole('option', { name: 'Auditiva' })
    await user.click(option)

    expect(disabilitySelect).toHaveTextContent('Auditiva')
  })

  it('should handle file upload', async () => {
    renderWithProviders(<ContentEdit />)

    const file = new File(['test'], 'test.png', { type: 'image/png' })
    const fileInput = screen.getByRole('button', { name: /subir archivo/i })

    await user.upload(fileInput, file)

    expect(fileInput).toBeInTheDocument()
  })

  it('should handle edit resource', async () => {
    renderWithProviders(<ContentEdit />)

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

    expect(updateSingleResourceMock).toHaveBeenCalled()
  })
})
