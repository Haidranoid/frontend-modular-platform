import { FC, InputHTMLAttributes } from 'react'
import { InputStyled } from './Input.styled'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  $primary?: boolean
  $size?: 'small' | 'medium' | 'large'
}

export const Input: FC<InputProps> = ({
  type = 'text',
  required = false,
  $size = 'medium',
  $primary = true,
  ...rest
}) => {
  return (
    <InputStyled
      type={type}
      required={required}
      $size={$size}
      $primary={$primary}
      {...rest}
    />
  )
}
