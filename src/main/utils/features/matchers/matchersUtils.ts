// utils/matchersUtils.ts
import { SliceNames } from '@constants'
import { isPending, isRejected, isFulfilled } from '@reduxjs/toolkit'
import type { Action } from '@reduxjs/toolkit'

export const commonPendingMatcher = isPending
export const commonRejectedMatcher = isRejected

export const authPendingMatcher = (action: Action) =>
  action.type.startsWith('auth/') && isPending(action)

export const authRejectedMatcher = (action: Action) =>
  action.type.startsWith('auth/') && isRejected(action)

export const initMatcher = (action: Action) =>
  action.type.startsWith(`${SliceNames.Global}/`) && isFulfilled(action)

export const rebootMatcher = (action: Action) =>
  action.type.startsWith(`${SliceNames.Global}/`) && isFulfilled(action)

export const shutdownMatcher = (action: Action) =>
  action.type.startsWith(`${SliceNames.Global}/`) && isFulfilled(action)

export const isPendingGeneric = (action: Action) =>
  isPending(action) || action.type.endsWith('/pending')

export const isRejectedGeneric = (action: Action) =>
  isRejected(action) || action.type.endsWith('/rejected')
