import React, { useEffect, useState } from 'react'
import{FiDelete, FiCheckCircle} from 'react-icons/fi'
import { Cadastrar, Tasks } from './styles'
import api from '../../../service/api'


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

const produtoApi={
    nome: newNome,
    descricao: newDescricao,
    estoque: newEstoque,
    preco: newPreco,
    categoria: newIDCategoria,
    dataDeCadastro: newDataDeCadastro,
    imagem: newImagem,

}

useEffect(() => {obterProduto() }, [])

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
  const  salvarProduto= (id)=>{ 
      api.post(`/produtos/${id}`, produtoApi).then((response)=>{

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
const  atualizaPoduto= (id)=>{
  
        api.put(`/produtos/${id}`, produtoApi).then((response) => {
    
        obterProduto()
    })
}

const  deletarProduto=(id)=>{     
     api.delete(`/produtos/${id}` ).then(() => {
    
     obterProduto()})

}


  return (

    <div>
            <h1>Lista de produtos</h1>
            <Cadastrar>
            <input 
                type="text" value={newNome}
                placeholder="Seu nome"
                onChange={e => setNewNome(e.target.value)}
            />
            <button type="button">Criar</button>
            </Cadastrar>
            <Tasks>
            {produtos.map((p) => (
                <div key={p.id} ><strong>{p.nome}</strong>
                <span>
                    
                    <>
                    <FiDelete size={22} onClick={()=>deletarProduto(p.id)}/>
                    <FiCheckCircle size={22} onClick={()=>atualizaPoduto(p.id)}/>
                    </>
               
                </span>
                
                </div>
            
            ))}
            </Tasks>
        </div>
    
  );
}

export default CrudProdutos