import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../../actions-creators'
import { accountsAsyncThunks } from '../../thunks'
import { AppDispatch } from '../../store'

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>()

  return bindActionCreators({ ...accountsAsyncThunks, ...actionCreators }, dispatch)
}
