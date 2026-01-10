import { setupServer } from 'msw/node'
import * as handlers from '../msw-handlers'

export const server = setupServer(...Object.values(handlers))
