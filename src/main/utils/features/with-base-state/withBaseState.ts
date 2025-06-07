// utils/state.ts
import { BaseState, initialBaseState } from '@features/base-slice/baseSlice'

export const withBaseState = <T extends object>(state: T): T & BaseState => ({
  ...state,
  ...initialBaseState,
})
