import React, { FC, useEffect } from 'react'
import { Button, useAppTheme } from '@webapp/shared'
//import { Link } from 'react-router'
//import { useActions } from '@webapp/shared'

export const Home: FC = () => {
  const appTheme = useAppTheme()

  useEffect(() => {}, [])

  return (
    <div data-testid="users-home-page">
      <h2>Home Users Page</h2>
      <br />

      <Button
        label={`Cambiar a ${appTheme.mode.name === 'light' ? 'dark' : 'light'}`}
        onClick={appTheme.toggle}
      />

      {/*<span>
        create an account in <Link to={'/auth/signup'}>signup</Link>
      </span>
      <br />
      <span>
        create an account in <Link to={'/auth/login'}>login</Link>
      </span>*/}
    </div>
  )
}
