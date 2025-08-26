// utils/matchersUtils.ts
import type { Action } from '@reduxjs/toolkit'
import { isPending, isRejected, isFulfilled } from '@reduxjs/toolkit'
import { SliceNames } from '#constants'

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

export const isPendingGeneric = (slice: string) => (action: Action) =>
  action.type.startsWith(`${slice}/`) && action.type.endsWith('/pending')

export const isRejectedGeneric = (slice: string) => (action: Action) =>
  action.type.startsWith(`${slice}/`) && action.type.endsWith('/rejected')
