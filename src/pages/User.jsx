import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function User() {
	document.title = 'My Profile';
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async (e) => {
		// If using localStorage
		let getLocal = JSON.parse(localStorage.getItem('user'));
		if (getLocal === null) {
			Swal.fire({
				position: 'center',
				icon: 'error',
				title: 'No User Found',
				showConfirmButton: false,
				timer: 1500,
			});
		} else {
			let user = getLocal[1];
			setName(user.name);
			setEmail(user.email);
			setPhone(user.phone);
			setAddress(user.address);
		}
	};

	const deleteAccount = async (e) => {
		e.preventDefault();
		let getLocal = JSON.parse(localStorage.getItem('user'));
		getLocal.splice(1, 1);
		localStorage.setItem('user', JSON.stringify(getLocal));

		Swal.fire({
			icon: 'success',
			title: 'Account Deleted',
			showConfirmButton: false,
			timer: 1500,
		});
		navigate('/');
	};

	const updateProfile = async () => {
		document.getElementById('name').setAttribute('disabled', true);
		document.getElementById('email').setAttribute('disabled', true);
		document.getElementById('phone').setAttribute('disabled', true);
		document.getElementById('address').setAttribute('disabled', true);
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Profile Updated',
			showConfirmButton: false,
			timer: 1500,
		});
	};

	const logout = async () => {
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Logout Success',
			showConfirmButton: false,
			timer: 1500,
		});
		navigate('/');
	};

	return (
		<div>
			<Layout>
				<main>
					<section>
						<div
							className='container bg-light my-5 py-lg-3 px-lg-5'
							style={{ borderRadius: 1 + 'em' }}>
							<Link to='/store'>
								<div className='justify-content-center pb-4'>
									<h2 className='text-center'>
										<i className='fa-solid fa-shop float-end '>
											<h6 className=''>
												Add <br /> Product
											</h6>
										</i>
									</h2>
								</div>
							</Link>
							<h2 className='text-start text-uppercase'>
								User Profile
							</h2>
							<div className='justify-content-center my-5'>
								<div className='d-flex flex-wrap justify-content-between mt-5'>
									<h6 className='mt-3'>Name</h6>
									<Button
										size='sm'
										variant='primary'
										className='my-2'
										onClick={() => {
											document
												.getElementById('name')
												.removeAttribute('disabled');
										}}>
										EDIT
									</Button>
								</div>
								<input
									className='form-control'
									type='text'
									value={name}
									onChange={(e) => setName(e.target.value)}
									id='name'
									disabled
								/>
								<div className='d-flex flex-wrap justify-content-between my-2'>
									<h6 className='mt-3'>Email</h6>
									<Button
										size='sm'
										variant='primary'
										className='my-2'
										onClick={() => {
											document
												.getElementById('email')
												.removeAttribute('disabled');
										}}>
										EDIT
									</Button>
								</div>
								<input
									className='form-control'
									type='text'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									id='email'
									disabled
								/>
								<div className='d-flex flex-wrap justify-content-between my-2'>
									<h6 className='mt-3'>Phone Number</h6>
									<Button
										size='sm'
										variant='primary'
										className='my-2'
										onClick={() => {
											document
												.getElementById('phone')
												.removeAttribute('disabled');
										}}>
										EDIT
									</Button>
								</div>
								<input
									className='form-control'
									type='text'
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
									id='phone'
									disabled
								/>
								<div className='d-flex flex-wrap justify-content-between my-2'>
									<h6 className='mt-3'>Address</h6>
									<Button
										size='sm'
										variant='primary'
										className='my-2'
										onClick={() => {
											document
												.getElementById('address')
												.removeAttribute('disabled');
										}}>
										EDIT
									</Button>
								</div>
								<input
									className='form-control'
									type='text'
									value={address}
									onChange={(e) => setAddress(e.target.value)}
									id='address'
									disabled
								/>
							</div>
							<div className='justify-content-center'>
								<Button
									variant='danger'
									className='mt-3 text-center justify-content-center mx-auto my-3 me-2 text-uppercase'
									onClick={() => {
										Swal.fire({
											title: 'Are you sure?',
											text: "You won't be able to revert this!",
											icon: 'warning',
											showCancelButton: true,
											confirmButtonColor: '#3085d6',
											cancelButtonColor: '#d33',
											confirmButtonText:
												'Yes, delete it!',
										}).then((result) => {
											if (result.value) {
												let getLocal = JSON.parse(
													localStorage.getItem('user')
												);
												getLocal.splice(1, 1);
												localStorage.setItem(
													'user',
													JSON.stringify(getLocal)
												);
												Swal.fire({
													icon: 'success',
													title: 'Account Deleted',
													showConfirmButton: false,
													timer: 1500,
												});
												navigate('/');
											}
										});
									}}>
									<i className='fa-solid fa-trash-can me-2'></i>
									Delete
								</Button>
								<Button
									variant='primary'
									className='mt-3 text-center justify-content-center mx-auto my-3 mx-2 text-uppercase'
									onClick={updateProfile}>
									<i className='fa-solid fa-pen-to-square me-2'></i>
									Update
								</Button>
								<Button
									variant='success'
									className='mt-3 text-center justify-content-center mx-auto my-3 ms-2 text-uppercase'
									onClick={logout}>
									<i className='fa-solid fa-arrow-right-from-bracket me-2'></i>
									Logout
								</Button>
							</div>
						</div>
					</section>
				</main>
			</Layout>
		</div>
	);
}
