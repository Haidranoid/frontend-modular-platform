import { loginHandlers, meHandlers } from './handlers'

export const mswHandlers = [
  ...loginHandlers,
  ...meHandlers,
]

console.log({mswHandlers});