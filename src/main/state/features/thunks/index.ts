import { authThunks } from '@features/slices/auth/authTools'
import { usersThunks } from '@features/slices/users/usersTools'

const thunks = {
  ...authThunks,
  ...usersThunks,
}

export default thunks
