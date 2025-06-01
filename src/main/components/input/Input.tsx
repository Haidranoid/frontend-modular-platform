import React, { FC } from 'react'

interface InputProps {
  value?: string
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleOnKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  disabled?: boolean
  required?: boolean
  children?: React.ReactNode
}

const Input: FC<InputProps> = (props) => {
  const {
    value = '',
    handleOnChange,
    handleOnKeyDown,
    disabled = false,
    required = true,
  } = props

  return (
    <input
      role="textbox"
      disabled={disabled}
      required={required}
      value={value}
      onChange={handleOnChange}
      onKeyDown={handleOnKeyDown}
    />
  )
}

export default Input
