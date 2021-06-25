import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Rotas from './route/Rotas';
import GlobalStyles from './Styles';

class App extends React.Component{
	render(){
		return(
			<>
				<BrowserRouter>
				<GlobalStyles />
					<Rotas />
				</BrowserRouter>
			</>
		)
	}
}

export default App;
