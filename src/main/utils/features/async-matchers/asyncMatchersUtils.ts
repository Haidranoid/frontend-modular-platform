// utils/asyncMatchers.ts
import { isPending, isRejected } from '@reduxjs/toolkit'
import type { Action } from '@reduxjs/toolkit'

export const commonPendingMatcher = isPending
export const commonRejectedMatcher = isRejected

// Puedes personalizarlo para que solo detecte ciertas acciones si quieres:
export const authPendingMatcher = (action: Action) =>
  action.type.startsWith('auth/') && isPending(action)

export const authRejectedMatcher = (action: Action) =>
  action.type.startsWith('auth/') && isRejected(action)
