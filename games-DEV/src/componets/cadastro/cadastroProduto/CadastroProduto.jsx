import React, { useState } from 'react';
import { Container } from './Styles'

function CadastroProduto(){

  const [newNome, setNewNome] = useState();
  const [newDescricao, setNewDescricao] = useState();
  const [newEstoque, setNewEstoque] = useState();
  const [newPreco, setNewPreco] = useState();
  const [newIDCategoria, setNewIDCategoria] = useState();
  const [newDataDeCadastro, setNewDataDeCadastro] = useState();
  const [newImagem, setNewImagem] = useState();

  const salvarProduto = (id) => {

    const objProduto = {
      nome: newNome,
      descricao: newDescricao,
      estoque: newEstoque,
      preco: newPreco,
      categoria: newIDCategoria,
      dataDeCadastro: newDataDeCadastro,
      imagem: newImagem,
    }

    api.post(`/produtos/${id}`, objProduto).then(() => {
      setNewNome("");
      setNewDescricao("");
      setNewEstoque("");
      setNewPreco("");
      setNewDataDeCadastro("");
      setNewImagem("");
      obterProduto();
      alert("Cadastro realizado com sucesso!")
    });

  }

  return(
    <Container>
        <input type="text" placeholder="Digite um nome"/>
        <input type="text" placeholder="Digite um descrição"/>
        <input type="text" placeholder="Digite um estoque"/>
        <input type="text" placeholder="Digite um Preço"/>
        <input type="text" placeholder="Digite um Data de Cadastro"/>
        <input type="text" placeholder="Digite uma imagem"/>
        <button> Salvar </button>
    </Container>
  )
}

export default CadastroProduto;