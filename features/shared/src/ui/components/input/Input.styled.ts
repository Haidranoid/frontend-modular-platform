import styled from 'styled-components'
import type { CustomTheme } from '#styles'

export interface CommonProps {
  $status?: 'default' | 'error' | 'success' | 'warning'
  $size?: 'small' | 'medium' | 'large'
}

const sizes = {
  small: { h: '30px', fs: '0.85rem' },
  medium: { h: '32px', fs: '0.9rem' },
  large: { h: '36px', fs: '1rem' },
}

const getBorderColor = (
  theme: CustomTheme,
  status: CommonProps['$status'] = 'default',
) => {
  switch (status) {
    case 'warning':
      return theme.colors.border.warning
    case 'error':
      return theme.colors.border.error
    case 'success':
      return theme.colors.border.success
    default:
      return theme.colors.border.default
  }
}

export const MessageStyled = styled.span<{
  $status?: 'default' | 'error' | 'success' | 'warning'
}>`
  font-size: 0.75rem;
  margin-bottom: 5px;

  color: ${({ theme, $status }) => {
    if ($status === 'error') return theme.colors.text.error
    if ($status === 'success') return theme.colors.text.success
    return theme.colors.text.secondary
  }};
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const LabelStyled = styled.label`
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
`

export const InputStyled = styled.input<CommonProps>`
  width: 100%;

  height: ${({ $size = 'medium' }) => sizes[$size].h};
  font-size: ${({ $size = 'medium' }) => sizes[$size].fs};

  padding: 0 10px;

  border: 1px solid ${({ theme, $status }) => getBorderColor(theme, $status)};
  border-radius: 2px;

  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.background.surface};

  outline: none;

  &:focus {
    /* focus overrides status */
    border-color: ${({ theme }) => theme.colors.border.focus};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.background.surface};
    color: ${({ theme }) => theme.colors.text.secondary};
    cursor: not-allowed;
  }
`
