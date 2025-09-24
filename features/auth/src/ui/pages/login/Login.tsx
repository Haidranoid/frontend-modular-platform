import React, { FC, MouseEvent, useState } from "react";
import { Link, useNavigate } from 'react-router'
import { Input, Button } from '@webapp/shared'
import { useActions, useAppSelector } from '#state'
import { LoginStyled, LoginInputsStyled } from './Login.styled'

export const Login: FC = () => {
  const { login } = useActions()
  const error = useAppSelector((state) => state.error)
  const navigate = useNavigate()

  const [username, setUser] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e: MouseEvent) => {
    e.preventDefault()

    await login({ username, password })
    navigate('/auth')
  }

  return (
    <LoginStyled data-testid="login-page">
      <h1>Log In</h1>
      <LoginInputsStyled>
        <Input
          required
          minLength={4}
          placeholder="username"
          type="text"
          value={username}
          onChange={(e) => setUser(e.target.value)}
        />

        <Input
          required
          minLength={4}
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button label={'Continue'} onClick={handleLogin} />
      </LoginInputsStyled>
      <span>
        create an account in <Link to={'/auth/signup'}>sign up</Link>
      </span>
    </LoginStyled>
  )
}
