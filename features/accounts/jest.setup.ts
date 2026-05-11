import '@testing-library/jest-dom'
import { toHaveNoViolations } from 'jest-axe'
import { server } from '#msw-server'

// enables axe tests
expect.extend(toHaveNoViolations)

// establish API mocking before all tests.
beforeAll(() => server.listen())

// reset any request handlers that we may add during the test,
// so they don't affect another test.
afterEach(() => server.resetHandlers())

// clean up after the test is finished
afterAll(() => server.close())
