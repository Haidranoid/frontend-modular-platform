import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { AppDispatch } from '@store'
import thunks from '@features/thunks'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

const useActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators({ ...thunks }, dispatch)
}

export default useActions
