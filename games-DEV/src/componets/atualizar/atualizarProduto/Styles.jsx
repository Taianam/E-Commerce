import styled from 'styled-components';

export const Container = styled.div`
  background-color: #3a5ca5 ;
  width: 700px;
  padding: 20px;
  display: grid;
  align-items: center;
  justify-content: center;

  input, select{
    width: 400px;
    padding: 5px;
    border: 1px solid #ccc;
    margin: 7px 0;
    height: 35px;
    font-size: 17px;
  }

  .myswal2 {
    z-index: 30000000 !important;
  }

  .botao{
    width: 400px;
    height: 35px;
    border: 0;
    margin-top: 5px;
    color: #333;
    font-size: 17px;
    background-color:#a9c0f1 ;
    transition: 0.2s;

    &:hover{
      opacity: 0.7;
    }

  }


`