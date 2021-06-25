import React, { useEffect, useState } from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { FaTrashRestoreAlt } from 'react-icons/fa';
import { MdSystemUpdateAlt } from 'react-icons/md';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.all';
import styled from "styled-components";
import Modal_ from '../../modal/modal';
import api from '../../../service/api';
import AtualizarFuncionario from '../../atualizar/atualizarFuncionario/atualizarFuncionario';

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
function TabelaFuncionario({ clientes, obterCliente }) {

  const deletarCliente = (id) => {
    Swal.fire({
      title: 'Deseja mesmo excluir ?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Confirmar`,
      denyButtonText: `Agora não`,
    }).then((result) => {
      api.delete(`/clientes/${id}`).then(() => {
        Swal.fire('Cliente deletado com sucesso!', '', 'success')
        obterCliente();
      })
    }) 
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nome', headerName: 'Nome', width: 180 },
    { field: 'email', headerName: 'Email', width: 210 },
    { field: 'telefone', headerName: 'Telefone', width: 130 },
    { field: 'dataDeNacimento', headerName: 'Data De Nascimento', width: 180 },
    {
      field: 'deletar', headerName: 'Deletar', width: 130,
      renderCell: (params) => (
        <span>{params.value}</span>
      )
    },
    {
      field: 'atualizar', headerName: 'Atualizar', width: 180,
      renderCell: (params) => (
        <span>{params.value}</span>
      )
    },
  ];

  const rows = clientes.map((cliente) => (
    {
      id: cliente.id,
      nome: cliente.nome,
      email: cliente.email,
      telefone: cliente.telefone,
      dataDeNacimento: cliente.dataDeNascimento,
      deletar: <button className="deletar" 
      onClick={() => deletarCliente(cliente.id)}> 
        Deletar
        <FaTrashRestoreAlt id="del" style={{ marginLeft: 5 }}/>
      </button>,
      atualizar: <Modal_
        button={<button className="deletar" >
          Atualizar
          <MdSystemUpdateAlt size={20} style={{ marginLeft: 5 }} />
        </button>}>
        <AtualizarFuncionario 
          funcionario={cliente} 
          obterFuncionario={obterCliente}
        /> 
      </Modal_ >
    }
  ));

  return (
    <Estilo>
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={10} />
      </div>
    </Estilo>
  )
}

export default TabelaFuncionario