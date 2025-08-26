import { createUseAppSelector } from '@webapp/shared/utils'
import { RootState } from '#state'

export const useAppSelector = createUseAppSelector<RootState>()
