import React, { useEffect, useState } from 'react'
import api from '../../../service/api'
import TabelaFuncionario from './TabelaFuncionario'
import Modal_ from '../../modal/modal';
import { MdAddCircleOutline } from 'react-icons/md';
import { Container, Nav } from './Styles';
import CadastraProduto from '../../cadastro/cadastroProduto/CadastroProduto'
import CustomizedBreadcrumbs from '../../nav/Nav'
import Footer from '../../footer/footer';
import Loading from '../../loading/loading';

function ControleFuncionario() {

  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    obterCliente()
  }, [])

  const obterCliente = () => {
    setLoading(true)
    api.get("/clientes")
    .then((response) => {
      console.log(response.status);
      console.log(response.data);
      setClientes(response.data);
      setLoading(false)
    })
    .catch((error)=>{
      console.log(error)
      setLoading(false)
    })
  }

  const atualizaCliente = (id) => {
    api.put(`/clientes/${id}`).then(() => {
      obterCliente();
    })
  }

  return (
    <>
      <Nav>  <CustomizedBreadcrumbs /></Nav>
      <Container>
        {loading &&
          <Loading />
        }
        <h1>Controle de Funcionario</h1>
        <TabelaFuncionario clientes={clientes} obterCliente={obterCliente} />
        <Footer />
      </Container>
    </>
  )
}

export default ControleFuncionario