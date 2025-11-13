import styled from 'styled-components'

export const Container = styled.div<{ $level: number }>`
  margin-left: ${({ $level }) => ($level > 0 ? '1rem' : '0')};
  border-left: ${({ $level, theme }) =>
    $level > 0
      ? `1px solid ${theme.foreground.secondary || theme.foreground.primary}`
      : 'none'};
  padding-left: ${({ $level }) => ($level > 0 ? '0.5rem' : '0')};
  font-family: monospace;
  color: ${({ theme }) => theme.text.primary};
`

export const ItemButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  padding: 2px 4px;
  border-radius: 4px;
  color: ${({ theme }) => theme.text.primary};

  &:hover {
    background-color: ${({ theme }) =>
      theme.background.secondary || theme.foreground.primary};
  }
`

export const KeyLabel = styled.span`
  font-weight: 600;
`

export const PrimitiveValue = styled.span`
  margin-left: 0.25rem;
  color: ${({ theme }) => theme.colors.primary};
`

export const NullValue = styled.span`
  color: ${({ theme }) => theme.text.secondary};
`
