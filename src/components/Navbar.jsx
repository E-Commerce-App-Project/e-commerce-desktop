import React from 'react';

export default function Navbar() {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light border-bottom border-2'>
			<div className='container justify-content-between py-2'>
				<div
					className='collapse navbar-collapse justify-content-between'
					id='navbarSupportedContent'>
					<a className='navbar-brand text-primary fw-bold' href='#'>
						LOGO
					</a>
					<form className='d-flex input-group mx-3'>
						<input
							className='form-control me-2 text-info'
							type='search'
							placeholder='Search'
							aria-label='Search'
						/>
						<a href='#'>
							<i class='fa-solid fa-basket-shopping p-2'></i>
						</a>
					</form>
					<div className='d-flex'>
						<div className='btn-group txt'></div>
						<button className='btn btn-outline-primary px-4'>
							Login
						</button>
						<button className='btn btn-primary px-3'>
							Register
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}
