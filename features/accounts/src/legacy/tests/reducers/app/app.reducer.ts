import { combineReducers } from 'redux'
import authenticationReducer from '../authentication/authentication.reducer'
import usersReducer from '../users/users.reducer'
import contentReducer from '../content/content.reducer'
import globalReducer from '../global/global.reducer'
import topicsReducer from '../topics/topics.reducer'

const appReducer = combineReducers({
  auth: authenticationReducer,
  users: usersReducer,
  content: contentReducer,
  global: globalReducer,
  topics: topicsReducer,
})

export default appReducer
