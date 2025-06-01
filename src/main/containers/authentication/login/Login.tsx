import React, { FC, useState } from 'react'
import { Paths } from '@routes'
import { useLocation } from 'react-router-dom'

const Login: FC = () => {
  const location = useLocation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleLoginSuccess = () => {
    const redirectTo = location.state?.from || Paths.HOME
  }

  const handleLogin = () => {
    //login({ email, password }, handleLoginSuccess)
  }

  return <div data-testid="login-page">Login Page</div>
}

export default Login
