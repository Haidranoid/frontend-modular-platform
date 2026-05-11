// components/AuthGate.tsx
import React, { FC } from 'react'
import { useAuthGate } from '@experimental/hooks/useAuthGate'
import { Loading } from '@components'

export const AuthGate: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { checkedAuth, loading } = useAuthGate()

  if (!checkedAuth || loading) {
    return <Loading color="primary" />
  }

  return <>{children}</>
}
