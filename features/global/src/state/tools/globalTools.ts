import { SliceNames } from '@webapp/shared/constants'
import { createSliceTools } from '@webapp/shared/utils'
import { OnFulfilledMap } from '@webapp/shared/types'
import { GlobalApi, globalApi } from '../api'
import { GlobalState } from '../slice'

const onFulfilledMap: OnFulfilledMap<GlobalState, GlobalApi> = {
  init: (state, action) => {},
}

export const globalTools = createSliceTools(SliceNames.Global, globalApi, onFulfilledMap)
