import authTools from '@features/slices/auth/authTools'
import usersTools from '@features/slices/users/usersTools'

const thunks = {
  ...authTools.thunks,
  ...usersTools.thunks,
}

export default thunks
