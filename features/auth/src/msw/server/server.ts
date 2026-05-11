import { setupServer } from 'msw/node'
import { authMswHandlers } from '../handlers'

export const server = setupServer(...Object.values(authMswHandlers))
