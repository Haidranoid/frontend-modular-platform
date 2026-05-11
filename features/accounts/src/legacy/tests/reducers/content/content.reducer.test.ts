import contentReducer, { initialContentState } from './content.reducer'
import ContentTypes from '@actions/content/ContentActionsTypes'
import { mockSingleContentOne } from '@test/mocks/content/contentMocks'

describe('contentReducer', () => {
  it('should return the initial state if action is unknown', () => {
    const newState = contentReducer(undefined, {} as never)
    expect(newState).toEqual(initialContentState)
  })

  describe('SINGLE_RESOURCE actions', () => {
    it('should handle GET_SINGLE_RESOURCE_STARTED', () => {
      const newState = contentReducer(initialContentState, {
        type: ContentTypes.GET_SINGLE_RESOURCE_STARTED,
      })
      expect(newState).toEqual({ ...initialContentState, loading: true, error: null })
    })

    it('should handle GET_SINGLE_RESOURCE_SUCCESS', () => {
      const newState = contentReducer(initialContentState, {
        type: ContentTypes.GET_SINGLE_RESOURCE_SUCCESS,
        payload: { resource: mockSingleContentOne },
      })
      expect(newState).toEqual({
        ...initialContentState,
        resource: mockSingleContentOne,
        loading: false,
        error: null,
      })
    })

    it('should handle GET_SINGLE_RESOURCE_ERROR', () => {
      const error = 'Failed to fetch single resource'
      const newState = contentReducer(initialContentState, {
        type: ContentTypes.GET_SINGLE_RESOURCE_ERROR,
        payload: error,
      })
      expect(newState).toEqual({ ...initialContentState, loading: false, error })
    })
  })

  describe('UPLOAD_CONTENT actions', () => {
    it('should handle UPLOAD_CONTENT_STARTED', () => {
      const newState = contentReducer(initialContentState, {
        type: ContentTypes.UPLOAD_CONTENT_STARTED,
      })
      expect(newState).toEqual({ ...initialContentState, loading: true, error: null })
    })

    it('should handle UPLOAD_CONTENT_SUCCESS', () => {
      const newState = contentReducer(initialContentState, {
        type: ContentTypes.UPLOAD_CONTENT_SUCCESS,
      })
      expect(newState).toEqual({ ...initialContentState, loading: false, error: null })
    })

    it('should handle UPLOAD_CONTENT_ERROR', () => {
      const error = 'Failed to upload single resource'
      const newState = contentReducer(initialContentState, {
        type: ContentTypes.UPLOAD_CONTENT_ERROR,
        payload: error,
      })
      expect(newState).toEqual({ ...initialContentState, loading: false, error })
    })
  })
})
