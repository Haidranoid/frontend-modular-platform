import { produce } from 'immer'
import { UsersReducerState } from '../interfaces/users.reducer.types'
import { UsersActions, UsersActionTypes } from '@actions'
import { initialUsersReducerState } from '../../initialStates/users'

export const usersReducer = produce((state: UsersReducerState, action: UsersActions) => {
  switch (action.type) {
    /* --------------------------------- Get All Users --------------------------------- */
    case UsersActionTypes.GET_ALL_USERS_STARTED:
      state.loading = true
      state.error = null
      break

    case UsersActionTypes.GET_ALL_USERS_ERROR:
      state.loading = false
      state.error = action.payload
      break

    case UsersActionTypes.GET_ALL_USERS_SUCCESS:
      state.users = action.payload.users

      state.loading = false
      state.error = null
      break

    /* --------------------------------- Get Single User --------------------------------- */
    case UsersActionTypes.GET_SINGLE_USER_STARTED:
      state.loading = true
      state.error = null
      break

    case UsersActionTypes.GET_SINGLE_USER_SUCCESS:
      state.user = action.payload.user

      state.loading = false
      state.error = null
      break

    case UsersActionTypes.GET_SINGLE_USER_ERROR:
      state.loading = false
      state.error = action.payload
      break

    /* --------------------------------- Create User --------------------------------- */
    case UsersActionTypes.CREATE_USER_STARTED:
      state.loading = true
      state.error = null
      break

    case UsersActionTypes.CREATE_USER_SUCCESS:
      //console.log(action.payload.user)
      state.users.push(action.payload.user) // add to the end of the array
      //state.users.unshift(action.payload.user) // add to start of the array

      state.loading = false
      state.error = null
      break

    case UsersActionTypes.CREATE_USER_ERROR:
      state.loading = false
      state.error = action.payload
      break

    /* -------------------------------- Update User --------------------------------- */
    case UsersActionTypes.UPDATE_USER_STARTED:
      state.loading = true
      state.error = null
      break

    case UsersActionTypes.UPDATE_USER_SUCCESS:
      state.users = state.users.map((user) =>
        user.id === action.payload.user.id ? action.payload.user : user,
      )

      state.loading = false
      state.error = null
      break

    case UsersActionTypes.UPDATE_USER_ERROR:
      state.loading = false
      state.error = action.payload
      break

    /* -------------------------------- Delete User --------------------------------- */
    case UsersActionTypes.DELETE_USER_STARTED:
      state.loading = true
      state.error = null
      break

    case UsersActionTypes.DELETE_USER_SUCCESS:
      state.users = state.users.filter((user) => user.id !== action.payload.userId)

      state.loading = false
      state.error = null
      break

    case UsersActionTypes.DELETE_USER_ERROR:
      state.loading = false
      state.error = action.payload
      break
  }
}, initialUsersReducerState)
