import store from '@store/index'
import { GlobalActionTypes } from '@actions'

const resetState = () => store.dispatch({ type: GlobalActionTypes.RESET_APP })
