import { FC, useEffect } from 'react'
import { useActions, useAppSelector } from '@hooks'
import { authSelectors } from '@selectors'

const Home: FC = () => {
  const {} = useActions()
  const { isLoading, error } = useAppSelector(authSelectors.status)

  console.log({ isLoading, error })
  useEffect(() => {
    me()
  }, [])

  return <div data-testid="home-page">Home Page</div>
}

export default Home
