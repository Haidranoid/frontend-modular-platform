import { FC, useEffect } from 'react'
import { useActions } from '@hooks'
import { Button } from '@components'
import { useThemeMode } from '@theme-provider/hooks/useThemeMode'

const Home: FC = () => {
  const { me, fetchAll } = useActions()
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
