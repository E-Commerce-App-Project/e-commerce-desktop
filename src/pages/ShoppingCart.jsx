import React, { useState } from 'react';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { WideCard } from '../components/Card';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function ShoppingCart() {
	document.title = 'Shopping Cart';
	const navigate = useNavigate();
	const shoppingCart = JSON.parse(localStorage.getItem('cart'));
	const [skeleton] = useState([1, 2, 3]);
	const [isBlank, setIsBlank] = React.useState(false);

	function countTotal() {
		let total = 0;
		for (let i = 0; i < shoppingCart.length; i++) {
			total += parseInt(shoppingCart[i].price);
		}
		return total;
	}

	return (
		<div>
			<Layout>
				<main>
					<div
						className='container bg-light my-5 py-lg-3 px-lg-5'
						style={{ borderRadius: 1 + 'em' }}>
						{/* #1 Choose Address */}

						{/* #2 Selected Product */}
						<div className='text-uppercase row text-center border-bottom'>
							<div className='col-7 h6'>Description</div>
							<div className='col-2 h6'>Qty</div>
							<div className='col-1 h6'>Remove</div>
							<div className='col-2 h6'>Price</div>
						</div>
						<div className='row mt-3'>
							{isBlank
								? skeleton.map((item, index) => {
										return (
											<WideCard
												key={index}
												id={item}
												product={'No Items Added'}
												price={'Rp.0'}
												img={
													'https://via.placeholder.com/150'
												}
											/>
										);
								  })
								: shoppingCart.map((item, index) => {
										return (
											<WideCard
												key={index}
												img={item.image}
												product={item.product}
												price={parseInt(item.price)}
												label={'x'}
												click={() => {
													let getLocal = JSON.parse(
														localStorage.getItem(
															'cart'
														)
													);
													getLocal.splice(index, 1);
													localStorage.setItem(
														'cart',
														JSON.stringify(getLocal)
													);
													Swal.fire({
														icon: 'success',
														title: 'Product removed',
														showConfirmButton: false,
														timer: 1500,
													});
													navigate('/cart');
												}}
											/>
										);
								  })}
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
										Rp. {countTotal().toLocaleString()}
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
