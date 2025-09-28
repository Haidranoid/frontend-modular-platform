import type { Reducer, Store, Action } from 'redux'
import type { CreateSliceReturn, User } from '@webapp/shared'
import { configureAppStore, createSlice, SliceNames } from '@webapp/shared'
import { authApi } from '../api'


// ================== setting initial state for createSlice ====================
export interface AuthState {
  isAuthenticated: boolean
  user: User | null
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
}

// ========================== getting slice ====================================
export const authSlice = createSlice({
  sliceId: SliceNames.Auth,
  initialState,
  reducers: {},
  api: authApi,
}) as CreateSliceReturn

// ================== getting initialState from slice ==========================
export const initialAuthState = authSlice.getInitialState()

export type InitialAuthState = typeof initialAuthState

// ================== getting rootReducer from slice ===========================
export const authRootReducer = authSlice.reducer as Reducer<InitialAuthState>

// ============ setting store from rootReducer and initialState ================
export const store = configureAppStore({
  rootReducer: authRootReducer,
  initialState: initialAuthState,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

// ================= getting actions from store and slice ======================
//export const actions = authSlice.withDispatch(store.dispatch)

// ===================== setting selector from store ===========================
//export const useAppSelector = useSelector.withTypes<RootState>()
