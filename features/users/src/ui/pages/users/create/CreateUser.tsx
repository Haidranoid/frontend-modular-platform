import React, { FC, useEffect } from 'react'
import { Link } from 'react-router'
import { useAppTheme } from '@webapp/shared'
//import { Link } from 'react-router'
//import { useActions } from '@webapp/shared'

export const CreateUser: FC = () => {
  const appTheme = useAppTheme()

  useEffect(() => {}, [])

  return (
    <div data-testid="create-user-page">
      <h2>Create User Page</h2>
      <br />
      <span>
        delete an user in <Link to={'/users/delete'}>deleteUser</Link>
      </span>
      <br />
      <span>
        home in <Link to={'/users'}>home</Link>
      </span>
    </div>
  )
}
