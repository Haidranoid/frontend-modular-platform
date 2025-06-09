import { FC, useEffect } from 'react'
import { useActions, useAppSelector } from '@hooks'
import { authSelectors } from '@selectors'

const Home: FC = () => {
  const { me, fetchAll } = useActions()
  const { isLoading, error } = useAppSelector(authSelectors.status)

  console.log({ isLoading, error })
  useEffect(() => {
    me()
    fetchAll()
  }, [])

  return <div data-testid="home-page">Home Page</div>
}

export default Home
