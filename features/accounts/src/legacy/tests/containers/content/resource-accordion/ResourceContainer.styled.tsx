import styled from 'styled-components'

const ResourceContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 768px), screen and (max-width: 1025px) {
    flex-direction: column;
    align-items: flex-start;
  }

  div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    @media screen and (max-width: 768px), screen and (max-width: 1025px) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 15px;
    }
    img {
      border-radius: 1%;
      background-size: cover;
      background-position: center;
      box-shadow: 1px 1px 21px 2px rgba(0, 0, 0, 0.66);
      -webkit-box-shadow: 1px 1px 21px 2px rgba(0, 0, 0, 0.66);
      -moz-box-shadow: 1px 1px 21px 2px rgba(0, 0, 0, 0.66);
    }
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px 20px;
    width: 100%;
    height: 280px;
    overflow-y: auto;
    &:focus {
      outline: cyan 2px solid;
    }

    border-radius: 1%;
    box-shadow: 1px 1px 21px 2px rgba(0, 0, 0, 0.66);
    -webkit-box-shadow: 1px 1px 21px 2px rgba(0, 0, 0, 0.66);
    -moz-box-shadow: 1px 1px 21px 2px rgba(0, 0, 0, 0.66);
  }
`

export default ResourceContainerStyled
