import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { accountsSyncActions, accountsAsyncThunks } from '../../slice'
import { AppDispatch } from '../../store'

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>()

  return bindActionCreators({ ...accountsAsyncThunks, ...accountsSyncActions }, dispatch)
}
