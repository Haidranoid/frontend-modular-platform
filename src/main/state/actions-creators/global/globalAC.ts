/*import { TypedActionCreator } from '../interfaces/index.types'
import GlobalActions from '@actions/global/GlobalActions'
import GlobalTypes from '@actions/global/GlobalActionsTypes'
import Endpoints from '../../../lib/http-client/Endpoints'
import HttpMethods from '../../../lib/http-client/HttpMethods'
import httpClient from '@lib/http-client/httpClient'
import { getErrorMessage } from '../../utils'

export const init: TypedActionCreator<GlobalActions> = (_, cb) => async (dispatch) => {
  dispatch({
    type: GlobalTypes.INIT_STARTED,
  })
  try {
    // TODO: make http calls needed
    await httpClient({
      endpoint: Endpoints.INIT,
      method: HttpMethods.GET,
    })

    dispatch({
      type: GlobalTypes.INIT_COMPLETED,
    })
    cb?.()
  } catch (e) {
    dispatch({
      type: GlobalTypes.INIT_ERROR,
      payload: getErrorMessage(e),
    })
  }
}

export const reset: TypedActionCreator<GlobalActions> = (_, cb) => async (dispatch) => {
  dispatch({
    type: GlobalTypes.INIT_RESET,
  })
  cb?.()
}
*/
