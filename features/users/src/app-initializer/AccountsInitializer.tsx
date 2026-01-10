import { FC, useEffect } from 'react'
import { useActions } from '#state'

export const AccountsInitializer: FC = () => {
  const { fetchAccounts } = useActions()

  useEffect(() => {
    //console.log('accounts-app-initializer')
    //fetchAccounts({})
  }, [])

  return null // <div id='accounts-app-initializer'/>
}
