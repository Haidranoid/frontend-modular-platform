import styled from 'styled-components'

export interface CommonProps {
  $primary?: boolean
  $size?: 'small' | 'medium' | 'large'
}

const sizes = {
  small: { w: '100px', h: '36px', fs: '0.85rem' },
  medium: { w: '140px', h: '40px', fs: '0.9rem' },
  large: { w: '180px', h: '45px', fs: '1rem' },
}

export const ButtonStyled = styled.button<CommonProps>`
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 6px;
  font-weight: 500;
  color: inherit;
  background-color: ${({ theme, $primary }) =>
    $primary ? theme.colors.primary : theme.colors.secondary};

  width: ${({ $size = 'medium' }) => sizes[$size].w};
  height: ${({ $size = 'medium' }) => sizes[$size].h};
  font-size: ${({ $size = 'medium' }) => sizes[$size].fs};

  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme, $primary }) =>
      $primary ? theme.colors['primaryHover'] : theme.colors['secondaryHover']};
  }

  &:active {
    opacity: 0.9;
  }
`
