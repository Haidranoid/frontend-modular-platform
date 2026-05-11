// hoc/withAuthGate.tsx
import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'
import type { ComponentType } from 'react'
import type { RootState } from '@store/index.types'
import { selectCurrentUser, selectAuthStatus } from '@selectors/authentication'
import { me } from '@actions-creators/authentication/authenticationAC'
import { Loading } from '@components'
import { Paths } from '@routes'

interface WithAuthGateProps extends RouteComponentProps {
  user: ReturnType<typeof selectCurrentUser>
  authStatus: ReturnType<typeof selectAuthStatus>
  me: typeof me
}

interface State {
  checkedAuth: boolean
}

export function withAuthGate<P extends object>(
  WrappedComponent: ComponentType<P>,
): ComponentType<P> {
  class AuthGateHOC extends React.Component<P & WithAuthGateProps, State> {
    constructor(props: P & WithAuthGateProps) {
      super(props)
      this.state = {
        checkedAuth: !!props.user,
      }
    }

    componentDidMount() {
      const { user, me } = this.props

      if (!user) {
        me(undefined, () => this.setState({ checkedAuth: true }))
      } else {
        this.setState({ checkedAuth: true })
      }
    }

    componentDidUpdate(prevProps: WithAuthGateProps) {
      const { authStatus, user, history, location } = this.props

      if (!user && authStatus.error && authStatus.error !== prevProps.authStatus.error) {
        history.replace(Paths.LOGIN, { from: location.pathname })
      }
    }

    render() {
      const { authStatus } = this.props
      const { checkedAuth } = this.state

      if (!checkedAuth || authStatus.loading) {
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
    me,
  }

  // @ts-ignore
  return withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthGateHOC))
}
