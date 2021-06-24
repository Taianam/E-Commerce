import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import styled from "styled-components";
import api from '../../service/api';

const Estilo = styled.div`
    border-radius: 0.8rem;
    background: rgba( 225, 225, 255, 0.5);
    color: black;`

export default function FormPropsTextFields() {

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

  return (
 
    <form autoComplete="off" onSubmit={handleSubmit}>
        <Estilo>
            <div>   
                <h1>Cadastro</h1>
                <TextField required id="standard-nome-input" 
                name="Nome"
                label="Nome completo"
                value={newNome}
                onChange={n => setNewNome(n.target.value)}

                />

                <TextField id="standard-data-input" 
                label="Data de Nascimento" 
                value={newDataDeNascimento}
                onChange={data => setNewDataDeNascimento(data.target.value)}
                />

                <TextField
                id="standard-telefone-input"
                label="Telefone"
                type="string"
                value={newTelefone}
                onChange={telefone => setNewTelefone(telefone.target.value)}
                />

                <TextField
                id="standard-cpf-input"
                label="Cpf"
                type="string"
                value={newCpf}
                onChange={cpf => setNewCpf(cpf.target.value)}
                />


                <TextField id="standard-email-input" 
                label="E-mail"
                value={newEmail}
                onChange={email => setNewEmail(email.target.value)}
                />

                <TextField
                id="standard-password-input"
                label="Senha"
                type="password"
                value={newSenha}
                onChange={senha => setNewSenha(senha.target.value)}
                />

                <TextField
                id="standard-cep-input"
                label="Cep"
                type="string"
                value={newCep}
                onChange={cep => setNewCep(cep.target.value)}
                />
                
                <button type='submit'>Enviar</button>
            </div>
        </Estilo>
    </form>

  );
}