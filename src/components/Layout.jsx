import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = (props) => {
	return (
		<div className='bg-info overflow-auto' style={{ height: 100 + 'vh' }}>
			<Navbar />
			<div className='container'>{props.children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
