import React, { FC, useState } from 'react'
import { Link } from 'react-router'
import { Input, Button } from '@webapp/shared'
import { SignupContainerStyled, SignupInputsContainerStyled } from './Signup.styled'

export const Signup: FC = () => {
  const [username, setUser] = useState('')
  const [password, setPassword] = useState('')

  const handleSignup = async () => {
    //await signup({ username, password })
    //theme.toggle()
  }

  return (
    <SignupContainerStyled data-testid="signup-page">
      <h1>Signup</h1>
      <SignupInputsContainerStyled>
        <Input type="text" value={username} onChange={(e) => setUser(e.target.value)} />

        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button label={'Continue'} onClick={handleSignup} />
      </SignupInputsContainerStyled>
      <span>
        create an account in <Link to={'/auth/login'}>login</Link>
      </span>
    </SignupContainerStyled>
  )
}
