import GlobalActionTypes from './GlobalActionTypes'
import { Action, ErrorMessage } from '../interfaces/actions.types'

// --------------------------------- Init ------------------------------------
interface InitActionStarted extends Action {
  type: GlobalActionTypes.INIT_STARTED
}

interface InitActionSuccess extends Action {
  type: GlobalActionTypes.INIT_COMPLETED
}

interface InitActionError extends Action {
  type: GlobalActionTypes.INIT_FAILED
  payload: ErrorMessage
}

interface ResetAppAction extends Action {
  type: GlobalActionTypes.RESET_APP
}

// ---------------------------------- GlobalActions -------------------------------------
type GlobalActions =
  | InitActionStarted
  | InitActionSuccess
  | InitActionError
  | ResetAppAction

export default GlobalActions
