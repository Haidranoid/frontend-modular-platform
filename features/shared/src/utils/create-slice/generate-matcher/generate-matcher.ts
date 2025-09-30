import type { Action } from 'redux'
import { isPending, isRejected, isFulfilled } from '@reduxjs/toolkit'
import { SliceNames, MatcherIdentifiers } from '#constants'

export const generateMatcher =
  (slice: SliceNames, testId: MatcherIdentifiers) => (action: Action) => {
    const startsWith = action.type.startsWith(`${slice}/`)

    if (testId === MatcherIdentifiers.IS_PENDING) {
      return startsWith && isPending(action)
    }
    if (testId === MatcherIdentifiers.IS_REJECTED) {
      return startsWith && isRejected(action)
    }
    if (testId === MatcherIdentifiers.IS_FULFILLED) {
      return startsWith && isFulfilled(action)
    }

    return false
  }
