import { createUseActions } from '@webapp/shared/state-utils'
import { AppDispatch } from '../../store'
import { authThunks } from '../../thunks'

export const useActions = createUseActions<AppDispatch>(authThunks)
