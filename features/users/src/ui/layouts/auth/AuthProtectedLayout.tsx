import { FC } from 'react'
import { Outlet } from 'react-router'
import { AuthGuardProvider } from '@webapp/shared'

export const AuthProtectedLayout: FC = () => {
  return (
    <div>
      <AuthGuardProvider
        onAuthRequired={{ redirectTo: '/accounts/create' }}
        onAuthWillBlock={{ redirectTo: '/accounts' }}
      >
        <Outlet />
      </AuthGuardProvider>
    </div>
  )
}
