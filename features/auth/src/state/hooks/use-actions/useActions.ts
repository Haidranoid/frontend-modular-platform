import { createUseActions } from '@webapp/shared/utils'
import { authThunks } from '../../thunks'
import { AppDispatch } from '../../store'

export const useActions = createUseActions<AppDispatch>(authThunks)
