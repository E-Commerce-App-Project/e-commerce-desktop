import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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
		await axios
			.post(`https://web-app-zgunz42.cloud.okteto.net/api/v1/users`, {
				name: name,
				email: email,
				password: password,
				phone_number: phone,
				address: address,
			})
			.then((response) => {
				const { status } = response.data;
				if (status === 'success') {
					navigate('/profile');
				} else {
					Swal.fire({
						title: 'Error',
						text: 'Email has been used',
						icon: 'error',
						confirmButtonText: 'OK',
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Layout>
			<div
				className='container bg-light my-5 py-lg-3 px-lg-5'
				style={{ borderRadius: 1 + 'em' }}>
				<Row>
					<Col>
						<Form>
							<Form.Group
								className='mb-3'
								controlId='formBasicName'>
								<FormLabel>
									Name <span>*</span>
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
									Email <span>*</span>
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
									Password <span>*</span>
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
									Phone Number <span>*</span>
								</FormLabel>
								<Form.Control
									type='number'
									placeholder='Enter your Phone Number'
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
								/>
							</Form.Group>
							<br />
							<Form.Text className='text-muted'>
								<span>*</span> Required
							</Form.Text>
						</Form>
					</Col>
					<Col>
						<Form>
							<Form.Group
								className='mb-3'
								controlId='formBasicAddress'>
								<FormLabel>
									Address <span>*</span>
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
