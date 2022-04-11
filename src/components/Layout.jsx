import React from 'react';
import Navbar from './Navbar';

const Layout = (props) => {
	return (
		<div className='bg-info overflow-auto' style={{ height: 100 + 'vh' }}>
			<Navbar onChange={props.onChange} />
			<div className='container'>{props.children}</div>
		</div>
	);
};

export default Layout;
