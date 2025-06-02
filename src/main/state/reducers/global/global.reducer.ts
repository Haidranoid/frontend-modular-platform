import { produce } from 'immer'
import { GlobalReducerState } from '../interfaces/global.reducer.types'
import { GlobalActions, GlobalActionTypes } from '@actions'
import { initialGlobalState } from '../../initialStates/globals'

export const globalReducer = produce(
  (state: GlobalReducerState, action: GlobalActions) => {
    switch (action.type) {
      /* --------------------------------- INIT --------------------------------- */
      case GlobalActionTypes.INIT_STARTED:
        state.loading = true
        state.error = null
        break

      case GlobalActionTypes.INIT_COMPLETED:
        state.loading = false
        state.error = null
        break

      case GlobalActionTypes.INIT_FAILED:
        state.loading = false
        state.error = action.payload
        break

      default:
        return state
    }
  },
  initialGlobalState,
)
