import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { SmallCard } from '../components/Card';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Store() {
	document.title = 'My Store';
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = async () => {
		axios
			.get(`https://web-app-zgunz42.cloud.okteto.net/api/v1/products`)
			.then((response) => {
				setProducts(response.data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const deleteProduct = async (id) => {
		await axios
			.delete(
				`https://web-app-zgunz42.cloud.okteto.net/api/v1/products/${id}`
			)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<Layout>
				<main>
					<h2 className='text-center my-3 fw-bold'>My Store</h2>
					<Link to='/new-product'>
						<Button variant='success float-end' className='my-3'>
							Add Product
						</Button>
					</Link>
					<section
						id='listProduct'
						className='row justify-content-center my-2'>
						{products.map((product) => {
							return (
								<SmallCard
									key={product.id}
									id={product.id}
									product={product.name}
									price={product.price}
									img={product.image}
									stock={product.stock}
									label='Remove'
									click={deleteProduct}
								/>
							);
						})}
					</section>
				</main>
			</Layout>
		</div>
	);
}
