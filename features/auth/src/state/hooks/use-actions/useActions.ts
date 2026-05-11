import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { authSyncActions, authAsyncThunks } from '../../slice'
import { AppDispatch } from '../../store'

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>()

  return bindActionCreators({ ...authAsyncThunks, ...authSyncActions }, dispatch)
}
