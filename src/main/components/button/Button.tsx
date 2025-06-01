import { FC, ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
}

const Button: FC<ButtonProps> = ({ children }) => {
  return <button>{children}</button>
}

export default Button
