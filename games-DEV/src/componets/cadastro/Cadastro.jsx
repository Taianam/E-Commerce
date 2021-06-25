import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import api from '../../service/api';

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

  const classes = useStyles();


  return (
    <form className={classes.root} noValidate onSubmit={handleSubmit}>
      <TextField
        className={classes.margin}
        label="Nome"
        variant="outlined"
        type="string"
        id="mui-theme-provider-outlined-input"
        value={newNome}
        onChange={n => setNewNome(n.target.value)}
      />

      <TextField
        className={classes.margin}
        label="Data de Nascimento"
        variant="outlined"
        type="string"
        id="mui-theme-provider-outlined-input"
        value={newDataDeNascimento}
                onChange={data => setNewDataDeNascimento(data.target.value)}
      />

      <TextField
        className={classes.margin}
        label="Telefone"
        variant="outlined"
        type="string"
        id="mui-theme-provider-outlined-input"
        value={newTelefone}
        onChange={telefone => setNewTelefone(telefone.target.value)}
      />

      <TextField
        className={classes.margin}
        label="Cpf"
        variant="outlined"
        type="string"
        id="mui-theme-provider-outlined-input"
        value={newCpf}
        onChange={cpf => setNewCpf(cpf.target.value)}
      />

      <TextField
        className={classes.margin}
        label="Email"
        variant="outlined"
        type="string"
        id="mui-theme-provider-outlined-input"
        value={newEmail}
        onChange={email => setNewEmail(email.target.value)}
      />

      <TextField
        className={classes.margin}
        label="Senha"
        variant="outlined"
        type="password"
        id="mui-theme-provider-outlined-input"
        value={newSenha}
        onChange={senha => setNewSenha(senha.target.value)}
      />

      <TextField
        className={classes.margin}
        label="Cep"
        variant="outlined"
        type="string"
        id="mui-theme-provider-outlined-input"
        value={newCep}
        onChange={cep => setNewCep(cep.target.value)}
      />

      <button type='submit' >Enviar</button>
    </form>
  );
}
