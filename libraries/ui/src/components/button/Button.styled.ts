import styled from 'styled-components'
import { ButtonProps } from './Button'

//background-color: ${({ theme }) => theme.background.primary};
//color: ${({ theme }) => theme.text.primary};

export const ButtonStyled = styled.button<ButtonProps>`
  background-color: ${({}) => '#4dabf7'};
  color: ${({}) => '#f1f3f5'};
  cursor: pointer;
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 4px;

  width: ${({ size }) =>
    size === 'small' ? '100px' : size === 'medium' ? '115px' : '125px'};
  height: ${({ size }) =>
    size === 'small' ? '40px' : size === 'medium' ? '40px' : '45px'};
`
