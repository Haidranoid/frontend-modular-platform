import { FC } from 'react'
import { ButtonStyled } from './Button.styled'

export interface ButtonProps {
  label: string
  size?: 'small' | 'medium' | 'large'
  primary?: boolean
  onClick?: () => void
}

export const Button: FC<ButtonProps> = (props) => {
  const { size = 'medium', primary = true} = props
  return <ButtonStyled size={size} primary={primary} onClick={props.onClick}>{props.label}</ButtonStyled>
}
