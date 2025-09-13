import styled from 'styled-components'
import { InputProps } from './Input'

export interface CommonProps {
  $primary?: boolean
  $size?: 'small' | 'medium' | 'large'
}

const sizes = {
  small: { w: "100px", h: "36px", fs: "0.85rem" },
  medium: { w: "140px", h: "40px", fs: "0.9rem" },
  large: { w: "180px", h: "45px", fs: "1rem" },
};

export const InputStyled = styled.input<CommonProps>`
  border: 1px solid
    ${({ theme, $primary }) =>
  $primary ? theme.colors.primary : theme.colors.secondary};
  outline: none;
  border-radius: 6px;
  padding: 0 10px;
  color: black;
  background-color: ${({ theme }) => theme.background["input"]};

  width: ${({ $size = 'medium' }) => sizes[$size].w};
  height: ${({ $size = 'medium' }) => sizes[$size].h};
  font-size: ${({ $size = 'medium' }) => sizes[$size].fs};

  &:focus {
    border-color: ${({ theme }) => theme.colors["accent"]};
    box-shadow: 0 0 0 2px
      ${({ theme }) => theme.colors["accent"]}33; /* leve highlight */
  }
`