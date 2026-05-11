import styled from 'styled-components'
import type { CustomTheme } from '#styles'

export const contextBoxVariantStyles = (theme: CustomTheme) => ({
  default: {
    base: theme.colors.brand.primary,
    hover: theme.colors.brand.primary,
    border: theme.colors.background.surface,
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

export const Panel = styled.div`
  background: #1e1e1e;
  color: #ddd;
  border-radius: 8px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  font-family: system-ui, monospace;
`

export const HeaderV2 = styled.div`
  display: flex;
  justify-content: space-between;
  height: 36px;
  background: linear-gradient(#2a2a2a, #1f1f1f);
  border-bottom: 1px solid #333;
  align-items: center;
  padding: 0 10px;
  cursor: grab;
  font-size: 13px;
`

export const Body = styled.div`
  background: #1e1e1e;
  padding: 0 10px;
  font-size: 12px;
`

export const Box = styled.div<{ $isCollapsed: boolean }>`
  background-color: ${({ theme }) => contextBoxVariantStyles(theme).default.base};
  border: 1px solid ${({ theme }) => contextBoxVariantStyles(theme).default.border};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  height: ${({ $isCollapsed }) => ($isCollapsed ? 'auto' : '100%')};
  color: ${({ theme }) => contextBoxVariantStyles(theme).default.base};
`

export const Header = styled.div`
  background-color: ${({ theme }) => contextBoxVariantStyles(theme).default.base};
  padding: 0.5rem;
  font-weight: bold;
  cursor: move;
  color: ${({ theme }) => contextBoxVariantStyles(theme).default.base};
`

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CollapseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: ${({ theme }) => contextBoxVariantStyles(theme).default.base};

  &:hover {
    background-color: ${({ theme }) => contextBoxVariantStyles(theme).default.base};
  }
`

export const Content = styled.div`
  flex: 1;
  overflow: auto;
  padding: 0.5rem;
  font-size: 0.9rem;
`

export const ItemWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => contextBoxVariantStyles(theme).default.border};
  margin-bottom: 0.25rem;
`

export const ItemButton = styled.button`
  width: 100%;
  text-align: left;
  padding: 0.25rem 0.5rem;
  font-weight: 500;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 4px;
  color: ${({ theme }) => contextBoxVariantStyles(theme).default.base};

  &:hover {
    background-color: ${({ theme }) => contextBoxVariantStyles(theme).default.base};
  }
`
