import styled from 'styled-components'

export const ButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  border: none;
  padding: 0.75rem 1rem;
  cursor: pointer;
`
