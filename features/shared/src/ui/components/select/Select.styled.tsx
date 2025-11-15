import styled from 'styled-components'

export const SelectWrapperStyled = styled.div<{ $fullWidth: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  gap: 4px;
`

export const LabelStyled = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 4px;
`

export const SelectStyled = styled.select<{
  $fullWidth: boolean
  $size: 'small' | 'medium' | 'large'
}>`
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  padding: ${({ $size }) =>
    $size === 'small' ? '6px 8px' : $size === 'large' ? '12px 14px' : '8px 12px'};

  border-radius: 6px;
  border: 1px solid #aaa;
  background: #fff;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #03a9f4;
    box-shadow: 0 0 0 2px rgba(3, 169, 244, 0.25);
  }
`
