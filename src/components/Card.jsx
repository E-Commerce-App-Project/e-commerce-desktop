import React from 'react';
import { Button } from 'react-bootstrap';

const SmallCard = ({ img, product, price, stock, label }) => {
	return (
		<>
			<div className='col-lg-2 col-md-4 col-auto mx-md-0 mx-lg-2 my-2'>
				<img src={img} alt='product' className='w-100 rounded-top' />
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
						<h6 className='my-1 fw-bold fs-5'>Rp. {price}</h6>
						<h6 className=''>Stock: {stock}</h6>
					</div>
				</div>
				<div className='d-grid gap-2'>
					<Button
						variant='warning'
						className=' text-uppercase fw-bold'
						style={{ borderRadius: '0.5rem' }}>
						{label}
					</Button>
				</div>
			</div>
		</>
	);
};

export { SmallCard };
