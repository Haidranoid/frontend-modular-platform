import React, { FC, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { useSelector } from 'react-redux'
import { Input, Button } from '@webapp/shared'
import { actions } from '#state'
import { LoginContainerStyled, LoginInputsContainerStyled } from './Login.styled'
import { DraggableBox } from '#ui'

export const Login: FC = () => {
  const { login } = actions
  const state = useSelector((state) => state)
  const location = useLocation()

  const [username, setUser] = useState('')
  const [password, setPassword] = useState('')

  console.log({ state })
  const handleLogin = async () => {
    login({ tipo: '', da: ''})
    //theme.toggle()
  }

  return (
    <LoginContainerStyled data-testid="login-page">
      <DraggableBox
        title="Mi Caja Draggable"
        items={[
          { id: 'redux', label: 'Redux State', data: state },
          { id: 'location', label: 'React Router Location', data: location },
        ]}
      />
      <h1>Log In: {state?.user?.firstName}</h1>
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
