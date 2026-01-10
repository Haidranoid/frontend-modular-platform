import { createSliceTools, SliceNames } from '@webapp/shared'
import { authApi, AuthApi } from '#api'
import { AuthState } from './../initial-state'

export const authSliceTools = createSliceTools<AuthState, AuthApi>({
  sliceName: SliceNames.AUTH,
  api: authApi,
})
