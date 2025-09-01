import React, { FC } from 'react'

interface LoadingProps {
  color: 'primary' | 'secondary'
}

export const Loading: FC<LoadingProps> = () => {
  return <div>loading</div>
}

