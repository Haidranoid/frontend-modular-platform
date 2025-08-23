// mocks/browser.ts
import { setupWorker } from 'msw/browser'
import authHandlers from './handlers/auth/authHandlers'

const handlers = [...authHandlers]

const serviceWorker = setupWorker(...handlers)

export default serviceWorker
