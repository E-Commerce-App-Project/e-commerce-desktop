import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Layout from '../components/Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {
	document.title = 'Add Product';
	const navigate = useNavigate();

	const [product, setProduct] = useState('');
	const [price, setPrice] = useState('');
	const [image, setImage] = useState('');
	const [description, setDescription] = useState('');
	const [stock, setStock] = useState('');

	const handleSubmit = () => {
		const productItem = {
			product,
			price,
			image,
			description,
			stock,
		};
		let getLocal = JSON.parse(localStorage.getItem('product'));
		if (getLocal === null) {
			let newLocal = [];
			newLocal.push(productItem);
			localStorage.setItem('product', JSON.stringify(newLocal));
		} else {
			getLocal.push(productItem);
			localStorage.setItem('product', JSON.stringify(getLocal));
		}
		setProduct('');
		setPrice('');
		setImage('');
		setDescription('');
		setStock('');
		alert('Product Added');
	};

	return (
		<Layout>
			<div
				className='container bg-light my-5 py-lg-3 px-lg-5'
				style={{ borderRadius: 1 + 'em' }}>
				<Container className='m-5'>
					<Row>
						<Col xs={12} md={8}>
							<Form>
								<Form.Group
									className='mb-3'
									controlId='formBasicProductName'>
									<Form.Label>
										Product Name <span>*</span>
									</Form.Label>
									<Form.Control
										type='text'
										placeholder='Add your product name'
										value={product}
										onChange={(e) =>
											setProduct(e.target.value)
										}
									/>
								</Form.Group>

								<Form.Group
									className='mb-3'
									controlId='formBasicDescription'>
									<Form.Label>Image</Form.Label>
									<h6>please input image URL</h6>
									<Form.Control
										type='text'
										placeholder='Add images url'
										value={image}
										onChange={(e) => {
											setImage(e.target.value);
										}}
									/>
								</Form.Group>
								<Form.Group
									className='mb-3'
									controlId='formBasicDescription'>
									<Form.Label>
										Description <span>*</span>
									</Form.Label>
									<Form.Control
										as='textarea'
										type='text'
										placeholder='Add your description'
										value={description}
										onChange={(e) =>
											setDescription(e.target.value)
										}
										style={{ height: '150px' }}
									/>
								</Form.Group>
								<Form.Group
									className='mb-3'
									controlId='formBasicPrice'>
									<Form.Label>
										Price (Rp) <span>*</span>
									</Form.Label>
									<Form.Control
										type='number'
										placeholder='Add your Price'
										value={price}
										onChange={(e) =>
											setPrice(e.target.value)
										}
									/>
								</Form.Group>
								<Form.Group
									className='mb-3'
									controlId='formBasicStock'>
									<Form.Label className='text-muted'>
										Stock
									</Form.Label>
									<Form.Control
										type='number'
										placeholder='Add your Price'
										value={stock}
										onChange={(e) =>
											setStock(e.target.value)
										}
									/>
								</Form.Group>
								<Button
									variant='warning'
									className=' text-uppercase fw-bold mx-2'
									style={{ borderRadius: '0.5rem' }}>
									Cancel
								</Button>
								<Button
									variant='primary'
									className=' text-uppercase fw-bold mx-2'
									onClick={handleSubmit}
									style={{ borderRadius: '0.5rem' }}>
									Upload
								</Button>
							</Form>
						</Col>
					</Row>
				</Container>
			</div>
		</Layout>
	);
}
