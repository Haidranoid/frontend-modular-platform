import { configureAppRouter } from '@webapp/shared'
import { authRoutes } from './routes'

const router = configureAppRouter({
  mode: 'memory',
  initialPath: '/auth',
  routes: authRoutes,
})

export { router as authRouter }
