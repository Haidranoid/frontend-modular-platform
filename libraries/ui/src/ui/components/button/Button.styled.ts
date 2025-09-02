import styled from 'styled-components'
import { ButtonProps } from './Button'

export const ButtonStyled = styled.button<Omit<ButtonProps,'label'>>`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 4px;
  color: inherit;
  
  background-color: ${({ theme, primary }) =>
    primary ? theme.colors.primary : theme.colors.secondary};
  width: ${({ size }) =>
    size === 'small' ? '100px' : size === 'medium' ? '115px' : '125px'};
  height: ${({ size }) =>
    size === 'small' ? '40px' : size === 'medium' ? '40px' : '45px'};
`
