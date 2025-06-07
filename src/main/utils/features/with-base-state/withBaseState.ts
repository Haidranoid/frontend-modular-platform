// utils/state.ts
import { BaseState, initialBaseState } from '@utils/features/base-slice/baseSlice'

export const withBaseState = <T extends object>(state: T): T & BaseState => ({
  ...state,
  ...initialBaseState,
})
