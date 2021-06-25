import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import api from '../../service/api';
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Estilo = styled.div`
    border-radius: 0.8rem;
    background: rgba( 225, 225, 255, 0.5);
    color: black;`


    const useStyles = makeStyles((theme) => ({
      root: {
        display: "flex",
        flexWrap: "wrap"
      },
      margin: {
        margin: theme.spacing(1)
      }
    }));

export default function CustomizedInputs() {
  const classes = useStyles();

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
 
    <form autoComplete="off" onSubmit={handleSubmit} className={classes.root} noValidate>
        <Estilo>
            <div>   
                <h1>Cadastro</h1>
                <TextField className={classes.margin} required id="standard-nome-input" 
                name="Nome"
                label="Nome completo"
                variant="outlined"
                id="mui-theme-provider-outlined-input"
                value={newNome}
                onChange={n => setNewNome(n.target.value)}

                />

                <TextField className={classes.margin} id="standard-data-input" 
                label="Data de Nascimento" 
                variant="outlined"
                id="mui-theme-provider-outlined-input"
                value={newDataDeNascimento}
                onChange={data => setNewDataDeNascimento(data.target.value)}
                />

                <TextField className={classes.margin}
                id="standard-telefone-input"
                label="Telefone"
                variant="outlined"
                id="mui-theme-provider-outlined-input"
                type="string"
                value={newTelefone}
                onChange={telefone => setNewTelefone(telefone.target.value)}
                />

                <TextField className={classes.margin}
                id="standard-cpf-input"
                label="Cpf"
                variant="outlined"
                id="mui-theme-provider-outlined-input"
                type="string"
                value={newCpf}
                onChange={cpf => setNewCpf(cpf.target.value)}
                />


                <TextField className={classes.margin} id="standard-email-input" 
                label="E-mail"
                variant="outlined"
                id="mui-theme-provider-outlined-input"
                value={newEmail}
                onChange={email => setNewEmail(email.target.value)}
                />

                <TextField className={classes.margin}
                id="standard-password-input"
                label="Senha"
                variant="outlined"
                id="mui-theme-provider-outlined-input"
                type="password"
                value={newSenha}
                onChange={senha => setNewSenha(senha.target.value)}
                />

                <TextField className={classes.margin}
                id="standard-cep-input"
                label="Cep"
                variant="outlined"
                id="mui-theme-provider-outlined-input"
                type="string"
                value={newCep}
                onChange={cep => setNewCep(cep.target.value)}
                />

                <Link to="/home" className={classes.link} >
                  <Button variant="contained" color="primary" >
                    Cadastrar
                  </Button>
                </Link>
            </div>
        </Estilo>
    </form>

  );
}