import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import api from '../../../service/api';
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CustomizedBreadcrumbs from '../../nav/Nav'
import { Container, Nav, Filtro } from '../../home/Styles';

const Estilo = styled.div`
    border-radius: 0.8rem;
    background: rgba( 225, 225, 255, 0.5);
    color: black;`


    const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
      },
      margin: {
        margin: theme.spacing(1)
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    }));
    
export default function CadastroCliente() {
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
              <Nav> <CustomizedBreadcrumbs /></Nav>
                <h1>Cadastro</h1>
                
                <Grid item xs={12}>
                  <Paper className={classes.paper}><TextField className={classes.margin} required id="standard-nome-input" 
                    name="Nome"
                    label="Nome completo"
                    variant="outlined"
                    id="mui-theme-provider-outlined-input"
                    value={newNome}
                    onChange={n => setNewNome(n.target.value)}
                /></Paper>               
                </Grid>
                
                <Grid item xs={12}>
                  <Paper className={classes.paper}><TextField className={classes.margin} id="standard-data-input" 
                    label="Data de Nascimento" 
                    variant="outlined"
                    id="mui-theme-provider-outlined-input"
                    value={newDataDeNascimento}
                    onChange={data => setNewDataDeNascimento(data.target.value)}
                  /></Paper>
                </Grid>

                <Grid item xs={12}>
                  <Paper className={classes.paper}><TextField className={classes.margin}
                    id="standard-telefone-input"
                    label="Telefone"
                    variant="outlined"
                    id="mui-theme-provider-outlined-input"
                    type="string"
                    value={newTelefone}
                    onChange={telefone => setNewTelefone(telefone.target.value)}
                  /></Paper>
                </Grid>
                
                <Grid item xs={12}>
                  <Paper className={classes.paper}><TextField className={classes.margin}
                    id="standard-cpf-input"
                    label="Cpf"
                    variant="outlined"
                    id="mui-theme-provider-outlined-input"
                    type="string"
                    value={newCpf}
                    onChange={cpf => setNewCpf(cpf.target.value)}
                  /></Paper>
                </Grid>

                <Grid item xs={12}>
                  <Paper className={classes.paper}><TextField className={classes.margin} id="standard-email-input" 
                    label="E-mail"
                    variant="outlined"
                    id="mui-theme-provider-outlined-input"
                    value={newEmail}
                    onChange={email => setNewEmail(email.target.value)}
                  /></Paper>
                </Grid>

                <Grid item xs={12}>
                  <Paper className={classes.paper}><TextField className={classes.margin}
                    id="standard-password-input"
                    label="Senha"
                    variant="outlined"
                    id="mui-theme-provider-outlined-input"
                    type="password"
                    value={newSenha}
                    onChange={senha => setNewSenha(senha.target.value)}
                  /></Paper>
                </Grid>

                <Grid item xs={12}>
                  <Paper className={classes.paper}><TextField className={classes.margin}
                    id="standard-cep-input"
                    label="Cep"
                    variant="outlined"
                    id="mui-theme-provider-outlined-input"
                    type="string"
                    value={newCep}
                    onChange={cep => setNewCep(cep.target.value)}
                  /></Paper>
                </Grid>

                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                  <Button variant="contained" color="primary" >
                    Cadastrar
                  </Button>
                </Paper>
                </Grid>

                
            </div>
        </Estilo>
        
    </form>
  );
}