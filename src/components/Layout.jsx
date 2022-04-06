import React from 'react';
import Navbar from './Navbar';

const Layout = (props) => {
	return (
		<div className='bg-info'>
			<Navbar />
			<div className='container'>{props.children}</div>
		</div>
	);
};

export default Layout;
