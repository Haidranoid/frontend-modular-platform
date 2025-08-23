import { createBaseSlice } from '@webapp/shared/state-utils'
import { User } from '@webapp/shared/types'
import { authTools } from '../tools'

export interface AuthState {
  isAuthenticated: boolean
  user: User | null
}

const initialAuthState: AuthState = {
  isAuthenticated: false,
  user: null,
}

export const authSlice = createBaseSlice({
  name: authTools.slice,
  initialState: initialAuthState,
  reducers: {},
  extraReducers: authTools.extraReducers,
})
