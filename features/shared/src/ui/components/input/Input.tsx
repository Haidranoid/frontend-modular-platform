import type { FC, InputHTMLAttributes } from 'react'
import { InputStyled, InputWrapper, LabelStyled, MessageStyled } from './Input.styled'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  //export interface InputProps {
  label: string
  labelId: string
  message?: string
  type?: 'text' | 'password' | 'email' | 'url'
  required?: boolean
  placeholder?: string
  $status?: 'default' | 'error' | 'success' | 'warning'
  $size?: 'small' | 'medium' | 'large'
}

export const Input: FC<InputProps> = ({
  label,
  labelId,
  message,
  type = 'text',
  required = false,
  $size = 'medium',
  $status = 'default',
  ...rest
}) => {
  const messageId = `${labelId}-message`
  return (
    <InputWrapper>
      <LabelStyled htmlFor={labelId}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </LabelStyled>
      <InputStyled
        id={labelId}
        type={type}
        required={required}
        $size={$size}
        $status={$status}
        aria-invalid={$status === 'error'}
        aria-describedby={message ? messageId : undefined}
        {...rest}
      />
      {message && (
        <MessageStyled
          id={messageId}
          $status={$status}
          role={$status === 'error' ? 'alert' : undefined}
        >
          {message}
        </MessageStyled>
      )}
    </InputWrapper>
  )
}
