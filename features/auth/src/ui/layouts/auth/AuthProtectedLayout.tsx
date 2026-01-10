import { FC } from 'react'
import { Outlet } from 'react-router'
import { AuthGuardProvider } from '@webapp/shared'

export const AuthProtectedLayout: FC = () => {
  return (
    <div>
      <AuthGuardProvider
        onAuthRequired={{ redirectTo: '/auth/login' }}
        onAuthWillBlock={{ redirectTo: '/auth' }}
      >
        <Outlet />
      </AuthGuardProvider>
    </div>
  )
}
