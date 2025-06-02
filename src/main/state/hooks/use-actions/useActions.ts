import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { AppDispatch } from '../../types/index.types'

//import * as globalAC from '@actions-creators/global/globalAC'
//import * as authenticationAC from '@actions-creators/authentication/authenticationAC'
//import * as usersAC from '@actions-creators/users/usersAC'
import * as authAC from '../../features/auth/authThunks'

const allActions = {
  ...authAC,
}

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export const useActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(allActions, dispatch)
}
