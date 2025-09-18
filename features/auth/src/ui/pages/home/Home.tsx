import { FC, useEffect } from 'react'
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
    </div>
  )
}
