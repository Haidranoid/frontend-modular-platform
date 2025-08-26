import { createBaseSlice } from '@webapp/shared/utils'
import { User } from '@webapp/shared/types'
import { authTools } from '#state'

export interface AuthState {
  isAuthenticated: boolean
  user: User | null
}

export const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
}

export const authSlice = createBaseSlice({
  name: authTools.slice,
  initialState,
  reducers: {},
  extraReducers: authTools.extraReducers,
})
