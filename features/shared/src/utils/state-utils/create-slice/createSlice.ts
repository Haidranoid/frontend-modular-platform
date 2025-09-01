import {
    createSlice as cSlice,
    ReducerCreators,
    Slice,
    SliceCaseReducers,
    SliceSelectors,
    ValidateSliceCaseReducers
} from '@reduxjs/toolkit'
import {generateMatcher} from './generate-matcher'
import {SliceNames, MatcherIdentifiers} from '#constants'
import {ApiFromSchema, BaseState, UnifiedState} from '#types'
import {createSliceTools, Thunks} from "./create-slice-tools";

export type { Reducer } from 'redux'

export const initialBaseState: BaseState = {
    isLoading: false,
    error: null,
}

export type CreateSliceOptions<Name, S, R, TApi> = {
    name: Name
    initialState: S
    reducers?: R
    api: TApi
}

export type CreateSliceReturn<
    Name extends string,
    S,
    CR extends SliceCaseReducers<UnifiedState<S>>,
    TApi extends ApiFromSchema<S>
> = Slice<UnifiedState<S>, CR, Name, Name, SliceSelectors<UnifiedState<S>>> & {
    thunks: Thunks<S, TApi>
}

export const createSlice = <
    Name extends SliceNames,
    S,
    //CR extends ((creators: ReducerCreators<UnifiedState<S>>) => SliceCaseReducers<UnifiedState<S>>) | {},
    R extends ValidateSliceCaseReducers<UnifiedState<S>, CR> | ((creators: ReducerCreators<UnifiedState<S>>) => CR),
    TApi extends ApiFromSchema<S>,
    CR extends SliceCaseReducers<UnifiedState<S>> = SliceCaseReducers<UnifiedState<S>>,
>(
    options: CreateSliceOptions<Name, S, R, TApi>,
): CreateSliceReturn<Name, S, {}, TApi> => {
    const baseInitialState: UnifiedState<S> = {
        ...initialBaseState,
        ...options.initialState,
    }

    const {thunks, extraReducers} = createSliceTools<S, TApi>(options.name, options.api)


    const slice = cSlice({
        name: options.name,
        initialState: baseInitialState,
        reducers: {},
        extraReducers: (builder) => {
            extraReducers(builder)

            // every slice created with createBaseSlice includes a matcher that runs when an action dispatched by a global
            // action it's triggered, like init, reboot, shutdown, etc.
            // TODO: add logic to filter which action should be catch to be more specific
            builder.addMatcher(generateMatcher(SliceNames.Global, MatcherIdentifiers.IS_FULFILLED), () => baseInitialState)
        },
    })

    return {
        ...slice,
        thunks
    }
}
/*
interface AuthState {
    isAuthenticated: boolean
    user: User | null
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
}

export type AuthApiSchema = MakeApiSchema<{
    me: () => Promise<User>
    logout: () => Promise<void>
}>


const authApi = defineApi<AuthState, AuthApiSchema>({
    me: {
        operation: async () => {
            return await httpClient.get<User>({
                endpoint: Endpoints.ME,
            })
        },
        onSuccess: (state, action) => {
            state.user = action.payload
        }
    },
    logout: {
        operation: async () => {
            return await httpClient.delete({
                endpoint: Endpoints.LOGOUT,
            })
        },
        onSuccess: (state, action) => {
            state.user = null
        }
    },
})

const authSlice = createSlice({
    name: SliceNames.Auth,
    initialState,
    reducers: {},
    api: authApi
})

 */
