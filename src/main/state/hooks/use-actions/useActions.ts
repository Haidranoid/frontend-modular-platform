import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { AppDispatch } from '@store'
import * as thunks from '@features/thunks'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export const useActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators({ ...thunks }, dispatch)
}
