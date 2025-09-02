import { FC, useEffect } from 'react'
//import { useActions } from '@webapp/shared'
import { Button } from '@webapp/shared'
import { useThemeMode } from '@webapp/shared'

export const Home: FC = () => {
  //const { me, fetchAll } = useActions()
  const useTheme = useThemeMode()
    console.log({useTheme})

  useEffect(() => {
    //me()
    //fetchAll()
  }, [])

  return (
    <div data-testid="home-page">
      <h2>Home Auth Page</h2>
      <Button
        label={`cambiar a ${useTheme.mode.name === 'light' ? 'dark' : 'light'}`}
        onClick={useTheme.toggle}
      />
    </div>
  )
}
