import { configureAppStore, createSlice, SliceNames } from '@webapp/shared'
import { authApi } from '../api'

// ========================== getting slice ====================================
export const authSlice = createSlice({
  sliceId: SliceNames.Auth,
  api: authApi,
  reducers: {},
  initialState: {
    user: null,
    isAuthenticated: false,
  },
})
// ================== getting initialState from slice ==========================
export const initialAuthState = authSlice.initialState
export type InitialAuthState = typeof initialAuthState

// ================== getting rootReducer from slice ===========================
export const authRootReducer = authSlice.reducer

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
