import { styled } from '@material-ui/core';
import React, { useState } from 'react'
import { Produto } from './StyleCard'


function Card(props) {

  const {id, nome, descricao, preco, estoque, imagem } = props.produto;

  return (
    <Produto>
      <div className="info" >
        <h3>{nome}</h3>
        <img id="imagem" src={imagem} alt="" />
        <p>{descricao}</p>
      </div>
      <div className="comprar">
        <p className={estoque > 0 ? "qtd": "notqtd"}> 
          Estoque: {estoque}
        </p>
        <p>Preço: {preco}</p>
        <button type="button" onClick={() => props.comprar(id)}>Comprar</button>
      </div>
    </Produto>
  )
}

export default Card;