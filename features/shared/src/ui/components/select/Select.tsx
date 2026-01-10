import { FC, SelectHTMLAttributes } from 'react'
import { SelectStyled, SelectWrapperStyled, LabelStyled } from './Select.styled'

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  options: Array<{ value: any; displayValue: string }>
  $fullWidth?: boolean
  $size?: 'small' | 'medium' | 'large'
  error?: string
}

export const Select: FC<SelectProps> = ({
  label,
  options,
  error,
  $fullWidth = false,
  $size = 'medium',
  ...rest
}) => {
  return (
    <SelectWrapperStyled $fullWidth={$fullWidth}>
      {label && <LabelStyled>{label}</LabelStyled>}

      <SelectStyled $fullWidth={$fullWidth} $size={$size} {...rest}>
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.displayValue}
          </option>
        ))}
      </SelectStyled>

      {error && <span style={{ color: 'red', fontSize: '0.8rem' }}>{error}</span>}
    </SelectWrapperStyled>
  )
}
