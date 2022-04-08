import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';
import { BigCard, DescriptionProduct } from '../components/Card';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Detail() {
	document.title = 'Detail Product';
	const params = useParams();

	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetchProduct();
	}, []);

	const fetchProduct = async () => {
		const { product_id } = params;
		await axios
			.get(
				`https://web-app-zgunz42.cloud.okteto.net/api/v1/products/${product_id}`
			)
			.then((response) => {
				setProducts(response.data.data);
				console.log(response.data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<Layout>
			<main>
				<div
					className='container bg-light my-5 py-lg-3 px-lg-5'
					style={{ borderRadius: 1 + 'em' }}>
					<div className='row container p-3'>
						<div className='col-4'>
							<BigCard
								img={products.image}
								product={products.name}
								price={products.price}
								stock={products.stock}
								label={'Add to Cart'}
							/>
						</div>
						<div className='col-8 pb-3 ps-4'>
							<h3 className='fw-bold text-uppercase text-primary'>
								Product Description
							</h3>
							<DescriptionProduct
								description={products.description}
							/>
						</div>
					</div>
				</div>
			</main>
		</Layout>
	);
}
