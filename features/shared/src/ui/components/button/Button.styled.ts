import styled from 'styled-components'
import type { CustomTheme } from '#styles'

export interface CommonProps {
  $variant?: 'default' | 'primary' | 'secondary'
  $size?: 'small' | 'medium' | 'large'
}

export const ButtonSizes = {
  small: { w: '100px', h: '36px', fs: '0.85rem' },
  medium: { w: '140px', h: '40px', fs: '0.9rem' },
  large: { w: '180px', h: '45px', fs: '1rem' },
} as const

export const buttonVariantStyles = (theme: CustomTheme) => ({
  default: {
    base: theme.colors.brand.primary,
    hover: theme.colors.brand.primary,
  },
  primary: {
    base: theme.colors.brand.primary,
    hover: theme.colors.brand.primary,
  },
  secondary: {
    base: theme.colors.brand.secondary,
    hover: theme.colors.brand.secondary,
  },
})

export const ButtonStyled = styled.button<CommonProps>`
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 6px;
  font-weight: 500;
  color: inherit;
  transition: background-color 0.2s ease;

  width: ${({ $size = 'small' }) => ButtonSizes[$size].w};
  height: ${({ $size = 'small' }) => ButtonSizes[$size].h};
  font-size: ${({ $size = 'small' }) => ButtonSizes[$size].fs};

  background-color: ${({ theme, $variant = 'default' }) =>
    buttonVariantStyles(theme)[$variant].base};

  &:hover {
    background-color: ${({ theme, $variant = 'default' }) =>
      buttonVariantStyles(theme)[$variant].hover};
  }

  &:active {
    opacity: 0.9;
  }
`
