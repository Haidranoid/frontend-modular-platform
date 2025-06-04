import { combineReducers } from 'redux'
import { authReducer } from '@features/auth/authSlice'

const appReducer = combineReducers({
  auth: authReducer,
})

export default appReducer
