import React, { FC, useState } from 'react'
import { Link } from 'react-router'
import { Input, Button } from '@webapp/shared'
import { SignupStyled, SignupInputsStyled } from './Signup.styled'

export const Signup: FC = () => {
  const [username, setUser] = useState('')
  const [password, setPassword] = useState('')

  const handleSignup = async () => {
    //await signup({ username, password })
    //theme.toggle()
  }

  return (
    <SignupStyled data-testid="signup-page">
      <h1>Signup</h1>
      <SignupInputsStyled>
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

        <Button label={'Continue'} onClick={handleSignup} />
      </SignupInputsStyled>
      <span>
        create an account in <Link to={'/auth/login'}>login</Link>
      </span>
    </SignupStyled>
  )
}
