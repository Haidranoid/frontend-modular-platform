import styled from 'styled-components'

const sizes = {
  small: { h: '30px', fs: '0.85rem' },
  medium: { h: '32px', fs: '0.9rem' },
  large: { h: '36px', fs: '1rem' },
}

export const SelectWrapperStyled = styled.div<{ $fullWidth: boolean }>`
  display: flex;
  flex-direction: column;
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
  width: 100%;

  height: ${({ $size = 'medium' }) => sizes[$size].h};
  font-size: ${({ $size = 'medium' }) => sizes[$size].fs};

  padding: 0 10px;
  border-radius: 6px;
  border: 1px solid #aaa;
  background: #fff;

  &:focus {
    outline: none;
    border-color: #03a9f4;
    box-shadow: 0 0 0 2px rgba(3, 169, 244, 0.25);
  }
`
