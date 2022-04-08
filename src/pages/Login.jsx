import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
	document.title = 'Login';
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		await axios
			.post(`https://web-app-zgunz42.cloud.okteto.net/api/v1/login`, {
				email: email,
				password: password,
			})
			.then((response) => {
				const { data, status } = response.data;
				localStorage.setItem('token', data.token);
				if (status === 'success') {
					navigate('/profile');
				} else {
					alert('Login failed');
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className='bg-info overflow-auto' style={{ height: 100 + 'vh' }}>
			<div
				className='container bg-light ms-auto my-5 py-lg-3 px-lg-5'
				style={{ borderRadius: 1 + 'em' }}>
				<h1>LOGIN</h1>
				<Form>
					<Form.Group className='mb-3' controlId='formBasicEmail'>
						<Form.Label>Email</Form.Label>
						<Form.Control
							type='email'
							placeholder='Enter your email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className='mb-3' controlId='formBasicPassword'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							aria-describedby='passwordHelpBlock'
							placeholder='Enter your password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Form.Group>
					<Button
						variant='primary'
						type='submit'
						onClick={handleSubmit}>
						Log In
					</Button>
					<br />
					<Link to='/register'>
						<Form.Text className='text-muted'>
							Do not have an account? Click Register
						</Form.Text>
					</Link>
				</Form>
			</div>
		</div>
	);
}
