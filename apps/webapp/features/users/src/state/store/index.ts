import { configureAppStore } from '@webapp/shared/state-utils'

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const store = configureAppStore({
  reducer: {},
  initialState: {}
})
