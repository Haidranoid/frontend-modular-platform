import React, { FC, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { Input, Button } from '@webapp/shared'
import { useActions, useAppSelector } from '#state'
import { LoginContainerStyled, LoginInputsContainerStyled } from './Login.styled'

export const Login: FC = () => {
  const { login } = useActions()
  const error = useAppSelector((state) => state.error)
  const navigate = useNavigate()

  const [username, setUser] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    await login({ username, password })
    navigate('/auth')
  }

  return (
    <LoginContainerStyled data-testid="login-page">
      {error && <div style={{ color: 'red' }}>{String(error)}</div>}
      <h1>Log In</h1>
      <LoginInputsContainerStyled>
        <Input type="text" value={username} onChange={(e) => setUser(e.target.value)} />

        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button label={'Continue'} onClick={handleLogin} />
      </LoginInputsContainerStyled>
      <span>
        create an account in <Link to={'/auth/signup'}>sign up</Link>
      </span>
    </LoginContainerStyled>
  )
}
