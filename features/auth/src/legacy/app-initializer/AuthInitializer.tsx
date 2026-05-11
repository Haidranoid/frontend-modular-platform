import { FC, useEffect } from 'react'
import { useActions } from '#state'

export const AuthInitializer: FC = () => {
  const { me } = useActions()

  useEffect(() => {
    console.log('auth-app-initializer')
    me()
  }, [])

  return null // <div id='auth-app-initializer'/>
}
