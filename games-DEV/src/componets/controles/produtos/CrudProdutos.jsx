import React, { useEffect, useState } from 'react'
import api from '../../../service/api'
import { TabelaProduto } from './TabelaProduto'
import Modal_ from '../../modal/modal';
import { MdAddCircleOutline } from 'react-icons/md';
import { Container, Nav } from './Styles';
import CadastraProduto from '../../cadastro/cadastroProduto/CadastroProduto'
import CustomizedBreadcrumbs from '../../nav/Nav'
import Footer from '../../footer/footer';
import Loading from '../../loading/loading';

function CrudProdutos() {

  const [produtos, setProduto] = useState([]);
  const [categoria, setCategoria] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    obterProduto()
    obterCategoria()
  }, [])

  const obterProduto = () => {
    setLoading(true)
    api.get(`/produtos`)
    .then((response) => {
      console.log(response.status);
      console.log(response.data);
      setProduto(response.data)
      setLoading(false)
    })
    .catch((error)=>{
      console.log(error)
      setLoading(false)
    })
  }
  const obterCategoria = () => {
    api.get(`/categorias`).then((response) => {
      console.log(response.status);
      console.log(response.data);
      setCategoria(response.data)
    })
  }

  const atualizaPoduto = (id) => {
    api.put(`/produtos/${id}`, produtoApi).then((response) => {
      obterProduto()
    })
  }

  return (
    <>
      <Nav>  <CustomizedBreadcrumbs /></Nav>
      <Container>
        {loading && 
          <Loading />
        }
        <h1>Controle de Produtos</h1>
        <Modal_
          button={
            <button className="btnCadastrar">
              Cadastrar
              <MdAddCircleOutline size={20} style={{ marginLeft: 5 }} />
            </button>}>
          <CadastraProduto
            categoria={categoria}
            obterProduto={obterProduto}
          />
        </Modal_ >
        <TabelaProduto 
          produtos={produtos} 
          obterProduto={obterProduto}
        />
        <Footer />
      </Container>
    </>
  )
}

export default CrudProdutos