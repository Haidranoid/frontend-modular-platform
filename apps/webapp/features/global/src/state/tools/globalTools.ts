import { SliceNames } from '@webapp/shared/constants'
import { createSliceTools } from '@webapp/shared/state-utils'
import { OnFulfilledMap } from '@webapp/shared/types'
import { GlobalState } from "../slice"
import { GlobalApi } from "../api/globalApi.types";
import { globalApi } from "../api"

const onFulfilledMap: OnFulfilledMap<GlobalState, GlobalApi> = {
    init: (state, action) => {
    }
}

export const globalTools = createSliceTools(SliceNames.Global, globalApi, onFulfilledMap)
