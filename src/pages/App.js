import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SmallCard } from '../components/Card';
import Layout from '../components/Layout';
import '../styles/App.css';
import { withRouter } from '../utils/navigation';

function App() {
	document.title = 'E-Commerce App';
	const [products, setProducts] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = async () => {
		axios
			.get(`https://web-app-zgunz42.cloud.okteto.net/api/v1/products`)
			.then((response) => {
				setProducts(response.data.data);
				console.log(response.data.data);
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
									key={product.product_id}
									id={product.product_id}
									product={product.name}
									price={product.price}
									img={product.image}
									stock={product.stock}
									label='Add to Cart'
									navigate={`/detail/${product.product_id}`}
								/>
							);
						})}
					</section>
				</main>
			</Layout>
		</div>
	);
}

export default withRouter(App);
