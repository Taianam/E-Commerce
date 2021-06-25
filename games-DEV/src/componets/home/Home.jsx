import React, { useEffect, useState } from 'react'
import CustomizedBreadcrumbs from '../nav/Nav'
import { Container,Nav } from './Styles.jsx';
import Card from '../card/Card';
import api from '../../service/api';
import Footer from '../footer/footer';

// import Slide from '../carrossel/Slide'


function Home() {
  const [produtos, setProduto] = useState([]);

  const obterProduto = () => {
    api.get(`/produtos`).then((response) => {
      console.log(response.status);
      console.log(response.data);
      setProduto(response.data)

    })
  }

  useEffect(() => {
    obterProduto();
  }, [])

  return (

    <Container>
      <Nav> <CustomizedBreadcrumbs /></Nav>

      <main>
        <div  className="produtos">
          {produtos.map((p) =>
            <div key={p.id}><Card  produto={p} /></div>)}
        </div>
      </main>
      <Footer />
    </Container>


  )
}

export default Home;