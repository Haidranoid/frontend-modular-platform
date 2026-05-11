// hoc/withAccessGuard.tsx
import React, { ComponentType } from 'react'
import { Redirect } from 'react-router-dom'
import { useAccessGuard } from '@experimental/hooks/useAccessGuard'
import RouteRestrictions from '@routes/constants/RouteRestrictions'

interface WithAccessGuardOptions {
  restrictionType: RouteRestrictions
  allowedRoles?: string[]
}

const withAccessGuard = <P extends object>(
  WrappedComponent: ComponentType<P>,
  options: WithAccessGuardOptions,
): ComponentType<P> => {
  const GuardedComponent: React.FC<P> = (props) => {
    const { allowed, redirectTo } = useAccessGuard(options)

    if (!allowed) {
      return redirectTo ? <Redirect to={redirectTo} /> : null
    }

    return <WrappedComponent {...props} />
  }

  return GuardedComponent
}

export default withAccessGuard
