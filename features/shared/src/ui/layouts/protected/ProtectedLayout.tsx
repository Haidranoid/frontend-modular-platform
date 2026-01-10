import { FC } from 'react'
import { Outlet } from 'react-router'
import { AuthGuardProvider } from '#providers'

export const ProtectedLayout: FC = () => {
  return (
    <div id="protected-layout-ui">
      <AuthGuardProvider redirectTo="/accounts/create">
        <Outlet />
      </AuthGuardProvider>
    </div>
  )
}
