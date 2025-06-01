import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as globalAC from '@actions-creators/global/globalAC'
import * as authenticationAC from '@actions-creators/authentication/authenticationAC'
import * as usersAC from '@actions-creators/users/usersAC'
import * as contentAC from '@actions-creators/content/contentAC'
import * as topicsAC from '@actions-creators/topics/topicsAC'

const allActions = {
  ...globalAC,
  ...authenticationAC,
  ...usersAC,
  ...contentAC,
  ...topicsAC,
}

const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(allActions, dispatch)
}

export { allActions }
export default useActions
