import { setupServer } from 'msw/node'
import { accountsMswHandlers } from '../handlers'

export const server = setupServer(...Object.values(accountsMswHandlers))
