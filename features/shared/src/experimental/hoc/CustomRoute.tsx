import React, { FC } from 'react'
import { Route, RouteComponentProps } from 'react-router-dom'
import { RouteProps } from '@routes/index.types'
import withAccessGuard from '@experimental/hoc/withAccessGuard'

const CustomRoute: FC<RouteProps> = (route) => {
  const Container = withAccessGuard(
    route.container as React.ComponentType<RouteComponentProps>,
    {
      restrictionType: route.restrictionType,
      allowedRoles: route.allowedRoles,
    },
  )

  return (
    <Route
      key={route.path}
      path={route.path}
      exact={route.exact}
      render={(props) => <Container {...props} />}
    />
  )
}
