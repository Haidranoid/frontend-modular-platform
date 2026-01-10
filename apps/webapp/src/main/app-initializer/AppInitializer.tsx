import { FC } from 'react'
import { AuthInitializer } from '@webapp/auth'
import { AccountsInitializer } from '@webapp/users'

export const AppInitializer: FC = () => {
  return (
    <>
      <AuthInitializer />
      <AccountsInitializer />
    </>
  )
}
