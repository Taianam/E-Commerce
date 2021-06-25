import React, { useState, useEffect } from 'react';
import api from '../../../service/api';
import { Container } from './Styles';
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.all';
import Loading from '../../loading/loading'

function AtualizarFuncionario({funcionario, obterFuncionario}) {

  
  const [newNome, setNewNome] = useState(funcionario.nome);
  const [newDataDeNascimento, setNewDataDeNascimento] = useState(funcionario.dataDeNascimento);
  const [newTelefone, setNewTelefone] = useState(funcionario.telefone);
  const [newCpf, setNewCpf] = useState(funcionario.cpf);
  const [newEmail, setNewEmail] = useState(funcionario.email);
  const [newSenha, setNewSenha] = useState(funcionario.senha);
  const [newCep, setNewCep] = useState(funcionario.endereco.cep);
  const [loading, setLoading] = useState(false)

  const atualizarFuncionario = (e) => {
    e.preventDefault();
    setLoading(true)

    const objFuncionario = {
      nome: newNome,
      dataDeNascimento: newDataDeNascimento,
      telefone: newTelefone,
      cpf: newCpf,
      email: newEmail,
      senha: newSenha,
      endereco: {
          cep: newCep,
      }
    };
   console.log(objFuncionario)
    api.put(`/clientes/${funcionario.id}`, objFuncionario)
    .then(() => {
      limparInputs();
      obterProduto();
      setLoading(false);
      Swal.fire('Cliente atulizado com sucesso!')
    })
    .catch((error)=>{
      setLoading(false);
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Erro ao atulizar o cliente'
      })
    });
  }

  function limparInputs() {
    setNewNome("");
    setNewCep("");
    setNewCpf("");
    setNewDataDeNascimento("");
    setNewEmail("");
    setNewTelefone("");
  }

  return (
    <Container>
      {loading && 
        <Loading />
      }
      <form onSubmit={atualizarFuncionario}>
        <input
          type="text"
          value={newNome}
          placeholder="Digite seu nome"
          onChange={e => setNewNome(e.target.value)}
        />
        <input
          type="password"
          value={newSenha}
          placeholder="Digite senha"
          onChange={e => setNewSenha(e.target.value)}
        />
        <input
          type="text"
          value={newTelefone}
          placeholder="Digite seu telefone"
          onChange={e => setNewTelefone(e.target.value)}
        />
        <input
          type="text"
          value={newCpf}
          placeholder="Digite seu cpf"
          onChange={e => setNewCpf(e.target.value)}
        />
        <input
          type="text"
          value={newEmail}
          placeholder="Digite seu email"
          onChange={e => setNewEmail(e.target.value)}
        />
        <input
          type="date"
          value={newDataDeNascimento}
          onChange={e => setNewDataDeNascimento(e.target.value)}
        />
        <input
          type="text"
          value={newCep}
          placeholder="Digite seu cep"
          onChange={e => setNewCep(e.target.value)}
        />
        <div>
          <button type="submit" className="botao"> Atualizar </button>
        </div>
    
      </form>
    </Container>
  )
}

export default AtualizarFuncionario;