import { createUseAppSelector } from '@webapp/shared/utils'
import { RootState } from '../../store'

export const useAppSelector = createUseAppSelector<RootState>()
