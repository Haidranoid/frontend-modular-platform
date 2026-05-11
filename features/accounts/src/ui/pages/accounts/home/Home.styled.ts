import styled from 'styled-components'

export const HomeStyled = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 20px;
`

export const AccountsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th,
  td {
    border-bottom: 1px solid #444;
    padding: 10px;
    text-align: left;
  }

  td a {
    margin-right: 10px;
  }
`
