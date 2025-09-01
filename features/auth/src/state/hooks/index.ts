import { createHooks } from '@webapp/shared'
import { authThunks } from '../thunks'
import { AppDispatch } from '../store'
import { RootState } from '../store'

export const hooks = createHooks<AppDispatch, RootState>(authThunks)
