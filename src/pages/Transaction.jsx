import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ReceiptCard } from '../components/Card';
import Layout from '../components/Layout';
import Swal from 'sweetalert2';

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
						<h4 className='text-center text-uppercase'>
							Transaction Detail
						</h4>
						<div className='text-uppercase row text-center border-top py-2 border-bottom'>
							<div className='col-8 h6'>Description</div>
							<div className='col-2 h6'>Qty</div>
							<div className='col-2 h6'>Price</div>
						</div>
						<div className='row mt-lg-4'>
							{receipt.map((item, index) => {
								return (
									<ReceiptCard
										key={index}
										id={item.id}
										product={item.product}
										price={parseInt(item.price)}
									/>
								);
							})}
						</div>
						<div className='col align-self-end'>
							<h5 className='text-end col-auto mb-3 fw-bold'>
								Total : Rp. {countTotal().toLocaleString()}
							</h5>
						</div>
						<div className='container'>
							<div className='row'>
								<div className='col align-self-center text-center'>
									<Button
										className='btn-block fw-bold text-uppercase px-4 me-2'
										variant='danger'
										onClick={() => {
											Swal.fire({
												title: 'Are you sure?',
												text: 'Your order will be canceled',
												type: 'warning',
												showCancelButton: true,
												confirmButtonColor: '#3085d6',
												cancelButtonColor: '#d33',
												confirmButtonText:
													'Yes, cancel it!',
												cancelButtonText: 'No, keep it',
											}).then((result) => {
												if (result.value) {
													Swal.fire({
														title: 'Canceled!',
														text: 'Your order has been canceled.',
														icon: 'success',
														confirmButtonText: 'Ok',
														confirmButtonColor:
															'#3085d6',
													});
													let getLocal = JSON.parse(
														localStorage.getItem(
															'cart'
														)
													);
													getLocal.splice(0, 7);
													localStorage.setItem(
														'cart',
														JSON.stringify(getLocal)
													);
													navigate('/');
												} else if (
													result.dismiss ===
													Swal.DismissReason.cancel
												) {
													Swal.fire({
														title: 'Nice',
														text: 'Your order is safe',
														icon: 'success',
														confirmButtonColor:
															'#3085d6',
														confirmButtonText:
															'Cool',
													});
												}
											});
										}}>
										Cancel
									</Button>
									<Button
										variant='success'
										className='text-uppercase fw-bold px-5 ms-2'
										onClick={() => {
											let getLocal = JSON.parse(
												localStorage.getItem('cart')
											);
											getLocal.splice(0, 7);
											localStorage.setItem(
												'cart',
												JSON.stringify(getLocal)
											);
											Swal.fire({
												title: 'Success',
												text: 'Transaction Success',
												icon: 'success',
												confirmButtonText: 'OK',
											}).then((result) => {
												if (result.value) {
													navigate('/');
												}
											});
										}}>
										OK
									</Button>
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
