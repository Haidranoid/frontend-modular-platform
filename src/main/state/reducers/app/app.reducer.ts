import { combineReducers } from 'redux'
import authenticationReducer from '../authentication/authentication.reducer'
import usersReducer from '../users/users.reducer'
import globalReducer from '../global/global.reducer'

const appReducer = combineReducers({
  auth: authenticationReducer,
  users: usersReducer,
  global: globalReducer,
})

export default appReducer
