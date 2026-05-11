const pushMock = jest.fn()
const textToSpeechMock = jest.fn()
const resourceReadMock = jest.fn()
jest.mock('@hooks/use-actions', () => ({
  __esModule: true,
  default: () => ({ resourceRead: resourceReadMock }),
}))

jest.mock('react-router-dom', () => ({
  __esModule: true,
  useHistory: jest.fn().mockImplementation(() => ({
    push: pushMock,
  })),
}))

jest.mock('@utils', () => ({
  __esModule: true,
  ...jest.requireActual('@utils'), // retain all actual exports
  textToSpeech: textToSpeechMock,
}))

import React from 'react'
import { renderWithProviders, screen } from '@test/utils/testing-library'
import { mockSingleContentOne } from '@test/mocks/content/contentMocks'
import userEvent from '@testing-library/user-event'
import ResourceAccordion from './ResourceAccordion'

describe('ResourceAccordion Container', () => {
  let user: ReturnType<typeof userEvent.setup>
  beforeAll(() => {
    user = userEvent.setup()
  })

  beforeEach(() => {
    pushMock.mockClear()
    resourceReadMock.mockClear()
    resourceReadMock.mockResolvedValue(undefined)
  })

  it('should render the container without crash', () => {
    renderWithProviders(
      <ResourceAccordion resource={mockSingleContentOne} isStudent={false} />,
      {
        selectiveProviders: { themeProvider: true, stateProvider: true },
      },
    )
    const contentOneElement = screen.getAllByRole('button')[0]
    expect(contentOneElement).toHaveProperty('id', '1')
  })

  it('should click the description of the resource', async () => {
    renderWithProviders(
      <ResourceAccordion resource={mockSingleContentOne} isStudent={false} />,
      {
        selectiveProviders: { themeProvider: true, stateProvider: true },
      },
    )
    //await user.click(screen.getByRole('button'))
    const equationDescription = await screen.findAllByRole('button', { name: /titulo/i })

    await user.click(equationDescription[0])

    expect(textToSpeechMock).toHaveBeenCalled()
  })

  it('should go to edit the resource if it is not a student', async () => {
    renderWithProviders(
      <ResourceAccordion resource={mockSingleContentOne} isStudent={false} />,
      {
        selectiveProviders: { themeProvider: true, stateProvider: true },
      },
    )
    //await user.click(screen.getByRole('button'))

    const editButton = await screen.findByRole('button', { name: /editar/i })
    await user.click(editButton)

    expect(pushMock).toHaveBeenCalled()
  })

  it('should go back to all resources page if it is not a student', async () => {
    renderWithProviders(
      <ResourceAccordion resource={mockSingleContentOne} isStudent={false} />,
      {
        selectiveProviders: { themeProvider: true, stateProvider: true },
      },
    )
    //await user.click(screen.getByRole('button'))

    const editButton = await screen.findByRole('button', { name: /volver/i })
    await user.click(editButton)

    expect(pushMock).toHaveBeenCalled()
  })
})
