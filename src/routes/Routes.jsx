import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../pages/App';
import Detail from '../pages/Detail';

function Routing() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/detail' element={<Detail />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Routing;
