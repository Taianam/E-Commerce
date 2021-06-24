import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../componets/login/Login';
import Home from '../componets/home/Home';
import Cadastro2 from '../componets/cadastro/Cadastro2'

function Rotas() {
	return (
		<Switch>
			<Route path="/" exact>
				<Login />
			</Route>
			<Route path="/home" exact>
				<Home/>
			</Route>
			<Route path="/cadastro2" exact>
				<Cadastro2 />
			</Route>
		</Switch>
	)
}

export default Rotas;