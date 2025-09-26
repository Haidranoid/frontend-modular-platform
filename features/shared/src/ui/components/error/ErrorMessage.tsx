import { FC, ReactNode } from 'react'
import ErrorMessageStyled from './ErrorMessage.styled'

export interface ErrorProps {
  children: ReactNode
}

export const ErrorMessage: FC<ErrorProps> = ({ children }) => {
  return (
    <div data-testid="error-component" role="log">
      <ErrorMessageStyled>{children}</ErrorMessageStyled>
    </div>
  )
}
