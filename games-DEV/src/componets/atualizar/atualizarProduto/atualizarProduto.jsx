import React, { useState, useEffect } from 'react';
import api from '../../../service/api';
import { Container } from './Styles';
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.all';
import Loading from '../../loading/loading'

function AtualizarProduto({produto, obterProduto}) {

  const [newNome, setNewNome] = useState(produto.nome);
  const [newDescricao, setNewDescricao] = useState(produto.descricao);
  const [newEstoque, setNewEstoque] = useState(produto.estoque);
  const [newPreco, setNewPreco] = useState(produto.preco);
  const [newIDCategoria, setNewIDCategoria] = useState(produto.categoria.id);
  const [newDataDeCadastro, setNewDataDeCadastro] = useState(produto.dataDeCadastro);
  const [newImagem, setNewImagem] = useState(produto.imagem);
  const [categoria, setCategoria] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    obterCategoria()
  },[])

  const obterCategoria = () => {
    api.get(`/categorias`).then((response) => {
      console.log(response.status);
      console.log(response.data);
      setCategoria(response.data)
    })
  }

  const atualizarProduto = (e) => {
    e.preventDefault();
    setLoading(true)

    const objProduto = {
      nome: newNome,
      descricao: newDescricao,
      estoque: newEstoque,
      preco: newPreco,
      dataDeCadastro: newDataDeCadastro,
      imagem: newImagem,
      categoria: {
        id: newIDCategoria
      }
    }
   
    api.put(`/produtos/${produto.id}`, objProduto)
    .then(() => {
      limparInputs();
      obterProduto();
      setLoading(false);
      Swal.fire('Produto atulizado com sucesso!')
    })
    .catch((error)=>{
      setLoading(false);
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Erro ao atulizar o produto'
      })
    });
  }

  function limparInputs() {
    setNewNome("");
    setNewDescricao("");
    setNewEstoque("");
    setNewPreco("");
    setNewDataDeCadastro("");
    setNewImagem("");
  }

  return (
    <Container>
      {loading && 
        <Loading />
      }
      <form onSubmit={atualizarProduto}>
        <input
          type="text"
          value={newNome}
          placeholder="Digite o nome do produto"
          onChange={e => setNewNome(e.target.value)}
        />
        <input
          type="text"
          value={newDescricao}
          placeholder="Digite uma descrição"
          onChange={e => setNewDescricao(e.target.value)}
        />
        <select onChange={e=> setNewIDCategoria(e.target.value)}>
          <option> Selecione a categoria </option>
           {categoria.map((c)=>
           <option key={c.id} value={c.id}> {c.nome} </option>)} 
        </select> 
        <input
          type="text"
          value={newEstoque}
          placeholder="Digite a quantidade de estoque"
          onChange={e => setNewEstoque(e.target.value)}
        />
        <input
          type="text"
          value={newPreco}
          placeholder="Digite um Preço"
          onChange={e => setNewPreco(e.target.value)}
        />
        <input
          type="date"
          value={newDataDeCadastro}
          placeholder="Digite uma data de cadastro"
          onChange={e => setNewDataDeCadastro(e.target.value)}
        />
        <input
          type="text"
          value={newImagem}
          placeholder="Url da imagem do produto"
          onChange={e => setNewImagem(e.target.value)}
        />
        <div>
        <button type="submit" className="botao"> Atualizar </button>
        </div>
    
      </form>
    </Container>
  )
}

export default AtualizarProduto;