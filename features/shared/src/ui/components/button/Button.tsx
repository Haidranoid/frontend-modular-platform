import { FC, ButtonHTMLAttributes } from 'react'
import { ButtonStyled } from './Button.styled'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  $primary?: boolean
  $size?: 'small' | 'medium' | 'large'
}

export const Button: FC<ButtonProps> = ({
  $size = 'medium',
  $primary = true,
  label,
  ...rest
}) => {
  return (
    <ButtonStyled $size={$size} $primary={$primary} {...rest}>
      {label}
    </ButtonStyled>
  )
}
