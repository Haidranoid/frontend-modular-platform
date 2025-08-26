import { useSelector } from 'react-redux'
//import { RootState } from '@store'

//const useAppSelector = useSelector.withTypes<RootState>()
export const createUseAppSelector = <RootState = unknown>() => {
  return useSelector.withTypes<RootState>()
}
