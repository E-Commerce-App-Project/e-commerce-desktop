import React from 'react';
import { FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navbar({ onChange }) {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light border-bottom border-2'>
			<div className='container justify-content-between py-2'>
				<div
					className='collapse navbar-collapse justify-content-between'
					id='navbarSupportedContent'>
					<Link to='/' className='navbar-brand text-primary fw-bold'>
						LOGO
					</Link>
					<FormControl
						type='text'
						placeholder='Search'
						onChange={onChange}
						className='mr-sm-2 mx-2'
					/>
					<Link to='/cart'>
						<h4>
							<i className='fa-solid fa-basket-shopping p-2 mx-2'></i>
						</h4>
					</Link>
					<Link to='/login'>
						<h4>
							<i className='fa-solid fa-user p-2 mx-2 text-dark'></i>
						</h4>
					</Link>
				</div>
			</div>
		</nav>
	);
}
