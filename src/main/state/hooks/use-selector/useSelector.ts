import { useSelector } from 'react-redux'
import { RootState } from '@store/index.types'

export const useAppSelector = useSelector.withTypes<RootState>()
