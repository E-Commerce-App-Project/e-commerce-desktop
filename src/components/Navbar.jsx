import React from 'react';
import { Button, ButtonGroup, FormControl } from 'react-bootstrap';

export default function Navbar() {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light border-bottom border-2'>
			<div className='container justify-content-between py-2'>
				<div
					className='collapse navbar-collapse justify-content-between'
					id='navbarSupportedContent'>
					<a className='navbar-brand text-primary fw-bold' href='/'>
						LOGO
					</a>
					<FormControl
						type='text'
						placeholder='Search'
						className='mr-sm-2 mx-2'
					/>
					<a href='/'>
						<i className='fa-solid fa-basket-shopping p-3 me-2'></i>
					</a>
					<div className='d-flex'>
						<ButtonGroup className='btn-group'>
							<Button variant='outline-primary' className='px-4'>
								Login
							</Button>
							<Button variant='primary' className='px-4'>
								Register
							</Button>
						</ButtonGroup>
					</div>
				</div>
			</div>
		</nav>
	);
}
