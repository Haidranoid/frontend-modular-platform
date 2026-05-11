// hooks/useAccessGuard.ts
import useTypedSelector from '@hooks/use-typed-selector'
import { selectCurrentUser } from '@selectors/authentication'
import { isUserAllowed, generateAllowedRoles } from '@routes/helpers'
import RouteRestrictions from '@routes/constants/RouteRestrictions'

interface UseAccessGuardProps {
  restrictionType: RouteRestrictions
  allowedRoles?: string[]
}

export const useAccessGuard = ({
  restrictionType,
  allowedRoles,
}: UseAccessGuardProps) => {
  const user = useTypedSelector(selectCurrentUser)
  const setOfRoles = generateAllowedRoles(allowedRoles)

  if (restrictionType === RouteRestrictions.NON_AUTH_REQUIRED) {
    return { allowed: true }
  }

  if (restrictionType === RouteRestrictions.AUTH_REQUIRED) {
    return { allowed: !!user }
  }

  if (restrictionType === RouteRestrictions.AUTH_WILL_BLOCK) {
    return { allowed: !user, redirectTo: '/' }
  }

  if (restrictionType === RouteRestrictions.AUTH_AND_ROLE_REQUIRED) {
    if (!user || !isUserAllowed(user, setOfRoles)) {
      return { allowed: false, redirectTo: '/forbidden' }
    }
    return { allowed: true }
  }

  return { allowed: false }
}
