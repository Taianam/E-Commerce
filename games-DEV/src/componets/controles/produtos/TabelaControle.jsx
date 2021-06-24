import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FiTrash2, FiEdit } from 'react-icons/fi'
import Modal from '@material-ui/core/Modal';
import { Botao,Conteudo  } from './StyleContrProd';
import { TabUnselectedSharp, TrafficRounded } from '@material-ui/icons';

function TabelaControle(){

    
 return(   
 <>
 <Botao>
    <button type="button" >
        Novo Produto
    </button>
    </Botao>
    <div>
        <TableContainer >
            <Table className={classes.table} aria-label="customized table">
                <TableHead >
                    <TableRow style={{ backgroundColor: "#FFFFFF !important" }}>
                        <StyledTableCell>Nome</StyledTableCell>
                        <StyledTableCell align="center">Valor</StyledTableCell>
                        <StyledTableCell align="center">Categoria</StyledTableCell>
                        <StyledTableCell align="center">Estoque</StyledTableCell>
                        <StyledTableCell align="center">Gerenciar</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row">
                                NOME
                            </StyledTableCell>
                            <StyledTableCell align="center">VALOR</StyledTableCell>
                            <StyledTableCell align="center">Categoria</StyledTableCell>
                            <StyledTableCell align="center">Estoque</StyledTableCell>
                            <StyledTableCell align="center"> <FiTrash2 size={20} onClick={() => removeProduto(row)} />
                                <FiEdit size={20} onClick={e => teste(row.id)} /></StyledTableCell>

                        </StyledTableRow>
                </TableBody>
            </Table>
        </TableContainer>
        <div>

            <Modal
                open="OPEN"
                onClose="CLOSE"
            >
                {
                    <Conteudo>
                        {status ? (
                            <form className="produtoModal" onSubmit={cadastrarProduto}>
                                <div className="grupo">
                                    <label id="nome" value={newNome} onChange={e => setNewNome(e.target.value)} > Nome </label>
                                    <input type="text" id="nome" />

                                    <label id="descricao"> Descrição </label>
                                    <input type="text" value={newDescricao} onChange={e => setNewDescricao(e.target.value)} id="descricao" />

                                    <label id="qtdEstoque"> Estoque </label>
                                    <input type="text" value={newEstoque} onChange={e => setNewEstoque(e.target.value)} id="qtdEstoque" />

                                    <label id="valor"> Valor </label>
                                    <input type="text" value={newValor} onChange={e => setNewValor(e.target.value)} id="valor" />

                                    <label id="categoria"> Categoria </label>
                                    <select id="categoria"  onChange={e => setNewIDCategoria(e.target.value)}>
                                        
                                        {categoria.map((categ) => {
                                            return (
                                                <option key={categ.id} value={categ.id}>{categ.nome}</option>
                                            )
                                        })}
                                    </select>

                                    <label id="funcionario"> Funcionario </label>
                                    <select id="funcionario" onChange={e => setNewIDFuncionario(e.target.value)}>
                                      
                                        {funcionario.map((funcio) => {
                                            return (
                                                <option key={funcio.id} value={funcio.id}>{funcio.nome}</option>
                                            )
                                        })}
                                    </select>

                                    <label id="dtfabricacao"> Fabricação </label>
                                    <input type="text" value={newDataFabricao} onChange={e => setNewDataFabricao(e.target.value)} id="dtfabricacao" />

                                    <label id="img"> Imagem </label>
                                    <input type="url" value={newImagem} onChange={e => setNewImagem(e.target.value)} id="img" />

                                    <button type="submit" > Cadastrar</button>

                                </div>
                            </form>
                        ) : (
                                <form className="produtoModal" onSubmit={alterarProduto}>
                                    <div className="grupo">
                                        <label id="nome" > Nome </label>
                                        <input type="text" value={newNome} onChange={e => setNewNome(e.target.value)} id="nome" />

                                        <label id="descricao"> Descrição </label>
                                        <input type="text" value={newDescricao} onChange={e => setNewDescricao(e.target.value)} id="descricao" />

                                        <label id="qtdEstoque"> Estoque </label>
                                        <input type="text" value={newEstoque} onChange={e => setNewEstoque(e.target.value)} id="qtdEstoque" />

                                        <label id="valor"> Valor </label>
                                        <input type="text" value={newValor} onChange={e => setNewValor(e.target.value)} id="valor" />

                                        <label id="categoria"> Categoria </label>
                                        <select id="categoria" onChange={e => setNewIDCategoria(e.target.value)}>

                                            {categoria.map((categ) => {
                                                return (
                                                    <option key={categ.id} value={categ.id}>{categ.nome}</option>
                                                )
                                            })}
                                        </select>

                                        <label id="funcionario"> Funcionario </label>
                                        <select id="funcionario" onChange={e => setNewIDFuncionario(e.target.value)}>

                                            {funcionario.map((funcio) => {
                                                return (
                                                    <option key={funcio.id} value={funcio.id}>{funcio.nome}</option>
                                                )
                                            })}
                                        </select>

                                        <label id="dtfabricacao"> Fabricação </label>
                                        <input type="text" value={newDataFabricao} onChange={e => setNewDataFabricao(e.target.value)} id="dtfabricacao" />

                                        <label id="img"> Imagem </label>
                                        <input type="url" value={newImagem} onChange={e => setNewImagem(e.target.value)} id="img" />
                                        <button type="submit" > Alterar</button>

                                    </div>
                                </form>
                            )}

                    </Conteudo>
                }
            </Modal>
        </div>

    </div>
</>
)
}
