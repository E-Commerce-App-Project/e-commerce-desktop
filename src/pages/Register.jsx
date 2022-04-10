import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, Row, Col, FormLabel } from 'react-bootstrap';
import Layout from '../components/Layout';
import Swal from 'sweetalert2';

export default function Register() {
	document.title = 'Register';
	const navigate = useNavigate();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		// If using localStorage
		const user = {
			name,
			email,
			password,
			phone,
			address,
		};
		let getLocal = JSON.parse(localStorage.getItem('user'));
		if (getLocal === null) {
			let newLocal = [];
			newLocal.push(user);
			localStorage.setItem('user', JSON.stringify(newLocal));
		} else {
			getLocal.push(user);
			localStorage.setItem('user', JSON.stringify(getLocal));
		}
		setName('');
		setEmail('');
		setPassword('');
		setPhone('');
		setAddress('');
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'User Added',
			showConfirmButton: false,
			timer: 1500,
		}).then(() => {
			navigate('/profile');
		});
	};

	return (
		<Layout>
			<div
				className='container bg-light my-5 py-lg-3 px-lg-5'
				style={{ borderRadius: 1 + 'em' }}>
				<Row>
					<h2 className='text-uppercase my-2'>Register</h2>
					<Col>
						<Form>
							<Form.Group
								className='mb-3'
								controlId='formBasicName'>
								<FormLabel>
									Name <strong className='text-warning'>*</strong>
								</FormLabel>
								<Form.Control
									type='text'
									placeholder='Enter your name'
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</Form.Group>
							<Form.Group
								className='mb-3'
								controlId='formBasicEmail'>
								<FormLabel>
									Email <strong className='text-warning'>*</strong>
								</FormLabel>
								<Form.Control
									type='email'
									placeholder='Enter your email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</Form.Group>
							<Form.Group
								className='mb-3'
								controlId='formBasicPassword'>
								<FormLabel>
									Password <strong className='text-warning'>*</strong>
								</FormLabel>
								<Form.Control
									type='password'
									value={password}
									aria-describedby='passwordHelpBlock'
									placeholder='Enter your password'
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
							</Form.Group>
							<Form.Group
								className='mb-3'
								controlId='formBasicPhoneNumber'>
								<FormLabel>
									Phone Number <strong className='text-warning'>*</strong>
								</FormLabel>
								<Form.Control
									type='number'
									placeholder='Enter your Phone Number'
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
								/>
							</Form.Group>
							
							<Form.Text className='text-muted'>
								<h6>
							(<strong className='text-warning'>*</strong>) Required
								</h6>
							</Form.Text>
						</Form>
					</Col>
					<Col>
						<Form>
							<Form.Group
								className='mb-3'
								controlId='formBasicAddress'>
								<FormLabel>
									Address <strong className='text-warning'>*</strong>
								</FormLabel>
								<Form.Control
									as='textarea'
									placeholder='Enter your address'
									style={{ height: '300px' }}
									value={address}
									onChange={(e) => setAddress(e.target.value)}
								/>
							</Form.Group>
							<Button
								variant='primary'
								type='submit'
								onClick={handleSubmit}>
								Register
							</Button>
						</Form>
					</Col>
				</Row>
			</div>
		</Layout>
	);
}
