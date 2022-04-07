import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ReceiptCard } from '../components/Card';
import Layout from '../components/Layout';

function Transaction() {
	document.title = 'Transaction Detail';

	return (
		<div>
			<Layout>
				<main>
					<div
						className='container bg-light my-3 py-lg-3 px-lg-5'
						style={{ borderRadius: 1 + 'em' }}>
						<div className='row'>
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
						<div className='position-relative'>
							<Link to='/'>
								<Button
									variant='warning'
									className='text-uppercase fw-bold px-5 position-absolute bottom-0 start-50 translate-middle-x
							'
									style={{
										borderRadius: '0.5rem',
										// width: '50%',
									}}>
									OK
								</Button>
							</Link>
						</div>
					</div>
				</main>
			</Layout>
		</div>
	);
}

export default Transaction;
