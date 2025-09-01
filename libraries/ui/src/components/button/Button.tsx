import { FC } from 'react'
import { ButtonStyled } from './Button.styled'

export interface ButtonProps {
  label: string
  size: 'small' | 'medium' | 'large'
  primary?: boolean
  onClick?: () => void
}

export const Button: FC<ButtonProps> = (props) => {
  return <ButtonStyled {...props}>{props.label}</ButtonStyled>
}
