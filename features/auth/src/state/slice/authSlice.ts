import {createSlice, SliceNames, User} from '@webapp/shared'
import {authApi} from "../api";

export interface AuthState {
  isAuthenticated: boolean
  user: User | null
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
}

export const authSlice = createSlice({
  name: SliceNames.Auth,
  initialState,
  api: authApi
})
