import React from 'react';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormCheck } from 'react-bootstrap';
import { WideCard } from '../components/Card';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ShoppingCart() {
	document.title = 'Shopping Cart';
	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetchCart();
	}, []);

	const fetchCart = async () => {
		axios
			.get(
				`https://web-app-zgunz42.cloud.okteto.net/api/v1/cart`,
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
				console.log(res.data);
				// setCart(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<Layout>
				<main>
					<div
						className='container bg-light my-5 py-lg-3 px-lg-5'
						style={{ borderRadius: 1 + 'em' }}>
						{/* #1 Choose Address */}
						<Form className='fw-bold d-flex mx-3 mb-2'>
							<h6 className='fw-bold my-auto p-0'>
								Send to Address:{' '}
							</h6>
							{['radio'].map((type) => (
								<div key={`inline-${type}`} className='mx-5'>
									<FormCheck
										inline
										label='My Address'
										name='address'
										type={type}
										id={'myaddress'}
									/>
									<FormCheck
										inline
										label='Different Address'
										name='address'
										type={type}
										id={'newaddress'}
									/>
								</div>
							))}
						</Form>

						{/* #2 Selected Product */}
						<div className='row'>
							<WideCard
								img='https://via.placeholder.com/300.png/09f/fff'
								product='Apple MacBook Pro 2021 14 16 Inch M1 Max 16GB 32 512GB'
								price={28540000}
								label='Remove'
							/>
							<WideCard
								img='https://via.placeholder.com/300.png/09f/fff'
								product='Apple MacBook Pro 2021 14 16 Inch M1 Max 16GB 32 512GB'
								price={28540000}
								label='Remove'
							/>
						</div>

						{/* #3 Total Prices */}
						<div
							className='border border-3 mx-1 my-auto row position-relative mt-3 mb-2'
							style={{ borderRadius: 1 + 'em' }}>
							<div className='d-flex justify-content-lg-between px-0'>
								<div className='fw-bold flex-wrap d-flex my-2 p-0'>
									<h5 className='px-5 py-0 my-0 fw-bold'>
										TOTAL
									</h5>
									<h5 className='px-5 my-0 py-0'>
										Rp. 45.040.000
									</h5>
								</div>
								<div className='m-0 p-0'>
									<Link to='/transaction'>
										<Button
											variant='warning'
											className='text-uppercase fw-bold px-5 btn btn-warning py-2'
											style={{
												borderRadius: 1 + 'rem',
											}}>
											Checkout
										</Button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</main>
			</Layout>
		</div>
	);
}

export default ShoppingCart;
