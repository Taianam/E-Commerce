import React from 'react';
import { Container } from './Styles'
import PacmanLoader from "react-spinners/PacmanLoader.js";

function Loading(){
  return (
    <Container> 
      <span style={{marginRight: 40}}>
        <PacmanLoader 
          color={'#eef52a'}  
          size={60} 
        /> 
      </span>
    </Container>
  )
}

export default Loading;