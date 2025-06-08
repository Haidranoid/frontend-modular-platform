import { FC, useEffect } from 'react'
import { useActions, useAppSelector } from '@hooks'
import { usersSelectors } from '@selectors'

const Login: FC = () => {
  const { users } = useAppSelector(usersSelectors.base)

  return <div data-testid="login-page">Login Page</div>
}

export default Login
