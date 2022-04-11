import React from 'react';
import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SmallCard = ({
	img,
	product,
	price,
	stock,
	label,
	click,
	edit,
	color,
}) => {
	return (
		<>
			<div className='col-lg-2 col-auto mx-md-0 mx-lg-2 my-2'>
				{/* <Link to={`/detail/${id}`}> */}
				<img
					src={img}
					alt='product'
					width={100}
					height={160}
					onClick={edit}
					className='w-100 rounded-top'
				/>
				{/* </Link> */}
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
								height: '2.5em',
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
						variant={color}
						className=' text-uppercase fw-bold'
						style={{ borderRadius: '0.5rem' }}
						onClick={click}>
						{label}
					</Button>
				</div>
			</div>
		</>
	);
};

const WideCard = ({ img, product, price, label, click }) => {
	const [qty, setQty] = React.useState(1);
	return (
		<>
			{/* Image */}
			<div className='col-2 my-1'>
				<img
					src={img}
					alt='product'
					className='w-100'
					style={{ borderRadius: 1 + 'em' }}
				/>
			</div>
			{/* Desc Product */}
			<div className='col-5 m-auto'>
				<h5 className=' text-uppercase w-100'>{product}</h5>
			</div>
			{/* Qty */}
			<div className='col-2 m-auto'>
				<input
					// type='number'
					className='form-control-lg bg-light border-0 fw-bold text-center w-100'
					value={qty}
					disabled
					onChange={(e) => setQty(e.target.value)}
				/>
			</div>
			{/* Remove */}
			<div className='col-1 m-auto text-center'>
				<Button
					variant='danger'
					className='text-uppercase fw-bold px-3 py-2 text-center btn btn-danger'
					onClick={click}
					style={{ borderRadius: '0.5rem' }}>
					{label}
				</Button>
			</div>
			{/* Price */}
			<div className='col-2 m-auto'>
				<h6 className='text-end fw-bold fs-5'>
					Rp. {(qty * price).toLocaleString()}
				</h6>
			</div>
		</>
	);
};

const ReceiptCard = ({ product, price }) => {
	let qty = 1;
	return (
		<>
			{/* Description */}
			<div className='col-8 m-auto'>
				<h5 className='my-2 text-uppercase w-100'>{product}</h5>
			</div>
			{/* Qty */}
			<div className='col-2 text-center m-auto'>
				<h5 className=''>{qty} </h5>
			</div>
			{/* Price */}
			<div className='col-2 text-end m-auto'>
				<h6 className='text-end fs-5'>Rp. {price.toLocaleString()}</h6>
			</div>
		</>
	);
};

const BigCard = ({ img, product, price, stock, label }) => {
	const reqLogin = () => {
		if (localStorage.getItem('token') === null) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Please Login First',
			});
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
