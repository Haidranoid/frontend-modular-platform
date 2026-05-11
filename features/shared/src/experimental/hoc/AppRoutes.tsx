// AppRoutes.tsx
import { withAuthGate } from '@experimental/hoc/withAuthGate'
import { Suspense } from 'react'
import { Loading } from '@components'
import { Switch } from 'react-router-dom'
import { RenderRoutes } from '@routes'

const ProtectedLayout = withAuthGate(() => (
  <Suspense fallback={<Loading color="primary" />}>
    <Switch>{RenderRoutes}</Switch>
  </Suspense>
))

export default ProtectedLayout

/*
Or inside your router:
<AuthLayout>
  <ProtectedLayout />
</AuthLayout>
*/
