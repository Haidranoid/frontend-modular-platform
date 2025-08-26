import { Middleware } from '@reduxjs/toolkit'
//import { setLoading } from './globalSlice'

export const loadingMiddleware: Middleware = (store) => (next) => (action) => {
  //const { type } = action

  //@ts-ignore
  if (type.endsWith('/pending')) {
    //store.dispatch(setLoading(true))
  }

  //@ts-ignore
  if (type.endsWith('/fulfilled') || type.endsWith('/rejected')) {
    //store.dispatch(setLoading(false))
  }

  return next(action)
}

/*
// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit'
import globalReducer from '@/features/global/state/globalSlice'
import { loadingMiddleware } from '@/features/global/state/loadingMiddleware'
import authReducer from '@/features/auth/state/authSlice'
import usersReducer from '@/features/users/state/usersSlice'

export const store = configureStore({
    reducer: {
        global: globalReducer,
        auth: authReducer,
        users: usersReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(loadingMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


// src/features/global/components/GlobalSpinner.tsx
import { useSelector } from 'react-redux'
import { RootState } from '@/app/store'

export function GlobalSpinner() {
    const isLoading = useSelector((state: RootState) => state.global.isLoading)

    if (!isLoading) return null

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30">
        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
            </div>
    )
}

/*
function App() {
    return (
        <>
            <Routes>{/ tus rutas /}</Routes>
        <GlobalSpinner />
        </>
    )
}

/*
// src/features/auth/state/authThunks.ts
import { createAsyncThunk } from '@reduxjs/toolkit'
import api from '@/shared/api'

export const login = createAsyncThunk(
    'auth/login',
    async (credentials: { email: string; password: string }) => {
        const response = await api.login(credentials)
        return response.data
    }
)
*/
