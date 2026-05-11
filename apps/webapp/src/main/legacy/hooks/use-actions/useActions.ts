import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { authInitializerAction } from '@webapp/auth'
import { accountsInitializerAction } from '@webapp/accounts'

export const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(
    { authInitializerAction, accountsInitializerAction },
    dispatch,
  )
}
