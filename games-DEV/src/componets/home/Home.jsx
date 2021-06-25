import React, { useEffect, useState } from 'react'
import CustomizedBreadcrumbs from '../nav/Nav'
import { Container, Nav, Filtro } from './Styles';
import Card from '../card/Card';
import api from '../../service/api';
import Footer from '../footer/footer';
import NotfoundProduto from '../notfound/produtoNotFound/ProdutoNotFound';
import Loading from '../loading/loading';
import { BsSearch } from 'react-icons/bs';
import Slide from '../carrossel/Slide';
import Carrinho from '../carrinho/Carrinho'


function Home() {
  const [produtos, setProdutos] = useState([]);
  const [produtosFiltrado, setProdutosFiltrado] = useState([]);
  const [loading, setLoading] = useState(false);
  const [carrinho, setCarrinho] = React.useState([]);

  const obterProduto = () => {
    setLoading(true)
    api.get(`/produtos`).then((response) => {
      console.log(response.status);
      console.log(response.data);
      setProdutos(response.data)
      setProdutosFiltrado(response.data)
      setLoading(false)
    }).catch(()=>{
      setLoading(false)
    })
  }

  useEffect(() => {
    obterProduto();
  }, [])

  const filtrarProduto = (nome) => {
    let resultado = produtos.filter((produto) => {
      if (produto.nome.toLowerCase().includes(nome.toLowerCase())) {
        return produto;
      }
    })

    if (nome === "") {
      setProdutosFiltrado(produtos)
    } else {
      setProdutosFiltrado(resultado);
    }
  }

  const handleComprar = (id) => {
    setCarrinho ((anterior) => [...anterior, id])
    console.log(carrinho);
  }

  return (
    <Container>
      {loading && 
        <Loading />
      }

      <Nav > <CustomizedBreadcrumbs carrinho={carrinho.length}/></Nav>
      <Slide/>
      <Filtro>
        <input
          type="text"
          placeholder="Pesquise um jogo "
          onChange={e => filtrarProduto(e.target.value)} />
          <span>
            <BsSearch size={28} style={{color: '#fff'}}/>
           </span>
      </Filtro>
      <main>
        {produtosFiltrado.length > 0 ?
          <div className="produtos">
            {produtosFiltrado.map((p) =>
              <div key={p.id}>
                <Card produto={p} comprar={handleComprar}/>
              </div>)
            }
          </div>
        :
          <NotfoundProduto/>
        }
      </main>
      <Footer />
    </Container>
  )
}

export default Home;