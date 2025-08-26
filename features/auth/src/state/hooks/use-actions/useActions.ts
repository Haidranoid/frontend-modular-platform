import { createUseActions } from '@webapp/shared/utils'
import { authThunks, AppDispatch } from '#state'

export const useActions = createUseActions<AppDispatch>(authThunks)
