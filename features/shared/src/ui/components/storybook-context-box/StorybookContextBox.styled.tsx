import styled from 'styled-components'

export const Box = styled.div<{ collapsed: boolean }>`
  background: ${({ theme }) => theme.background.primary};
  border: 1px solid ${({ theme }) => theme.foreground.primary};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  height: ${({ collapsed }) => (collapsed ? 'auto' : '100%')};
  color: ${({ theme }) => theme.text.primary};
`

export const Header = styled.div`
  background: ${({ theme }) => theme.foreground.primary};
  padding: 0.5rem;
  font-weight: bold;
  cursor: move;
  color: ${({ theme }) => theme.text.primary};
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
  color: ${({ theme }) => theme.text.primary};

  &:hover {
    background-color: ${({ theme }) =>
      theme.background.secondary || theme.foreground.primary};
  }
`

export const Content = styled.div`
  flex: 1;
  overflow: auto;
  padding: 0.5rem;
  font-size: 0.9rem;
`

export const ItemWrapper = styled.div`
  border-bottom: 1px solid
    ${({ theme }) => theme.foreground.secondary || theme.foreground.primary};
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
  color: ${({ theme }) => theme.text.primary};

  &:hover {
    background-color: ${({ theme }) =>
      theme.background.secondary || theme.foreground.primary};
  }
`
