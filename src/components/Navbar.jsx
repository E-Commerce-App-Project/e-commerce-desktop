import React from 'react';

export default function Navbar() {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light border-bottom border-2'>
			<div className='container-fluid justify-content-between'>
				<a className='navbar-brand' href='#'>
					LOGO
				</a>

				<div
					className='collapse navbar-collapse'
					id='navbarSupportedContent'>
					<form className='d-flex'>
						<input
							className='form-control me-2'
							type='search'
							placeholder='Search'
							aria-label='Search'
						/>
						<button
							className='btn btn-outline-success'
							type='submit'>
							Search
						</button>
					</form>
					<div className='d-flex'>
						<button>Login</button>
						<button>Register</button>
					</div>
				</div>
			</div>
		</nav>
	);
}
