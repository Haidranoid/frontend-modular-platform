import { useSelector } from 'react-redux'
//export type { UseSelector } from 'react-redux'
//import { RootState } from '@store'

//export const useAppSelector = useSelector.withTypes<RootState>()

export function useAppSelector<RootState>() {
  return useSelector.withTypes<RootState>()
}
