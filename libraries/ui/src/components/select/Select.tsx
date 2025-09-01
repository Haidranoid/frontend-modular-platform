import React, { FC } from 'react'

interface SelectProps {
  label: string
  value?: string
  optionValues: string[]
  handleOnChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  disabled?: boolean
  required?: boolean
  children?: React.ReactNode
}

export const Select: FC<SelectProps> = (props) => {
  const {
    label,
    value = '',
    optionValues,
    handleOnChange,
    required = true,
    disabled = false,
  } = props
  const labelId = label.replaceAll(' ', '-').toLowerCase().concat('-label')
  const selectId = label.replaceAll(' ', '-').toLowerCase().concat('-select')

  return (
    <>
      <input id={labelId} required={required}>
        {label}
      </input>
      <select
        id={selectId}
        value={value}
        //onChange={handleOnChange}
        disabled={disabled}
        required={required}
        onChange={handleOnChange}
      >
        {optionValues.map((optionValue) => (
          <span key={optionValue}>{optionValue}</span>
        ))}
      </select>
    </>
  )
}

