import React from 'react';
import { Button, ButtonGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navbar() {

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
						className='mr-sm-2 mx-2'
					/>
					<Link to='/cart'>
						<i className='fa-solid fa-basket-shopping p-3 me-2'></i>
					</Link>
					<div className='d-flex'>
						<ButtonGroup className='btn-group'>
							<Link to='/login'>
								<Button
									variant='outline-primary'
									className='px-4'>
									Login
								</Button>
							</Link>
							<Link to='/register'>
								<Button variant='primary' className='px-4'>
									Register
								</Button>
							</Link>
						</ButtonGroup>
					</div>
				</div>
			</div>
		</nav>
	);
}
