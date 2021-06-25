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
function Home() {
  const [produtos, setProdutos] = useState([]);
  const [produtosFiltrado, setProdutosFiltrado] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <Container>
      {loading && 
        <Loading />
      }
      <Nav> <CustomizedBreadcrumbs /></Nav>
      <Slide/>
      <Filtro>
        <input
          type="text"
          placeholder="Ditige um gamer"
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
                <Card produto={p} />
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