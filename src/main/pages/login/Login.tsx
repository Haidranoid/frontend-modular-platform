import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router'
import { useActions } from '@hooks'
import { Input, Button } from '@components'
import { Paths } from '@constants'

const LoginContainerStyled = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const LoginInputsContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
`

const Login: FC = () => {
  const { login } = useActions()

  const [username, setUser] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    login({ username, password })
  }

  return (
    <LoginContainerStyled data-testid="login-page">
      <h1>Log In</h1>
      <LoginInputsContainerStyled>
        <hr />
        <Input type="text" value={username} onChange={(e) => setUser(e.target.value)} />

        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button onClick={handleLogin}>Continue</Button>
      </LoginInputsContainerStyled>
      <span>
        create an account in <Link to={Paths.AUTH_SIGNUP}>sign up</Link>
      </span>
    </LoginContainerStyled>
  )
}

export default Login
