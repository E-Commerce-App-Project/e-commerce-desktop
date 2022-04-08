import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { SmallCard } from '../components/Card';
import { Link } from 'react-router-dom';

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
				setProducts(response.data.products);
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
						<h5 className='text-black text-end'>Add Product</h5>
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
									label='Remove'
								/>
							);
						})}
					</section>
				</main>
			</Layout>
		</div>
	);
}
