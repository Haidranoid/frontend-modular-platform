import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { AppDispatch } from '@store'

import * as authAC from '@features/auth/authThunks'

const allActions = {
  ...authAC,
}

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export const useActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(allActions, dispatch)
}
