import React from 'react';
import { Button } from 'react-bootstrap';

const SmallCard = ({ img, product, price, stock, label }) => {
	return (
		<>
			<div className='col-lg-2 col-md-4 col-auto mx-md-0 mx-lg-2  my-2'>
				<img src={img} alt='product' className='w-100 rounded-3' />
				<div className='text-start mx-2'>
					<h6
						className='my-1 text-uppercase w-100'
						style={{
							textOverflow: 'ellipsis',
							display: '-webkit-box',
							WebkitLineClamp: 3,
							WebkitBoxOrient: 'vertical',
							overflow: 'hidden',
						}}>
						{product}
					</h6>
					<h5 className='my-1 fw-bold'>Rp. {price}</h5>
					<h6 className=' '>{stock}</h6>
				</div>
				<div className='d-grid gap-2'>
					<Button
						variant='warning'
						className='rounded-3 text-uppercase fw-bold'>
						{label}
					</Button>
				</div>
			</div>
		</>
	);
};

export { SmallCard };
