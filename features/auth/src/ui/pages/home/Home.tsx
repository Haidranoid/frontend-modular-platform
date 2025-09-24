import React, { FC, useEffect } from 'react'
import {Link} from "react-router";
//import { useActions } from '@webapp/shared'

export const Home: FC = () => {
  //const { me, fetchAll } = useActions()
  //console.log({ useTheme })

  useEffect(() => {
    //me()
    //fetchAll()
  }, [])

  return (
    <div data-testid="home-page">
      <h2>Home Auth Page</h2>
      <br/>
      <span>
        create an account in <Link to={'/auth/signup'}>sign up</Link>
      </span><br/>
      <span>
        create an account in <Link to={'/auth/login'}>login</Link>
      </span>
    </div>
  )
}
