import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ReceiptCard } from '../components/Card';
import Layout from '../components/Layout';

function Transaction() {
	document.title = 'Transaction Detail';

	return (
		<>
			<Layout>
				<main>
					<div
						className='container bg-light my-5 py-lg-3 px-lg-5'
						style={{ borderRadius: 1 + 'em' }}>
						<div className='row mt-lg-4'>
							<ReceiptCard
								img='https://via.placeholder.com/300.png/09f/fff'
								product='Apple MacBook Pro 2021 14 16 Inch M1 Max 16GB 32 512GB'
								price={28540000}
								qty={3}
							/>
							<ReceiptCard
								img='https://via.placeholder.com/300.png/09f/fff'
								product='Apple MacBook Pro 2021 14 16 Inch M1 Max 16GB 32 512GB'
								price={28540000}
								qty={1}
							/>
						</div>
						<div className='col align-self-end'>
							<h6 className='text-end col-auto mb-3 me-4'>
								Total Harga
							</h6>
						</div>
						<div className='container'>
							<div className='row'>
								<div className='col align-self-center text-center'>
									<Link to='/'>
										<Button
											variant='warning'
											className='text-uppercase fw-bold px-5 
							'
											style={{
												borderRadius: '0.5rem',
												// width: '200px',
											}}>
											OK
										</Button>
									</Link>
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
