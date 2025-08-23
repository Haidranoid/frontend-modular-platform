import {Reducer} from 'redux'
import {configureStore, EnhancedStore} from '@reduxjs/toolkit'
import {reduxLogger} from '@libraries/utils'

interface ConfigureStoreParams<IS extends object, R extends object> {
    initialState: IS
    reducer: R
}

type ConfigureAppStore<IS extends object = {}, R extends object= {}> = (params: ConfigureStoreParams<IS, R>) => EnhancedStore

export const configureAppStore: ConfigureAppStore = (params) => {
    return configureStore({
        reducer: params.reducer,
        // @ts-ignore
        preloadedState: params.initialState,
        // @ts-ignore
        middleware: (gDM) => gDM().concat(reduxLogger),
        devTools: {
            name: 'Redux Devtools',
            shouldHotReload: false,
        },
    })
}
