import React, { FC } from 'react'

interface LoadingProps {
  color: 'primary' | 'secondary'
}

const Loading: FC<LoadingProps> = () => {
  return <div>loading</div>
}

export default Loading
