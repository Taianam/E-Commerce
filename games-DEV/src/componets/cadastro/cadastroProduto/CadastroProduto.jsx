import React, { useState } from 'react';
import api from '../../../service/api';
import { Container } from './Styles';
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.all';
import Loading from '../../loading/loading'

function CadastroProduto({categoria, obterProduto}) {

  const [newNome, setNewNome] = useState();
  const [newDescricao, setNewDescricao] = useState();
  const [newEstoque, setNewEstoque] = useState();
  const [newPreco, setNewPreco] = useState();
  const [newIDCategoria, setNewIDCategoria] = useState();
  const [newDataDeCadastro, setNewDataDeCadastro] = useState();
  const [newImagem, setNewImagem] = useState();
  const [loading, setLoading] = useState(false);

  const salvarProduto = (e) => {
    e.preventDefault();
    Swal.fire('Cadastro realizado com sucesso!')
    setLoading(true)
    const objProduto = {
      nome: newNome,
      descricao: newDescricao,
      estoque: newEstoque,
      preco: newPreco,
      dataDeCadastro: newDataDeCadastro,
      imagem: newImagem,
    }
   
    api.post(`/produtos/${newIDCategoria}`, objProduto)
    .then(() => {
      limparInputs();
      obterProduto();
      setLoading(false);
      Swal.fire('Cadastro realizado com sucesso!')
    })
    .catch((error)=>{
      setLoading(false);
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Erro ao cadastrar o produto'
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
      <form onSubmit={salvarProduto}>
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
          <option> Selecione uma categoria </option>
          {categoria.map((c)=>
           <option value={c.id}> {c.nome} </option>)}
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
        <button type="submit"> Salvar </button>
      </form>
    </Container>
  )
}

export default CadastroProduto;