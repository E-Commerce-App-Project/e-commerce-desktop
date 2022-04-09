import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { ReceiptCard } from '../components/Card';
import Layout from '../components/Layout';

function Transaction() {
	document.title = 'Transaction Detail';
	const navigate = useNavigate();

	const receipt = JSON.parse(localStorage.getItem('cart'));
	function countTotal() {
		let total = 0;
		for (let i = 0; i < receipt.length; i++) {
			total += parseInt(receipt[i].price);
		}
		return total;
	}

	return (
		<>
			<Layout>
				<main>
					<div
						className='container bg-light my-5 py-lg-3 px-lg-5'
						style={{ borderRadius: 1 + 'em' }}>
						<div className='row mt-lg-4'>
							{receipt.map((item, index) => {
								return (
									<ReceiptCard
										key={index}
										id={item.id}
										product={item.product}
										price={parseInt(item.price)}
										img={item.image}
									/>
								);
							})}
						</div>
						<div className='col align-self-end'>
							<h5 className='text-end col-auto mb-3 me-4'>
								Total Harga : Rp.{countTotal().toLocaleString()}
							</h5>
						</div>
						<div className='container'>
							<div className='row'>
								<div className='col align-self-center text-center'>
									{/* <Link to='/'> */}
									<Button
										variant='warning'
										className='text-uppercase fw-bold px-5'
										onClick={() => {
											let getLocal = JSON.parse(
												localStorage.getItem('cart')
											);
											getLocal.splice(0, 7);
											localStorage.setItem(
												'cart',
												JSON.stringify(getLocal)
											);
											navigate('/');
										}}
										style={{
											borderRadius: '0.5rem',
										}}>
										OK
									</Button>
									{/* </Link> */}
								</div>
							</div>
						</div>
					</div>
				</main>
			</Layout>
		</>
	);
}

export default Transaction;
