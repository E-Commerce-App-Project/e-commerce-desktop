import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SmallCard = ({ img, product, price, stock, label }) => {
	const reqLogin = () => {
		if (localStorage.getItem('token') === null) {
			alert('Please Login First');
		}
	};
	return (
		<>
			<div className='col-lg-2 col-auto mx-md-0 mx-lg-2 my-2'>
				<Link to={`/detail/${product.id}`}>
					<img
						src={img}
						alt='product'
						className='w-100 rounded-top'
					/>
				</Link>
				<div className='bg-light card-group rounded-bottom mb-1'>
					<div className='text-start mx-2'>
						<h6
							className='my-1 text-uppercase w-100'
							style={{
								textOverflow: 'ellipsis',
								display: '-webkit-box',
								WebkitLineClamp: 2,
								WebkitBoxOrient: 'vertical',
								overflow: 'hidden',
							}}>
							{product}
						</h6>
						<h6 className='my-1 fw-bold fs-5'>
							Rp. {price.toLocaleString()}
						</h6>
						<h6 className=''>Stock: {stock}</h6>
					</div>
				</div>
				<div className='d-grid gap-2'>
					<Button
						variant='warning'
						className=' text-uppercase fw-bold'
						style={{ borderRadius: '0.5rem' }}
						onClick={reqLogin}>
						{label}
					</Button>
				</div>
			</div>
		</>
	);
};

const WideCard = ({ img, product, price, label }) => {
	let qty = 1;

	function increaseQty() {
		document.getElementById('quantity').innerHTML = qty++;
	}

	function decreaseQty() {
		document.getElementById('quantity').innerHTML = qty--;
		if (qty < 1) {
			qty = 1;
		}
	}

	return (
		<>
			<div className='col-lg-2 mx-md-0 mx-lg-2 my-2'>
				<Link to={'/detail'}>
					<img
						src={img}
						alt='product'
						className='w-100'
						style={{ borderRadius: 1 + 'em' }}
					/>
				</Link>
			</div>
			<div className='col-lg-7 bg-light me-5'>
				<div className='text-start mx-2 my-2'>
					<h5 className=' text-uppercase w-100'>{product}</h5>
					<h6 className=' fw-bold fs-3'>
						Rp. {price.toLocaleString()}
					</h6>
				</div>
			</div>
			<div className='col-2 position-relative'>
				<span className='d-flex justify-content-between'>
					<h6 className='my-auto me-3'>Qty:</h6>
					<div className='flex-wrap'>
						{/* if using select option */}
						{/* <select
							className='form-select form-select-sm'
							aria-label='form-select-sm example'>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
						</select> */}
						{/* if using button */}
						<div
							className='btn-group my-2'
							role='group'
							aria-label='product quantity'>
							<button
								type='button'
								className='btn btn-primary btn-sm border'
								onClick={decreaseQty}>
								-
							</button>
							<h6 className='my-auto px-2' id='quantity'>
								{qty}
							</h6>
							<button
								type='button'
								className='btn btn-primary btn-sm border'
								onClick={increaseQty}>
								+
							</button>
						</div>
					</div>
				</span>
				<span className='my-2 d-flex justify-content-between'>
					<h6 className=''>Subtotal: </h6>
					<h6>{(price * qty).toLocaleString()}</h6>
				</span>
				<Button
					variant='warning'
					className='text-uppercase fw-bold px-5'
					style={{ borderRadius: '0.5rem' }}>
					{label}
				</Button>
			</div>
		</>
	);
};

const ReceiptCard = ({ img, product, price, qty }) => {
	return (
		<>
			<div className='col-lg-2 mx-md-0 mx-lg-2 my-2'>
				<Link to={'/detail'}>
					<img
						src={img}
						alt='product'
						className='w-100'
						style={{ borderRadius: 1 + 'em' }}
					/>
				</Link>
			</div>
			<div className='col-lg-7 bg-light me-5 my-auto'>
				<div className='text-start mx-2'>
					<h4 className=' text-uppercase w-100'>{product}</h4>
				</div>
			</div>
			<div className='col-2 position-relative my-auto text-end'>
				<span className='d-flex justify-content-between my-2'>
					<h5 className=''>Rp. </h5>
					<h5>{price.toLocaleString()}</h5>
				</span>
				<span className='d-flex justify-content-between my-2'>
					<h5 className=''>Qty: </h5>
					<h5 className=''>{qty} </h5>
				</span>
				<span className='d-flex justify-content-between text-warning my-2'>
					<h6 className='justify-content-between'>Subtotal:</h6>
					<h6 className=''>{(price * qty).toLocaleString()}</h6>
				</span>
			</div>
		</>
	);
};

const BigCard = ({ img, product, price, stock, label }) => {
	const reqLogin = () => {
		if (localStorage.getItem('token') === null) {
			alert('Please Login First');
		}
	};
	return (
		<>
			<div className='col-auto my-2'>
				<img src={img} alt='product' className='w-100 rounded-top' />
				<div className='bg-light card-group rounded-bottom mb-1'>
					<div className='text-start mx-2'>
						<h6 className='my-1 text-uppercase w-100'>{product}</h6>
						<h6 className='my-1 fw-bold fs-5'>Rp. {price}</h6>
						<h6 className=''>Stock: {stock}</h6>
					</div>
				</div>
				<div className='d-grid gap-2'>
					<Button
						variant='warning'
						className=' text-uppercase fw-bold'
						onClick={reqLogin}
						style={{ borderRadius: '0.5rem' }}>
						{label}
					</Button>
				</div>
			</div>
		</>
	);
};

const DescriptionProduct = ({ description }) => {
	return (
		<>
			<p
				style={{
					textAlign: 'justify',
					textJustify: 'inter-word',
				}}>
				{description}
			</p>
		</>
	);
};

export { SmallCard, WideCard, ReceiptCard, BigCard, DescriptionProduct };
