import { createUseActions } from '@webapp/shared'
import { authSlice } from '#state'

export const actions = createUseActions(authSlice.thunks)
