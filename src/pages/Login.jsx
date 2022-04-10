import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
import Swal from 'sweetalert2';

export default function Login() {
	document.title = 'Login';
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		// If using localStorage
		let getLocal = JSON.parse(localStorage.getItem('user'));
		if (email === getLocal[1].email && password === getLocal[1].password) {
			Swal.fire({
				position: 'center',
				icon: 'success',
				title: 'Login Success',
				showConfirmButton: false,
				timer: 1500,
			})
			navigate('/profile');
		} else if (email === '' || password === '') {
			Swal.fire({
				position: 'center',
				icon: 'error',
				title: 'Email or Password is empty',
				showConfirmButton: false,
				timer: 1500,
			})
		} else if (email !== getLocal[0].email || password !== getLocal[0].password) {
			Swal.fire({
				position: 'center',
				icon: 'error',
				title: 'Email or Password is wrong',
				showConfirmButton: false,
				timer: 1500,
			})
		} else {
			Swal.fire({
				position: 'center',
				icon: 'error',
				title: 'Wrong Email or Password',
				showConfirmButton: false,
				timer: 1500,
			});
		}
	};

	return (
		<div className='bg-info overflow-auto position-relative' style={{ height: 100 + 'vh' }}>
			<div
				className='container w-50 bg-light p-lg-5 position-absolute top-50 start-50 translate-middle'
				style={{ borderRadius: 1 + 'em' }}>
				<h2 className='text-uppercase my-2'>Login</h2>
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
