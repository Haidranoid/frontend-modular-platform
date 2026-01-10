import { FC, ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation, useMatches } from 'react-router'
import { isAuthenticatedSelector, WebappRootState } from '#state'
import { RouteRestrictionLevels } from '#constants'

export interface AuthGuardProviderProps {
  onAuthRequired?: {
    redirectTo: string
  }
  onAuthAndRoleRequired?: {
    redirectTo: string
  }
  onAuthWillBlock?: {
    redirectTo: string
  }
  disabled?: boolean
  children?: ReactNode
}

export const AuthGuardProvider: FC<AuthGuardProviderProps> = ({
  children,
  onAuthRequired,
  onAuthAndRoleRequired,
  onAuthWillBlock,
  disabled = false,
}) => {
  //TODO: this must be modified before goto prod, only for dev env
  if (disabled) {
    return <>{children}</>
  }

  const { AUTH_REQUIRED, AUTH_WILL_BLOCK } = RouteRestrictionLevels
  const location = useLocation()
  const matches = useMatches()

  const isAuthenticated = useSelector.withTypes<WebappRootState>()(
    isAuthenticatedSelector,
  )

  const currentMatch = matches[matches.length - 1]
  // @ts-ignore
  const restrictionLevel = currentMatch?.handle?.restrictionLevel

  console.log({
    location,
    matches,
    isAuthenticated,
    currentMatch,
    restrictionLevel,
  })

  if (restrictionLevel) {
    if (restrictionLevel === AUTH_REQUIRED && !isAuthenticated) {
      const redirectTo = onAuthRequired?.redirectTo || '/auth-required'
      console.log('forbidden, redirecting to: ', redirectTo)

      return <Navigate to={redirectTo} state={{ from: location }} replace />
    }
    if (restrictionLevel === AUTH_WILL_BLOCK && isAuthenticated) {
      const redirectTo = onAuthWillBlock?.redirectTo || '/auth-is-blocking'
      console.log('forbidden, already logged in, redirecting to: ', redirectTo)

      return <Navigate to={redirectTo} state={{ from: location }} replace />
    }
  }

  console.log('allowed, rendering: ', location.pathname)
  return <>{children}</>
}
