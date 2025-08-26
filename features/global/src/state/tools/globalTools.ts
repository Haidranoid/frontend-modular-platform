import { SliceNames } from '@webapp/shared/constants'
import { createSliceTools } from '@webapp/shared/utils'
import { OnFulfilledMap } from '@webapp/shared/types'
import { GlobalState, GlobalApi, globalApi } from '#state'

const onFulfilledMap: OnFulfilledMap<GlobalState, GlobalApi> = {
  init: (state, action) => {},
}

export const globalTools = createSliceTools(SliceNames.Global, globalApi, onFulfilledMap)
