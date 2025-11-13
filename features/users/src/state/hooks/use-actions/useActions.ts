import { useDispatch } from 'react-redux'
import { createActions } from '@webapp/shared'
import { usersSlice } from '../../slice'

export const useActions = () => {
  const thunks = usersSlice.thunks
  const dispatch = useDispatch()

  return createActions(thunks, dispatch)
}
