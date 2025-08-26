import { useDispatch } from 'react-redux'
import { ActionCreatorsMapObject, bindActionCreators, Dispatch } from 'redux'
//import { AppDispatch } from '@store'
//import thunks from '@features/thunks'

//export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
//export const useAppDispatch = useDispatch.withTypes()

export const createUseActions = <AppDispatch extends Dispatch>(
  thunks: ActionCreatorsMapObject,
) => {
  //const dispatch = useAppDispatch()
  const dispatch = useDispatch.withTypes<AppDispatch>()()
  //return bindActionCreators({ ...thunks }, dispatch)
  return bindActionCreators({ ...thunks }, dispatch)
}
