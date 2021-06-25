import React, { useEffect, useState } from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { FaTrashRestoreAlt} from 'react-icons/fa';
import { MdSystemUpdateAlt } from 'react-icons/md'
import styled from "styled-components";
import Modal_ from '../../modal/modal';

function TabelaProduto({produtos}){
    const Estilo = styled.div`
        margin: 3%;
        background:#888888;
        color:white;
      
    `;
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'nome', headerName: 'Nome', width: 210 },
        { field: 'descricao', headerName: 'Descrição', width: 210 },
        { field: 'estoque', headerName: 'Estoque', width: 129 },
        { field: 'preco', headerName: 'Preço', width: 130 },
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
          nome: produto.nome, 
          descricao: produto.descricao, 
          estoque: produto.estoque, 
          preco: produto.preco,
          dataDeCadastro: produto.dataDeCadastro,
          deletar: <FaTrashRestoreAlt />, 
          atualizar: <Modal_ button={<MdSystemUpdateAlt/>} />}
      ));
  
  return(
    <Estilo>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection/>
      </div>
    </Estilo>
  )
}

export default TabelaProduto