import { FC, ReactNode } from 'react'
import { AuthGuardProvider, RouteRestrictionLevels } from '@webapp/shared'
import { useAppSelector } from '#state'

export interface AuthProtectedLayoutProps {
  restrictionLevel: RouteRestrictionLevels
  component?: ReactNode
  children?: ReactNode
}

export const AuthProtectedLayout: FC<AuthProtectedLayoutProps> = ({
  children,
  restrictionLevel,
}) => {
  const isAuthenticated = useAppSelector((s) => s.auth.isAuthenticated)

  return (
    <div>
      <AuthGuardProvider
        restrictionLevel={restrictionLevel}
        isAuthenticated={isAuthenticated}
        onAuthRequired={{ redirectTo: '/accounts/create' }}
        onAuthWillBlock={{ redirectTo: '/accounts' }}
        onAuthAndRoleRequired={{ redirectTo: '/accounts' }}
      >
        {children}
      </AuthGuardProvider>
    </div>
  )
}
