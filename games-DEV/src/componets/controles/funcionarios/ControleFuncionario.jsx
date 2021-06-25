
import React, { useEffect, useState } from 'react'
import api from '../../../service/api'
import TabelaProduto from './TabelaCliente'
import Modal_ from '../../modal/modal';
import { MdAddCircleOutline} from 'react-icons/md';
import { Container, Nav } from './Styles';
import CadastraProduto from '../../cadastro/cadastroProduto/CadastroProduto'
import CustomizedBreadcrumbs from '../../nav/Nav'
import Footer from '../../footer/footer';

function ControleFuncionario(){
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

               <>
           <Nav>  <CustomizedBreadcrumbs  /></Nav>
            <Container>
            
              <h1>Controle de Funcionario</h1>
              <Modal_ 
                button={
                  <button className="btnCadastrar"> 
                    Cadastrar
                    <MdAddCircleOutline size={20} style={{marginLeft: 5}}/> 
                  </button>} 
                content={
                  <CadastraProduto 
                  categoria={categoria}
                  obterProduto={obterProduto}
                  />
                }
              />
              <TabelaProduto produtos={produtos} />
              <Footer />
            </Container>
            </>
          )
}

export default ControleFuncionario