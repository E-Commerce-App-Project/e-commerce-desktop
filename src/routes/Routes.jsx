import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../pages/App';
import Detail from '../pages/Detail';
import ShoppingCart from '../pages/ShoppingCart';
import Transaction from '../pages/Transaction';
import Login from '../pages/Login';
import Register from '../pages/Register';
import User from '../pages/User';
import Store from '../pages/Store';

function Routing() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/detail/:id' element={<Detail />} />
				<Route path='/login' element={<Login />} />
				<Route path='/profile' element={<User />} />
				<Route path='/register' element={<Register />} />
				<Route path='/transaction' element={<Transaction />} />
				<Route path='/cart' element={<ShoppingCart />} />
				<Route path='/store' element={<Store />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Routing;
