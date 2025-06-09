import authTools from '@features/slices/auth/authTools'
import usersTools from '@features/slices/users/usersTools'

type AuthThunks = typeof authTools.thunks
type UsersThunks = typeof usersTools.thunks

const thunks: AuthThunks & UsersThunks = {
  ...authTools.thunks,
  ...usersTools.thunks,
} as const

export default thunks
