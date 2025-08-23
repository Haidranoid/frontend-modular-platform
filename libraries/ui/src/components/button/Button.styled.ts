import styled from 'styled-components'

//background-color: ${({ theme }) => theme.primary};
//color: ${({ theme }) => theme.text};

export const ButtonStyled = styled.button`
  background-color: ${({ theme }) => 'blue'};
  color: ${({ theme }) => 'white'};
  border: none;
  padding: 0.75rem 1rem;
  cursor: pointer;
`
