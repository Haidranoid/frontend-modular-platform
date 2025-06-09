import { FC, useEffect } from 'react'
import { useActions, useAppSelector } from '@hooks'
import { authSelectors } from '@selectors'
import { Button } from '@components'
import { useThemeMode } from '@theme-provider/hooks/useThemeMode'

const Home: FC = () => {
  const { me, fetchAll } = useActions()
  const { isLoading, error } = useAppSelector(authSelectors.status)
  const theme = useThemeMode()

  console.log({ theme })
  useEffect(() => {
    me()
    fetchAll()
  }, [])

  return (
    <div data-testid="home-page">
      <h2>Home Page</h2>
      <Button
        onClick={theme.toggle}
      >{`cambiar a ${theme.mode === 'light' ? 'dark' : 'light'}`}</Button>
    </div>
  )
}

export default Home
