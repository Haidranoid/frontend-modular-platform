import { configureAppRouter } from '@webapp/shared'
import { webappRoutes } from './routes'

const router = configureAppRouter({
  mode: 'memory',
  initialPath: '/auth',
  routes: webappRoutes,
})

export { router as webappRouter }
