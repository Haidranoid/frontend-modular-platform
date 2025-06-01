import globalReducer, { initialGlobalState } from './global.reducer'
import { GlobalActionTypes } from '@actions'

describe('globalReducer', () => {
  it('should return the initial state if action is unknown', () => {
    const newState = globalReducer(undefined, {} as never)
    expect(newState).toEqual(initialGlobalState)
  })

  describe('INIT actions', () => {
    it('should handle INIT_STARTED', () => {
      const newState = globalReducer(initialGlobalState, {
        type: GlobalActionTypes.INIT_STARTED,
      })
      expect(newState).toEqual({ ...initialGlobalState, loading: true, error: null })
    })

    it('should handle INIT_COMPLETED', () => {
      const newState = globalReducer(initialGlobalState, {
        type: GlobalActionTypes.INIT_COMPLETED,
      })
      expect(newState).toEqual({ ...initialGlobalState, loading: false, error: null })
    })

    it('should handle INIT_FAILED', () => {
      const error = 'Failed to init'
      const newState = globalReducer(initialGlobalState, {
        type: GlobalActionTypes.INIT_FAILED,
        payload: error,
      })
      expect(newState).toEqual({ ...initialGlobalState, loading: false, error })
    })
  })
})
