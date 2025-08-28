import { FC, useEffect } from 'react'
//import { useActions } from '@webapp/shared/utils'
import { Button } from '@webapp/shared/ui'
import { useThemeMode } from '@webapp/shared/ui'

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
