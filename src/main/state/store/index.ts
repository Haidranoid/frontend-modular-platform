import { configureStore } from '@reduxjs/toolkit'
import { appReducer } from '../reducers/app/app.reducer'

const store = configureStore({
  reducer: appReducer,
})

export default store
