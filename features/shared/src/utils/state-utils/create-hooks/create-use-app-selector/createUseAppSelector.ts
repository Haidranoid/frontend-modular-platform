import { useSelector, UseSelector } from 'react-redux'
export type { UseSelector } from 'react-redux'
//import { RootState } from '@store'

//const useAppSelector = useSelector.withTypes<RootState>()
export const createUseAppSelector = <RootState>(): UseSelector<RootState> => {
  return useSelector.withTypes<RootState>()
}
