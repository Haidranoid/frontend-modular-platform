// src/dev.tsx
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {ProviderComposer} from '@webapp/shared/providers'

import {router} from "./router";
import {store} from "./state";
import {App} from './app'


// @ts-ignore
const root = createRoot(document.getElementById('root'))


root.render(
    <StrictMode>
        <ProviderComposer
            // @ts-ignore
            reduxProviderProps={{store}}
            routerProviderProps={{router}}
        >
            <App/>
        </ProviderComposer>
    </StrictMode>,
)
