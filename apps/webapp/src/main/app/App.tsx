import {ProviderComposer} from '@webapp/shared/providers'

import router from "../router";
import store from "../store";

function App() {
    return (
        <ProviderComposer
            //@ts-ignore
            reduxProviderProps={{store}}
            routerProviderProps={{router}}
        >
            <div>app</div>
        </ProviderComposer>
    )
}

export default App
