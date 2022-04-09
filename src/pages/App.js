import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { SmallCard } from '../components/Card';
import Layout from '../components/Layout';
import '../styles/App.css';
import { withRouter } from '../utils/navigation';

function App() {
	document.title = 'E-Commerce App';

	const products = JSON.parse(localStorage.getItem('product'));
	return (
		<div className='App'>
			<Layout>
				<main>
					<section
						id='listProduct'
						className='row justify-content-center my-2'>
						{products.map((item, index) => {
							return (
								<SmallCard
									key={index}
									img={item.image}
									product={item.product}
									price={item.price}
									stock={item.stock}
									label={'Add to Cart'}
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
