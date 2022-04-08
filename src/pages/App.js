import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { SmallCard } from '../components/Card';
import Layout from '../components/Layout';
import '../styles/App.css';
import { withRouter } from '../utils/navigation';

function App() {
	document.title = 'E-Commerce App';
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
		<div className='App'>
			<Layout>
				<main>
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
									label='Add to Cart'
								/>
							);
						})}
						{/* Dummy purposes */}
						<SmallCard
							img='https://via.placeholder.com/300.png/09f/fff'
							product='Apple MacBook Pro 2021 14 16 Inch M1 Max 16GB 32 512GB'
							price='28.540.000'
							stock='3'
							label='Add to Cart'
						/>
					</section>
				</main>
			</Layout>
		</div>
	);
}

export default withRouter(App);
