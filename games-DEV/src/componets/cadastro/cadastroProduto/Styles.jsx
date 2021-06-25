import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
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

  .my-swal {
    z-index: 300000!important;
  }
`