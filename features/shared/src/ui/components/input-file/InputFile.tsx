import { FC, ChangeEvent } from 'react'

export interface InputFileProps {
  files: FileList | undefined
  accept: string
  label: string
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  multiple?: boolean
  hidden?: boolean
}

export const InputFile: FC<InputFileProps> = (props) => {
  const {
    files,
    accept,
    label,
    handleOnChange,
    disabled = false,
    multiple = false,
    hidden = true,
  } = props

  return (
    <button>
      <span>{!files || files.length === 0 ? label : files[0].name}</span>
      <input
        onInput={handleOnChange}
        type="file"
        multiple={multiple}
        disabled={disabled}
        accept={accept}
        hidden={hidden}
      />
    </button>
  )
}
