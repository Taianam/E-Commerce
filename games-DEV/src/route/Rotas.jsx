import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../componets/login/Login';
import Home from '../componets/home/Home';
import Cadastro from '../componets/cadastro/Cadastro'

function Rotas() {
	return (
		<Switch>
			<Route path="/" exact>
				<Login />
			</Route>
			<Route path="/home" exact>
				<Home/>
			</Route>
			<Route path="/cadastro" exact>
				<Cadastro />
			</Route>
		</Switch>
	)
}

export default Rotas;