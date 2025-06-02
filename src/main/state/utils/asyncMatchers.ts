// utils/asyncMatchers.ts
import { isPending, isRejected } from '@reduxjs/toolkit'

export const commonPendingMatcher = isPending
export const commonRejectedMatcher = isRejected

// Puedes personalizarlo para que solo detecte ciertas acciones si quieres:
// export const authPendingMatcher = (action) => action.type.startsWith('auth/') && isPending(action)
