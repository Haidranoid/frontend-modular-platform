import { configureAppStore } from '@webapp/shared'
import { authReducer, initialAuthState } from '../reducer'

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const store = configureAppStore({
  reducer: authReducer,
  initialState: initialAuthState,
})
