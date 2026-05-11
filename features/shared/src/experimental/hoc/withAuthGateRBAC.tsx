// hoc/withAuthGateRBAC.tsx
import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'
import type { ComponentType } from 'react'
import type { RootState } from '@store/index.types'
import { selectCurrentUser, selectAuthStatus } from '@selectors/authentication'
import { me as defaultMe } from '@actions-creators/authentication/authenticationAC'
import { Loading } from '@components'
import { Paths } from '@routes'
import Forbidden from '@containers/forbidden/Forbidden'
import { generateAllowedRoles, isUserAllowed } from '@routes/helpers'
import { UserRoles } from '@constants'

export interface WithAuthGateOptions {
  authRequired?: boolean
  allowedRoles?: string[]
  redirectTo?: string
  injectMeAction?: typeof defaultMe
}

interface WithAuthGateProps extends RouteComponentProps {
  user: ReturnType<typeof selectCurrentUser>
  authStatus: ReturnType<typeof selectAuthStatus>
  me: typeof defaultMe
}

interface State {
  checkedAuth: boolean
}

export function withAuthGateRBAC<P extends object>(
  WrappedComponent: ComponentType<P>,
  options: WithAuthGateOptions = {},
): ComponentType<P> {
  const {
    authRequired = true,
    allowedRoles,
    redirectTo = Paths.LOGIN,
    injectMeAction = defaultMe,
  } = options

  class AuthGateHOC extends React.Component<P & WithAuthGateProps, State> {
    constructor(props: P & WithAuthGateProps) {
      super(props)
      this.state = {
        checkedAuth: !!props.user,
      }
    }

    componentDidMount() {
      const { user, me } = this.props

      if (!user && authRequired) {
        me(undefined, () => this.setState({ checkedAuth: true }))
      } else {
        this.setState({ checkedAuth: true })
      }
    }

    componentDidUpdate(prevProps: WithAuthGateProps) {
      const { authStatus, user, history, location } = this.props

      if (
        authRequired &&
        !user &&
        authStatus.error &&
        authStatus.error !== prevProps.authStatus.error
      ) {
        history.replace(redirectTo, { from: location.pathname })
      }
    }

    render() {
      const { authStatus, user } = this.props
      const { checkedAuth } = this.state

      if (authRequired && (!checkedAuth || authStatus.loading)) {
        return <Loading color="primary" />
      }

      const setOfRoles = generateAllowedRoles(allowedRoles as UserRoles[])
      // Role-based guard
      if (authRequired && allowedRoles?.length && !isUserAllowed(user, setOfRoles)) {
        return <Forbidden />
      }

      return <WrappedComponent {...(this.props as P)} />
    }
  }

  const mapStateToProps = (state: RootState) => ({
    user: selectCurrentUser(state),
    authStatus: selectAuthStatus(state),
  })

  const mapDispatchToProps = {
    me: injectMeAction,
  }

  // @ts-ignore
  return withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthGateHOC))
}

/*
✅ Example Usage
🔐 Private route (auth + role)
const AdminPage = withAuthGate(AdminDashboard, {
  authRequired: true,
  allowedRoles: ['ADMIN'],
})


🌐 Public route
const PublicPage = withAuthGate(HomePage, { authRequired: false })


🚧 Authenticated route, any role
const UserPage = withAuthGate(UserDashboard)


If you're using RouteRestrictions, you can also dynamically generate routes with:
const withRestriction = (
  component: React.ComponentType<any>,
  restriction: RouteRestrictions,
  allowedRoles?: string[]
) => {
  switch (restriction) {
    case RouteRestrictions.AUTH_REQUIRED:
      return withAuthGate(component)
    case RouteRestrictions.AUTH_WILL_BLOCK:
      return withAuthGate(component, {
        authRequired: false,
        redirectTo: Paths.HOME,
      })
    case RouteRestrictions.NON_AUTH_REQUIRED:
      return withAuthGate(component, { authRequired: false })
    case RouteRestrictions.AUTH_AND_ROLE_REQUIRED:
      return withAuthGate(component, { allowedRoles })
    default:
      return component
  }
}
*/
