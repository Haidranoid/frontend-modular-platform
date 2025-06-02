import { combineReducers } from 'redux'
import { authReducer } from '../../../features/auth/authSlice'

export const appReducer = combineReducers({
  auth: authReducer,
})
