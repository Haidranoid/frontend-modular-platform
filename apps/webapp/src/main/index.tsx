//import '@config/window'
//import '@config/axe'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'

// @ts-ignore
const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
