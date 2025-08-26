import { createUseActions } from '@webapp/shared/utils'
import { AppDispatch, usersThunks } from '#state'

export const useActions = createUseActions<AppDispatch>(usersThunks)
