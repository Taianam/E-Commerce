import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Rotas from './route/Rotas';
import GlobalStyles from './Styles';

function App() {
	return (
		<>
			<BrowserRouter>
			<GlobalStyles />
				<Rotas />
			</BrowserRouter>

		</>
			
	
	)
}

export default App;
