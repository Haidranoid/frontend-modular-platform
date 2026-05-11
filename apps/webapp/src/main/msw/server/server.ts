import { setupServer } from 'msw/node'
import { webappMswHandlers } from '../handlers'

// @ts-ignore
export const server = setupServer(...Object.values(webappMswHandlers))
