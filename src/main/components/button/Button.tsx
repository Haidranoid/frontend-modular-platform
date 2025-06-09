import { FC, ReactNode } from 'react'
import { ButtonStyled } from './Button.styled'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
}

const Button: FC<ButtonProps> = (props) => {
  const { onClick } = props
  return <ButtonStyled onClick={onClick}>{props.children}</ButtonStyled>
}

export default Button
