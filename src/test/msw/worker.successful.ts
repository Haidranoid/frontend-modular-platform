// mocks/browser.ts
import { setupWorker } from 'msw/browser'
import authHandlers from './handlers/authentication/authentication.successful'

const workerSuccessful = setupWorker(...authHandlers)

export default workerSuccessful
