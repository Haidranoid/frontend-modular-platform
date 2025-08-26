import { createUseActions } from '@webapp/shared/utils'
import { AppDispatch, globalThunks } from '#state'

export const useActions = createUseActions<AppDispatch>(globalThunks)
