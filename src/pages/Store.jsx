import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { SmallCard } from '../components/Card';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function Store() {
	document.title = 'My Store';
	const [products, setProducts] = useState([]);
	const navigate = useNavigate();
	const [name, setName] = useState('');
	const [price, setPrice] = useState(0);
	const [stock, setStock] = useState(0);
	const [image, setImage] = useState('');

	// If get data from localStorage
	const userProducts = JSON.parse(localStorage.getItem('user-product'));

	return (
		<div>
			<Layout>
				<main>
					<h2 className='text-center mb-1 mt-3 fw-bold pb-3'>
						My Store
					</h2>
					<Link to='/new-product'>
						<Button
							variant='success'
							className='my-1 justify-content-center'>
							<i className='fa-solid fa-circle-plus me-2'></i>
							Add Product
						</Button>
					</Link>
					<div className='container'>
						<section
							id='listProduct'
							className='row justify-content-center my-2 border-top border-5'>
							{userProducts.map((item, index) => {
								return (
									<SmallCard
										key={index}
										img={item.image}
										product={item.product}
										edit={() => {
											setName(item.product);
											setPrice(item.price);
											setStock(item.stock);
											setImage(item.image);
											Swal.fire({
												title: 'Edit Product',
												html: `
													<form>
														<div className='form-group text-end justify-content-end'>
														<br /><label>Product Name</label>
															<br />
															<input type='text' className='form-control' value=${item.product} />
															</div>
															<div className='form-group'>
															<br /><label>Image</label>
															<br />
															<input type='text' className='form-control' value=${item.image} />
															</div>
															<div className='form-group'>
															<br /><label>Price</label>
															<br />
															<input type='text' className='form-control' value=${item.price} />
															</div>
															<div className='form-group'>
															<br />
															<label>Stock</label>
															<br />
															<input type='text' className='form-control' value=${item.stock} />
															</div>
														</form>
														`,
												showCancelButton: true,
												confirmButtonText: 'Edit',
												confirmButtonColor: '#00a8ff',
												cancelButtonText: 'Cancel',
												showLoaderOnConfirm: true,
											});
										}}
										price={parseInt(
											item.price
										).toLocaleString()}
										stock={item.stock}
										label={'Remove'}
										color={'danger'}
										click={() => {
											Swal.fire({
												title: 'Are you sure?',
												text: "You won't be able to revert this!",
												icon: 'warning',
												showCancelButton: true,
												confirmButtonColor: '#3085d6',
												cancelButtonColor: '#d33',
												confirmButtonText:
													'Yes, delete it!',
											}).then((result) => {
												if (result.value) {
													Swal.fire({
														title: 'Deleted!',
														text: 'Your file has been deleted.',
														icon: 'success',
														showConfirmButton: false,
														confirmButtonColor:
															'#3085d6',
														timer: 1500,
													});
													let getLocal = JSON.parse(
														localStorage.getItem(
															'user-product'
														)
													);
													getLocal.splice(index, 1);
													localStorage.setItem(
														'user-product',
														JSON.stringify(getLocal)
													);
													setProducts(getLocal);
													navigate('/store');
												}
											});
										}}
									/>
								);
							})}
						</section>
					</div>
				</main>
			</Layout>
		</div>
	);
}
