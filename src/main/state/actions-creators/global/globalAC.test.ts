/*jest.mock('@lib/http-client/httpClient', () => ({
  __esModule: true,
  default: jest.fn(),
}))

import store from '@store'
import httpClient from '@lib/http-client/httpClient'
import { GlobalReducerState } from '@reducers/interfaces/global.reducer.types'
import { init, reset } from './globalAC'
import { initialGlobalState } from '@reducers/global/global.reducer'
import { AppDispatch } from '@store/interfaces/index.types'
import { GlobalTypes } from '@actions'

describe('globalAC', () => {
  // Get fresh state
  let globalState: GlobalReducerState = initialGlobalState
  const mockedHttpClient = httpClient as jest.Mock
  const dispatch: AppDispatch = store.dispatch

  beforeEach(() => {
    dispatch({ type: GlobalTypes.INIT_RESET })
    mockedHttpClient.mockClear()
  })

  test('init() is called successfully', async () => {
    mockedHttpClient.mockResolvedValue(undefined)
    globalState = store.getState().global

    expect(globalState.loading).toBe(false)
    expect(globalState.error).toBe(null)

    await dispatch(init())

    globalState = store.getState().global

    expect(globalState.loading).toBe(false)
    expect(globalState.error).toBe(null)
  })

  test('init() is called successfully with a callback', async () => {
    mockedHttpClient.mockResolvedValue(undefined)
    globalState = store.getState().global

    expect(globalState.loading).toBe(false)
    expect(globalState.error).toBe(null)

    const callback = jest.fn()
    await dispatch(init(undefined, callback))

    expect(callback).toHaveBeenCalled()
  })

  test('init() throws an http error', async () => {
    mockedHttpClient.mockRejectedValue(new Error('error'))
    globalState = store.getState().global

    expect(globalState.loading).toBe(false)
    expect(globalState.error).toBe(null)

    await dispatch(init())

    globalState = store.getState().global

    expect(globalState.loading).toBe(false)
    expect(globalState.error).toBe('error')
  })

  test('reset() is called successfully', async () => {
    mockedHttpClient.mockResolvedValue(undefined)
    globalState = store.getState().global

    expect(globalState.loading).toBe(false)
    expect(globalState.error).toBe(null)

    await dispatch(reset())

    globalState = store.getState().global

    expect(globalState.loading).toBe(false)
    expect(globalState.error).toBe(null)
  })

  test('reset() is called successfully with a callback', async () => {
    mockedHttpClient.mockResolvedValue(undefined)
    globalState = store.getState().global

    expect(globalState.loading).toBe(false)
    expect(globalState.error).toBe(null)

    const callback = jest.fn()
    await dispatch(reset(undefined, callback))

    expect(callback).toHaveBeenCalled()
  })
})
*/
