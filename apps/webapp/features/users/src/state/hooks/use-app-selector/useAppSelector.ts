import { createUseAppSelector } from '@webapp/shared/state-utils'
import { RootState } from '../../store'

export const useAppSelector = createUseAppSelector<RootState>()
