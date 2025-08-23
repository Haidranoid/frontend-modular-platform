import React, { FC } from 'react'

interface InputProps {
  value?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  type?: string
  disabled?: boolean
  required?: boolean
  children?: React.ReactNode
}

const Input: FC<InputProps> = (props) => {
  const {
    value = '',
    onChange,
    onKeyDown,
    type = 'text',
    disabled = false,
    required = true,
  } = props

  return (
    <input
      type={type}
      role="textbox"
      disabled={disabled}
      required={required}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}

export default Input
