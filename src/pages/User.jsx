import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


export default function User() {
	document.title = 'My Profile';
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');

	const deleteUser = async () => {
		await axios
			.delete(`https://web-app-zgunz42.cloud.okteto.net/api/v1/users`)
			.then((res) => {
				alert(res);
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
				alert('Logout failed');
			});
	};

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

	return (
		<div>
			<Layout>
				<main>
					<section>
						<div
							className='container bg-light my-5 py-lg-3 px-lg-5'
							style={{ borderRadius: 1 + 'em' }}>
							<h2 className='text-center'>User Profile</h2>
							<Link to='/store'>
								<i className='fa-solid fa-shop float-end mb-4'></i>
							</Link>
							<div className='justify-content-center my-3'>
								<div className='d-flex justify-content-between mt-5'>
									<h6 className='mt-3'>Name</h6>
									<Button
										size='sm'
										onClick={() => {
											document.getElementById(
												'name'
											).disabled = false;
										}}>
										EDIT
									</Button>
								</div>
								<input
									className='form-control'
									type='text'
									id='name'
									value={name}
									disabled
								/>
								<div className='d-flex justify-content-between mt-2'>
									<h6 className='mt-3'>Email</h6>
									<Button
										size='sm'
										onClick={() => {
											document.getElementById(
												'email'
											).disabled = false;
										}}>
										EDIT
									</Button>
								</div>
								<input
									className='form-control'
									type='text'
									value={email}
									id='email'
									onChange={(e) => setEmail(e.target.value)}
									disabled
								/>
								<div className='d-flex justify-content-between mt-2'>
									<h6 className='mt-3'>Phone Number</h6>
									<Button
										size='sm'
										onClick={() => {
											document.getElementById(
												'phone'
											).disabled = false;
										}}>
										{' '}
										EDIT
									</Button>
								</div>
								<input
									className='form-control'
									type='text'
									value={phone}
									id='phone'
									onChange={(e) => setPhone(e.target.value)}
									disabled
								/>
								<div className='d-flex justify-content-between mt-2'>
									<h6 className='mt-3'>Address</h6>
									<Button
										size='sm'
										onClick={() => {
											document.getElementById(
												'address'
											).disabled = false;
										}}>
										EDIT
									</Button>
								</div>
								<input
									className='form-control'
									type='text'
									value={address}
									id='address'
									disabled
								/>
							</div>
							<Button
								variant='danger'
								className='mt-3 text-center justify-content-center mx-auto my-3'
								onClick={deleteUser}>
								Delete Account
							</Button>
							<Button
								variant='primary'
								onClick={updateProfile}
								className='mt-3 text-center justify-content-center mx-auto my-3'>
								Update Profile
							</Button>
							<Button
								variant='success'
								onClick={logout}
								className='mt-3 text-center justify-content-center mx-auto my-3'>
								Logout
							</Button>
						</div>
					</section>
				</main>
			</Layout>
		</div>
	);
}
