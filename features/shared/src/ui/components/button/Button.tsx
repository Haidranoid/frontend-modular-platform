import { FC, ButtonHTMLAttributes } from 'react'
import { ButtonStyled } from './Button.styled'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  $variant?: 'default' | 'primary' | 'secondary'
  $size?: 'small' | 'medium' | 'large'
}

export const Button: FC<ButtonProps> = ({
  $size = 'small',
  $variant = 'default',
  label,
  ...rest
}) => {
  return (
    <ButtonStyled $size={$size} $variant={$variant} {...rest}>
      {label}
    </ButtonStyled>
  )
}
