import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { FaTrashRestoreAlt} from 'react-icons/fa';
import { MdSystemUpdateAlt } from 'react-icons/md';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.all';
import styled from "styled-components";
import Modal_ from '../../modal/modal';
import api from '../../../service/api';
import AtualizarProduto from '../../atualizar/atualizarProduto/atualizarProduto'

const Estilo = styled.div`
  margin: 3%;
  background:#cccccc;
  color:white;
 

 .deletar{
        width: 100px;
        height: 30px;
        border: 0;
        outline: none;
        background-color: #6380be;
        color: #fff;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export function TabelaProduto({produtos, obterProduto}){

  const deletarProduto = (id) => {
    Swal.fire({
      title: 'Deseja mesmo excluir ?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Confirmar`,
      denyButtonText: `Agora não`,
    }).then((result) => {
      api.delete(`/produtos/${id}`).then(() => {
        Swal.fire('Produto deletado com sucesso!', '', 'success')
        obterProduto();
      })
    }) 
  }
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'categotoria', headerName: 'Categoria', width: 100 },
        { field: 'nome', headerName: 'Nome', width: 180 },
        { field: 'descricao', headerName: 'Descrição', width: 210 },
        { field: 'estoque', headerName: 'Estoque', width: 100 },
        { field: 'preco', headerName: 'Preço', width: 100 },
        { field: 'dataDeCadastro', headerName: 'Data De Cadastro', width: 180 },
        { field: 'deletar', headerName: 'Deletar', width: 130,
          renderCell: (params) => (
            <span>{params.value}</span>
          )},
        { field: 'atualizar', headerName: 'Atualizar', width: 180,
          renderCell: (params) => (
            <span>{params.value}</span>
          )},
      ];
      
      const rows = produtos.map((produto)=>(
        { id:produto.id,
          categotoria: produto.categoria.nome,
          nome: produto.nome, 
          descricao: produto.descricao, 
          estoque: produto.estoque, 
          preco: produto.preco,
          dataDeCadastro: produto.dataDeCadastro,
          deletar: <button className="deletar" onClick={()=>deletarProduto(produto.id)}> Deletar 
                      <FaTrashRestoreAlt id="del" style={{ marginLeft: 5 }}/>
                  </button>, 
          atualizar: <Modal_ 
                  button={<button className="deletar">
                    Atualizar
                    <MdSystemUpdateAlt size={20} style={{ marginLeft: 5 }} />
                  </button>}>
              <AtualizarProduto produto={produto} obterProduto={obterProduto}/>
            </Modal_ >
        }
      ));

      console.log(produtos)
  
  return(
    <Estilo>
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={10} />
      </div>
    </Estilo>
  )
}

