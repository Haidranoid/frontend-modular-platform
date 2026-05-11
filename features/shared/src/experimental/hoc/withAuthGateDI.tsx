// hoc/withAuthGateDI.tsx
import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'
import type { ComponentType } from 'react'
import type { RootState } from '@store/index.types'
import { selectCurrentUser, selectAuthStatus } from '@selectors/authentication'
import { me as defaultMe } from '@actions-creators/authentication/authenticationAC'
import { Loading } from '@components'
import { Paths } from '@routes'

export interface WithAuthGateOptions {
  authRequired?: boolean
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

export function withAuthGateDI<P extends object>(
  WrappedComponent: ComponentType<P>,
  options: WithAuthGateOptions = {},
): ComponentType<P> {
  const {
    authRequired = true,
    redirectTo = Paths.LOGIN,
    injectMeAction = defaultMe,
  } = options

  class AuthGateHOC extends React.Component<P & WithAuthGateProps, State> {
    state: State = {
      checkedAuth: !!this.props.user,
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
      const { authStatus } = this.props
      const { checkedAuth } = this.state

      if (authRequired && (!checkedAuth || authStatus.loading)) {
        return <Loading color="primary" />
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
✅ How to Use It
1. Protect only specific routes

const PrivateDashboard = withAuthGate(Dashboard)
<Route path="/dashboard" component={PrivateDashboard} />

2. Public page that doesn’t require auth

const PublicLanding = withAuthGate(HomePage, { authRequired: false })
<Route path="/" exact component={PublicLanding} />

3. Inject custom me() function (e.g., mocked or service-abstracted)

const CustomAuthPage = withAuthGate(AdminPanel, {
  injectMeAction: myCustomMeAction,
})
*/
