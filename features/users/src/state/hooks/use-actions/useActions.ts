import { createUseActions } from '@webapp/shared/utils'
import { AppDispatch } from '../../store'
import { usersThunks } from '../../thunks'

export const useActions = createUseActions<AppDispatch>(usersThunks)
