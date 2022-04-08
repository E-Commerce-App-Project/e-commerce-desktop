import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function User() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');

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

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async (e) => {
		await axios
			.get(
				`https://web-app-zgunz42.cloud.okteto.net/api/v1/users/profile`
			)
			.then((response) => {
				console.log(response);
				setName(response.data.name);
				setEmail(response.data.email);
				setPhone(response.data.phone_number);
				setAddress(response.data.address);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	console.log(name);
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
								<i className='fa-solid fa-shop float-end '></i>
							</Link>
							<div className='justify-content-center my-3'>
								<h6 className='mt-3'>Name</h6>
								<input
									className='form-control'
									type='text'
									value={name}
									readOnly
								/>
								<h6 className='mt-3'>Email</h6>
								<input
									className='form-control'
									type='text'
									value={email}
									readOnly
								/>
								<h6 className='mt-3'>Phone Number</h6>
								<input
									className='form-control'
									type='text'
									value={phone}
									readOnly
								/>
								<h6 className='mt-3'>Address</h6>
								<input
									className='form-control'
									type='text'
									value={address}
									readOnly
								/>
							</div>
							<Button
								variant='danger'
								className='mt-3 text-center justify-content-center mx-auto my-3'
								onClick={deleteUser}>
								Delete Account
							</Button>
						</div>
					</section>
				</main>
			</Layout>
		</div>
	);
}
