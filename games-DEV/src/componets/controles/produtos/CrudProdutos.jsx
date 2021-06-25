import React, { useEffect, useState } from 'react'
import api from '../../../service/api'
import TabelaProduto from './TabelaProduto'
import Modal_ from '../../modal/modal';
import { MdAddCircleOutline} from 'react-icons/md';
import { Container } from './Styles'

function CrudProdutos() {
  const [produtos, setProduto] = useState([]);
  const [categoria, setCategoria] = useState([]);
  const [newNome, setNewNome] = useState();
  const [newDescricao, setNewDescricao] = useState();
  const [newEstoque, setNewEstoque] = useState();
  const [newPreco, setNewPreco] = useState();
  const [newIDCategoria, setNewIDCategoria] = useState();
  const [newDataDeCadastro, setNewDataDeCadastro] = useState();
  const [newImagem, setNewImagem] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const produtoApi = {
    nome: newNome,
    descricao: newDescricao,
    estoque: newEstoque,
    preco: newPreco,
    categoria: newIDCategoria,
    dataDeCadastro: newDataDeCadastro,
    imagem: newImagem,
  }

  useEffect(() => { 
    obterProduto() 
  },[])

  const obterProduto = () => {
    api.get(`/produtos`).then((response) => {
      console.log(response.status);
      console.log(response.data);
      setProduto(response.data)
    })
  }
  const obterCategoria = () => {
    api.get(`/categorias`).then((response) => {
      console.log(response.status);
      console.log(response.data);
      setCategoria(response.data)
    })
  }
  const salvarProduto = (id) => {
    api.post(`/produtos/${id}`, produtoApi).then((response) => {
      setNewNome(" ");
      setNewDescricao(" ");
      setNewEstoque(" ");
      setNewPreco(" ");
      setNewIDCategoria(" ");
      setNewDataDeCadastro(" ");
      setNewImagem(" ");
      obterProduto();
    });

  }
  const atualizaPoduto = (id) => {
    api.put(`/produtos/${id}`, produtoApi).then((response) => {
      obterProduto()
    })
  }

  const deletarProduto = (id) => {
    api.delete(`/produtos/${id}`).then(() => {
      obterProduto()
    })
  }

  return (
    <Container>
      <h1>Controle de Produtos</h1>
      <Modal_ 
        button={
          <button className="btnCadastrar"> 
            Cadastrar
            <MdAddCircleOutline size={20} style={{marginLeft: 5}}/> 
          </button>} 
      />
      <TabelaProduto produtos={produtos} />
    </Container>
  )
}

export default CrudProdutos