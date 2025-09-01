import { FC, useEffect } from 'react'
//import { useActions } from '@webapp/shared'
import { Button } from '@webapp/shared'
import { useThemeMode } from '@webapp/shared'

export const Home: FC = () => {
  //const { me, fetchAll } = useActions()
  const theme = useThemeMode()

  useEffect(() => {
    //me()
    //fetchAll()
  }, [])

  return (
    <div data-testid="home-page">
      <h2>Home Auth Page</h2>
      <Button
        onClick={theme.toggle}
      >{`cambiar a ${theme.mode === 'light' ? 'dark' : 'light'}`}</Button>
    </div>
  )
}
