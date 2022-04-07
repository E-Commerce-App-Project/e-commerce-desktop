import 'bootstrap/dist/css/bootstrap.min.css';
import { SmallCard } from '../components/Card';
import Layout from '../components/Layout';
import '../styles/App.css';
import { withRouter } from '../utils/navigation';

function App() {
	document.title = 'E-Commerce App';
	return (
		<div className='App'>
			<Layout>
				<main>
					<section
						id='listProduct'
						className='row justify-content-center my-2'>
						<SmallCard
							img='https://via.placeholder.com/300.png/09f/fff'
							product='Apple MacBook Pro 2021 14 16 Inch M1 Max 16GB 32 512GB'
							price='28.540.000'
							stock='3'
							label='Add to Cart'
						/>
						<SmallCard
							img='https://via.placeholder.com/300.png/09f/fff'
							product='Apple MacBook Pro 2021 14 16 Inch M1 Max 16GB 32 512GB'
							price='28.540.000'
							stock='3'
							label='Add to Cart'
						/>
						<SmallCard
							img='https://via.placeholder.com/300.png/09f/fff'
							product='Apple MacBook Pro 2021 14 16 Inch M1 Max 16GB 32 512GB'
							price='28.540.000'
							stock='3'
							label='Add to Cart'
						/>
						<SmallCard
							img='https://via.placeholder.com/300.png/09f/fff'
							product='Apple MacBook Pro 2021 14 16 Inch M1 Max 16GB 32 512GB'
							price='28.540.000'
							stock='3'
							label='Add to Cart'
						/>
						<SmallCard
							img='https://via.placeholder.com/300.png/09f/fff'
							product='Apple MacBook Pro 2021 14 16 Inch M1 Max 16GB 32 512GB'
							price='28.540.000'
							stock='3'
							label='Add to Cart'
						/>
						<SmallCard
							img='https://via.placeholder.com/300.png/09f/fff'
							product='Apple MacBook Pro 2021 14 16 Inch M1 Max 16GB 32 512GB'
							price='28.540.000'
							stock='3'
							label='Add to Cart'
						/>
						<SmallCard
							img='https://via.placeholder.com/300.png/09f/fff'
							product='Apple MacBook Pro 2021 14 16 Inch M1 Max 16GB 32 512GB'
							price='28.540.000'
							stock='3'
							label='Add to Cart'
						/>
						<SmallCard
							img='https://via.placeholder.com/300.png/09f/fff'
							product='Apple MacBook Pro 2021 14 16 Inch M1 Max 16GB 32 512GB'
							price='28.540.000'
							stock='3'
							label='Add to Cart'
						/>
						<SmallCard
							img='https://via.placeholder.com/300.png/09f/fff'
							product='Apple MacBook Pro 2021 14 16 Inch M1 Max 16GB 32 512GB'
							price='28.540.000'
							stock='3'
							label='Add to Cart'
						/>
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
