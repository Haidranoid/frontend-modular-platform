import { createUseActions } from '@webapp/shared/state-utils'
import { AppDispatch } from '../../store'
import { globalThunks } from '../../thunks'

export const useActions = createUseActions<AppDispatch>(globalThunks)
