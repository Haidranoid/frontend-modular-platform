import { FC, useEffect } from 'react'
import { useActions } from '@hooks'

const Login: FC = () => {
  const { me } = useActions()

  useEffect(() => {
    me()
  }, [])

  return <div data-testid="login-page">Login Page</div>
}

export default Login
