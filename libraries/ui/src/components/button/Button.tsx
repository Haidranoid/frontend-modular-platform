import { FC, ReactNode } from 'react'
import { ButtonStyled } from './Button.styled'

export interface ButtonProps {
  children?: ReactNode
  onClick?: () => void
  backgroundColor?: string
  primary?: boolean
  label?: string
  size?: 'sm' | 'md' | 'lg'
}

export const Button: FC<ButtonProps> = (props) => {
  const { onClick } = props
  return <ButtonStyled onClick={onClick}>{props.children}</ButtonStyled>
}
