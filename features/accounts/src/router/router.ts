import { configureAppRouter } from '@webapp/shared'
import { accountsRoutes } from './routes'

const router = configureAppRouter({
  mode: 'memory',
  initialPath: '/accounts',
  routes: accountsRoutes,
})

export { router as accountsRouter }
