import { FC, useEffect } from 'react'
import { useActions } from '@hooks'

const Login: FC = () => {
  const { fetchUser } = useActions()
  useEffect(() => {
    fetchUser()
  }, [])
  return <div data-testid="login-page">Login Page</div>
}

export default Login
