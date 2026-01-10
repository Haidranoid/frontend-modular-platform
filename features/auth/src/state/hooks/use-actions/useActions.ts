import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../../actions-creators'
import { authAsyncThunks } from '../../thunks'
import { AppDispatch } from '../../store'

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>()

  return bindActionCreators({ ...authAsyncThunks, ...actionCreators }, dispatch)
}
