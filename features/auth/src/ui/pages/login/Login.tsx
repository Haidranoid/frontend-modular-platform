import React, { FC, useState } from 'react'
import { Link } from 'react-router'
import { Input, Button } from '@webapp/shared'
import { actions, useAppSelector } from '#state'
import { LoginContainerStyled, LoginInputsContainerStyled } from './Login.styled'

export const Login: FC = () => {
  const { login } = actions
  const { user } = useAppSelector((state) => state)

  console.log({ user })
  const [username, setUser] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    await login({ username, password })
    //theme.toggle()
  }

  return (
    <LoginContainerStyled data-testid="login-page">
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
