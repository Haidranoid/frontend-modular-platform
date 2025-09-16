import { createHooks } from '@webapp/shared'
import { UseSelector } from 'react-redux'
import { RootState } from '../store'

export const useAppSelector = createHooks<RootState>()
  .useAppSelector as UseSelector<RootState>

//export const hooks = 'hooks'
