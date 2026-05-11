import { produce } from 'immer'
import ContentTypes from '@actions/content/ContentActionsTypes'
import ContentActions from '@actions/content/ContentActions'
import { ContentReducerState } from './content.reducer.types'

export const initialContentState: ContentReducerState = {
  resource: null,
  records: [],

  loading: false,
  error: null,
}

const contentReducer = produce((state: ContentReducerState, action: ContentActions) => {
  switch (action.type) {
    /* ---------------------------- GET SINGLE RESOURCE --------------------------------- */
    case ContentTypes.GET_SINGLE_RESOURCE_STARTED:
      state.loading = true
      state.error = null
      break

    case ContentTypes.GET_SINGLE_RESOURCE_SUCCESS:
      state.resource = action.payload.resource

      state.loading = false
      state.error = null
      break

    case ContentTypes.GET_SINGLE_RESOURCE_ERROR:
      state.loading = false
      state.error = action.payload
      break

    /* ---------------------------- Update SINGLE RESOURCE --------------------------------- */
    case ContentTypes.UPDATE_SINGLE_RESOURCE_STARTED:
      state.loading = true
      state.error = null
      break

    case ContentTypes.UPDATE_SINGLE_RESOURCE_SUCCESS:
      state.loading = false
      state.error = null
      break

    case ContentTypes.UPDATE_SINGLE_RESOURCE_ERROR:
      state.loading = false
      state.error = action.payload
      break

    /* --------------------------------- UPLOAD_CONTENT --------------------------------- */
    case ContentTypes.UPLOAD_CONTENT_STARTED:
      state.loading = true
      state.error = null
      break

    case ContentTypes.UPLOAD_CONTENT_SUCCESS:
      state.loading = false
      state.error = null
      break

    case ContentTypes.UPLOAD_CONTENT_ERROR:
      state.loading = false
      state.error = action.payload
      break

    /* --------------------------------- RESOURCE_READ --------------------------------- */
    /* --------------------------------- GET_RESOURCES_READ --------------------------------- */
    case ContentTypes.GET_RESOURCE_READ_STARTED:
      state.loading = true
      state.error = null
      break

    case ContentTypes.GET_RESOURCE_READ_SUCCESS:
      state.records = action.payload
      state.loading = false
      state.error = null
      break

    case ContentTypes.GET_RESOURCE_READ_ERROR:
      state.loading = false
      state.error = action.payload
      break

    default:
      return state
  }
}, initialContentState)

export default contentReducer
