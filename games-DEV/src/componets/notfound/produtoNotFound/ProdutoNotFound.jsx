import React from "react";
import Not from '../../../../assets/not.svg'

function NotfoundProduto() {
  return (
    <div style={{width:'100%', display: 'flex', justifyContent: 'center'}}>
      <img 
        src={Not}
        width="20%" 
      />
    </div>
  );
}

export default NotfoundProduto;