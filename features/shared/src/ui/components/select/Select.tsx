import { FC, ReactNode, ChangeEvent } from 'react'

export interface SelectProps {
  label: string
  optionValues: string[]
  handleOnChange: (event: ChangeEvent<HTMLSelectElement>) => void
  value?: string
  disabled?: boolean
  required?: boolean
  children?: ReactNode
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
