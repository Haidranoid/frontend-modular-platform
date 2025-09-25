import { FC } from 'react'

export interface LoadingProps {
  color: 'primary' | 'secondary'
}

export const Loading: FC<LoadingProps> = () => {
  return <div>loading</div>
}
