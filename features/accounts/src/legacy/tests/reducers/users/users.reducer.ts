import { produce } from 'immer'
import UsersTypes from '@actions/users/UsersActionsTypes'
import UsersActions from '@actions/users/UsersActions'
import { UsersReducerState } from './users.reducer.types'

export const initialUsersReducerState: UsersReducerState = {
  user: null,
  users: [],
  loading: false,
  error: null,
}

const usersReducer = produce((state: UsersReducerState, action: UsersActions) => {
  switch (action.type) {
    /* --------------------------------- Get All Users --------------------------------- */
    case UsersTypes.GET_ALL_USERS_STARTED:
      state.loading = true
      state.error = null
      break

    case UsersTypes.GET_ALL_USERS_ERROR:
      state.loading = false
      state.error = action.payload
      break

    case UsersTypes.GET_ALL_USERS_SUCCESS:
      state.users = action.payload.users

      state.loading = false
      state.error = null
      break

    /* --------------------------------- Get Single User --------------------------------- */
    case UsersTypes.GET_SINGLE_USER_STARTED:
      state.loading = true
      state.error = null
      break

    case UsersTypes.GET_SINGLE_USER_SUCCESS:
      state.user = action.payload.user

      state.loading = false
      state.error = null
      break

    case UsersTypes.GET_SINGLE_USER_ERROR:
      state.loading = false
      state.error = action.payload
      break

    /* --------------------------------- Create User --------------------------------- */
    case UsersTypes.CREATE_USER_STARTED:
      state.loading = true
      state.error = null
      break

    case UsersTypes.CREATE_USER_SUCCESS:
      //console.log(action.payload.user)
      state.users.push(action.payload.user) // add to the end of the array
      //state.users.unshift(action.payload.user) // add to start of the array

      state.loading = false
      state.error = null
      break

    case UsersTypes.CREATE_USER_ERROR:
      state.loading = false
      state.error = action.payload
      break

    /* -------------------------------- Update User --------------------------------- */
    case UsersTypes.UPDATE_USER_STARTED:
      state.loading = true
      state.error = null
      break

    case UsersTypes.UPDATE_USER_SUCCESS:
      state.users = state.users.map((user) =>
        user.id === action.payload.user.id ? action.payload.user : user,
      )

      state.loading = false
      state.error = null
      break

    case UsersTypes.UPDATE_USER_ERROR:
      state.loading = false
      state.error = action.payload
      break

    /* -------------------------------- Delete User --------------------------------- */
    case UsersTypes.DELETE_USER_STARTED:
      state.loading = true
      state.error = null
      break

    case UsersTypes.DELETE_USER_SUCCESS:
      state.users = state.users.filter((user) => user.id !== action.payload.userId)

      state.loading = false
      state.error = null
      break

    case UsersTypes.DELETE_USER_ERROR:
      state.loading = false
      state.error = action.payload
      break
  }
}, initialUsersReducerState)

export default usersReducer
