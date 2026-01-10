import { FC, useEffect } from 'react'
import { Link } from 'react-router'

export const Home: FC = () => {
  //const userSession = useAppSelector((state) => state.auth.session)
  //console.log({ userSession })

  //console.log({ userSession })
  useEffect(() => {
    //me()
    //foo('')
  }, [])

  return (
    <div data-testid="auth-home-page">
      <h2>Home Auth Page</h2>
      <br />
      <span>
        create an account in <Link to={'/auth/signup'}>signup</Link>
      </span>
      <br />
      <span>
        create an account in <Link to={'/auth/login'}>login</Link>
      </span>
    </div>
  )
}
