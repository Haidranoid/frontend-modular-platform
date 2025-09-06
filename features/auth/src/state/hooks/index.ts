import { createHooks } from '@webapp/shared'
import { AppDispatch, RootState } from '../store'
import { authThunks } from '../thunks'

export const hooks = createHooks<AppDispatch, RootState>(authThunks)
