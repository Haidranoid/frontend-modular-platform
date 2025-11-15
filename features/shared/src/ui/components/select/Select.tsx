import { FC, SelectHTMLAttributes } from 'react'
import { SelectStyled, SelectWrapperStyled, LabelStyled } from './Select.styled'

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  $fullWidth?: boolean
  $size?: 'small' | 'medium' | 'large'
  error?: string
}

export const Select: FC<SelectProps> = ({
  label,
  children,
  error,
  $fullWidth = false,
  $size = 'medium',
  ...rest
}) => {
  return (
    <SelectWrapperStyled $fullWidth={$fullWidth}>
      {label && <LabelStyled>{label}</LabelStyled>}

      <SelectStyled $fullWidth={$fullWidth} $size={$size} {...rest}>
        {children}
      </SelectStyled>

      {error && <span style={{ color: 'red', fontSize: '0.8rem' }}>{error}</span>}
    </SelectWrapperStyled>
  )
}
