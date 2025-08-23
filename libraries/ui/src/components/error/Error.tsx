import React, { FC } from 'react'
import ErrorStyled from './Error.styled'

interface ErrorProps {
  children: React.ReactNode
}

const Error: FC<ErrorProps> = ({ children }) => {
  return (
    <div data-testid="error-component">
      <ErrorStyled>{children}</ErrorStyled>
    </div>
  )
}

export default Error
