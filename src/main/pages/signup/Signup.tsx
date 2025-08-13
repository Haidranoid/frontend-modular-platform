import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router'
import { useActions } from '@hooks'
import { Input, Button } from '@components'
import { Paths } from '@constants'

const SignUpContainerStyled = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const SignUpInputsContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
`

const Signup: FC = () => {
  const { signup } = useActions()

  const [username, setUser] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = () => {
    signup({ username, password })
  }

  return (
    <SignUpContainerStyled data-testid="signup-page">
      <h1>Sign Up</h1>
      <SignUpInputsContainerStyled>
        <hr />
        <Input type="text" value={username} onChange={(e) => setUser(e.target.value)} />

        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button onClick={handleSignUp}>Submit</Button>
      </SignUpInputsContainerStyled>

      <span>
        access <Link to={Paths.AUTH_LOGIN}>here</Link> if you have an account
      </span>
    </SignUpContainerStyled>
  )
}

export default Signup
