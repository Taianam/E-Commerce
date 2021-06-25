import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../componets/login/Login';
import Home from '../componets/home/Home';
import CadastroPessoa from '../componets/cadastro/cadastroPessoa/CadastroPessoa'
import CrudProdutos from '../componets/controles/produtos/CrudProdutos';
import ControleFuncionario from '../componets/controles/funcionarios/ControleFuncionario';
import Notfound from '../componets/notfound/paginaNotFound/Notfound';

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
				<CadastroPessoa />
			</Route>
			<Route path="/controle/produtos" exact>
				<CrudProdutos />
			</Route>
			<Route path="/controle/funcionario" exact>
				<ControleFuncionario />
			</Route>
			<Route path="/**" exact>
				<Notfound/>
			</Route>
		</Switch>
	)
}

export default Rotas;