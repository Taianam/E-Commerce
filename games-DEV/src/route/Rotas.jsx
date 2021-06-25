import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../componets/login/Login';
import Home from '../componets/home/Home';
import CadastroCliente from '../componets/cadastro/cadastroPessoa/CadastroPessoa'
import CrudProdutos from '../componets/controles/produtos/CrudProdutos';

function Rotas() {
	return (
		<Switch>
			<Route path="/" exact>
				<Login />
			</Route>
			<Route path="/home" exact>
				<Home/>
			</Route>
			<Route path="/cadastroPessoa" exact>
				<CadastroCliente />
			</Route>
			<Route path="/controle/produtos" exact>
				<CrudProdutos />
			</Route>
		</Switch>
	)
}

export default Rotas;