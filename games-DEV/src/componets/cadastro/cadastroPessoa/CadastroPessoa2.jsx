import React, { useState } from 'react';
import { Container } from './Styles'

function CadastroProduto(){

  const [newNome, setNewNome] = useState('');
  const [newDataDeNascimento, setNewDataDeNascimento] = useState('');
  const [newTelefone, setNewTelefone] = useState('');
  const [newCpf, setNewCpf] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newSenha, setNewSenha] = useState('');
  const [newCep, setNewCep] = useState('');

  const cliente = {
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

  const handleSubmit = (event) =>{ 
        event.preventDefault()
        api.post(`/clientes`, cliente).then(() => {
        setNewNome(" ");
        setNewDataDeNascimento(" ");
        setNewTelefone(" ");
        setNewCpf(" ");
        setNewEmail(" ");
        setNewSenha(" ");
        setNewCep(" ");
    })
  }

  return(
    <Container>
        <input type="text" placeholder="Digite um nome"/>
        <input type="text" placeholder="Digite um email"/>
        <input type="text" placeholder="Digite um senha"/>
        <input type="text" placeholder="Digite um nome"/>
        <input type="text" placeholder="Digite um nome"/>
        <button> Salvar </button>
    </Container>
  )
}

export default CadastroProduto;