import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function User() {
	document.title = 'My Profile';
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async (e) => {
		await axios
			.get(
				`https://web-app-zgunz42.cloud.okteto.net/api/v1/users/profile`
			)
			.then((response) => {
				setName(response.data.data.name);
				setEmail(response.data.data.email);
				setPhone(response.data.data.phone_number);
				setAddress(response.data.data.address);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const deleteUser = async () => {
		await axios
			.delete(`https://web-app-zgunz42.cloud.okteto.net/api/v1/users`)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const updateProfile = async () => {
		await axios
			.put(`https://web-app-zgunz42.cloud.okteto.net/api/v1/users`, {
				name: name,
				email: email,
				phone: phone,
				address: address,
			})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
			document.getElementById('name').setAttribute('disabled', true);
			document.getElementById('email').setAttribute('disabled', true);
			document.getElementById('phone').setAttribute('disabled', true);
			document.getElementById('address').setAttribute('disabled', true);
	};

	const logout = async () => {
		await axios
			.post(
				`https://web-app-zgunz42.cloud.okteto.net/api/v1/logout`,
				{},
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization:
							'Bearer ' + localStorage.getItem('token'),
					},
				}
			)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Logout Failed',
				});
			});
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
									className='mt-3 text-center justify-content-center mx-auto my-3 me-2'
									onClick={deleteUser}>
									Delete Account
								</Button>
								<Button
									variant='primary'
									className='mt-3 text-center justify-content-center mx-auto my-3 mx-2'
									onClick={updateProfile}>
									Update Profile
								</Button>
								<Button
									variant='success'
									className='mt-3 text-center justify-content-center mx-auto my-3 ms-2'
									onClick={logout}>
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
