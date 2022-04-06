import React from 'react';

export default function Footer() {
	return (
		<nav className='navbar navbar-expand-lg bottom-0 pb-0 bg-light border-top border-2'>
			<div className='container justify-content-between py-5'>
				<a className='navbar-brand text-primary fw-bold' href='/'>
					LOGO
				</a>
				<div className='p-4 text-center position-absolute bottom-0 start-50 translate-middle-x'>
					<h5 className='text-primary '>About Us</h5>
					<div className=''>
						<i class='px-2 fa-brands fa-linkedin text-primary h2'></i>
						<i class='px-2 fa-brands fa-github h2'></i>
						<i class='px-2 fa-solid fa-envelope h2'></i>
					</div>
				</div>
				<h6 className='text-primary'>© Group Project FE & BE. 2022</h6>
			</div>
		</nav>
	);
}
