import { FC, ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router'
import { RouteRestrictionLevels } from '#constants'

export interface AuthGuardProviderProps {
  restrictionLevel: RouteRestrictionLevels
  onAuthRequired: {
    redirectTo: string
  }
  onAuthAndRoleRequired: {
    redirectTo: string
  }
  onAuthWillBlock: {
    redirectTo: string
  }
  isAuthenticated?: boolean
  disabled?: boolean
  children?: ReactNode
}

export const AuthGuardProvider: FC<AuthGuardProviderProps> = ({
  children,
  restrictionLevel,
  isAuthenticated,
  onAuthRequired,
  onAuthWillBlock,
  disabled = false,
}) => {
  //TODO: this must be modified before goto prod, only for dev env
  if (disabled) {
    return <>{children}</>
  }

  const { AUTH_REQUIRED, GUEST_ONLY } = RouteRestrictionLevels
  const location = useLocation()

  console.log({
    location,
    isAuthenticated,
    restrictionLevel,
  })

  switch (restrictionLevel) {
    case AUTH_REQUIRED:
      if (!isAuthenticated) {
        const redirectTo = onAuthRequired.redirectTo
        console.log('forbidden, auth required, redirecting to:', redirectTo)

        return <Navigate to={redirectTo} state={{ from: location }} replace />
      }
      break

    case GUEST_ONLY:
      if (isAuthenticated) {
        const redirectTo = onAuthWillBlock.redirectTo
        console.log('forbidden, guest only, redirecting to:', redirectTo)

        return <Navigate to={redirectTo} state={{ from: location }} replace />
      }
      break

    default:
      break
  }

  console.log('allowed, rendering:', location.pathname)
  return <>{children}</>
}
