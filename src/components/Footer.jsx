import React from 'react';

export default function Footer() {
	return (
		<nav className='navbar navbar-expand-lg bottom-0 pb-0 bg-light border-top border-2'>
			<div className='container justify-content-between py-5'>
				<a className='navbar-brand text-primary fw-bold me-5' href='/'>
					LOGO
				</a>
				<div className='ms-5 p-4 text-center bottom-0'>
					<h5 className='text-primary'>About Us</h5>
					<div className=''>
						<i className='px-2 fa-brands fa-linkedin text-primary h2'></i>
						<i className='px-2 fa-brands fa-github h2'></i>
						<i className='px-2 fa-solid fa-envelope h2'></i>
					</div>
				</div>
				<h6 className='text-primary'>© Group Project FE & BE. 2022</h6>
			</div>
		</nav>
	);
}
