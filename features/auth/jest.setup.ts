import '@testing-library/jest-dom'
import {server} from "#msw-mocks";

// establish API mocking before all tests.
beforeAll(() => server.listen())

// reset any request handlers that we may add during the test,
// so they don't affect another test.
afterEach(() => server.resetHandlers())

// clean up after the test is finished
afterAll(() => server.close())