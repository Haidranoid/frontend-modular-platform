import { FC, useEffect } from 'react'
import { useActions } from '../hooks'

export const AppInitializer: FC = () => {
  const actions = useActions()

  useEffect(() => {
    //actions.authInitializerAction()
    //actions.accountsInitializerAction()
  }, [])

  return null
}
