import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { AppDispatch } from '@store'

import * as authThunks from '@features/auth/authThunks'
import * as usersThunks from '@features/users/usersThunk'

const allActions = {
  ...authThunks,
  ...usersThunks,
}

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export const useActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(allActions, dispatch)
}
