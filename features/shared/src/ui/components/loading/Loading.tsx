import { FC } from 'react'

export interface LoadingProps {
  color: 'primary' | 'secondary'
}

export const Loading: FC<LoadingProps> = () => {
  return <div role="status">loading</div>
}
