import { FC, useEffect } from 'react'
import { Link } from 'react-router'
import { useActions, useAppSelector } from '#state'

export const Home: FC = () => {
  const { me } = useActions()
  const isLoading = useAppSelector((state) => state.auth.isLoading)

  //console.log({ userSession })
  useEffect(() => {
    me()
    //foo('')
  }, [])

  if (isLoading) {
    return <div data-testid="loading-component">loading...</div>
  }

  return (
    <div data-testid="auth-home-page">
      <h2>Home Auth Page</h2>
      <br />
      <span>
        create an account in <Link to={'/auth/signup'}>signup</Link>
      </span>
      <br />
      <span>
        access in <Link to={'/auth/login'}>login</Link>
      </span>
    </div>
  )
}
