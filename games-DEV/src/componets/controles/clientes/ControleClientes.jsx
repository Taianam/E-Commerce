import React, { useEffect, useState } from 'react'
import api from '../../../service/api'

function ControleClientes(){
    const [clientes, setClientes] = useState('');
    const [newNome, setNewNome] = useState('');
    const [newDataDeNascimento, setNewDataDeNascimento] = useState('');
    const [newTelefone, setNewTelefone] = useState('');
    const [newCpf, setNewCpf] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newSenha, setNewSenha] = useState('');
    const [newCep, setNewCep] = useState('');

    const ControleClientes = {
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
  
    useEffect (() => {obterClientes()}, [])

    const obterCliente = () =>{
        api.get("/clientes").then((response) =>{
            console.log(response.status);
            console.log(response.data);
            setClientes(response.data);
        })
    }

    React.useEffect(obterClienter(), []);

    const atualizaCliente = (id) => {
        api.put(`/clientes/${id}`).then(() => {
            obterCliente();
        })
    }

    const deletarCliente = (id) => {
        api.delete(`/clientes/${id}`).then(() => {
            obterCliente();
        })
    }

    return (
        <div>
            <h1>Lista de Clientes:</h1>
            
            
        </div>
    )
}