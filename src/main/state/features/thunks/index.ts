import { authTools, usersTools } from '@features/tools'

const thunks = {
  ...authTools.thunks,
  ...usersTools.thunks,
}

export default thunks
