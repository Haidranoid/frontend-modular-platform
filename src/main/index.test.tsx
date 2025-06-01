// src/index.test.tsx
const createRootMock = jest.fn().mockReturnValue({
  render: jest.fn(),
})

jest.mock('@lib/http-client/httpClient', () => ({
  __esModule: true,
  default: jest.fn(),
}))

jest.mock('react-dom/client', () => ({
  __esModule: true,
  createRoot: createRootMock,
}))

import httpClient from '@lib/http-client/httpClient'

describe('Root.render method', () => {
  const mockedHttpClient = httpClient as jest.Mock

  beforeEach(() => {
    mockedHttpClient.mockResolvedValue(undefined)
  })

  it('renders the app without crashing', async () => {
    require('./index')

    expect(createRootMock().render).toHaveBeenCalled()

    // Assert that the <body> tag is in the document

    //const bodyTag = baseElement.querySelector('body')
    //expect(bodyTag).toBeInTheDocument() // Checks that <body> exists

    // Alternatively, you can use container if needed, like checking for direct children
    // const bodyTagFromContainer = container.querySelector('body')
    // expect(bodyTagFromContainer).toBeInTheDocument()
  })
})
