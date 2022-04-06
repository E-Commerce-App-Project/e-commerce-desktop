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
							product='IPASON Desktop PC Geforce Gaming Computer 1650/3060/3070/3080Ti/ 1050Ti AMD R5 5600X'
							price='16.500.000 '
							stock='3'
							label='Add to Cart'
						/>
						<SmallCard
							img='https://via.placeholder.com/300.png/09f/fff'
							product='IPASON Desktop PC Geforce Gaming Computer 1650/3060/3070/3080Ti/ 1050Ti AMD R5 5600X'
							price='17.500.000 '
							stock='5'
							label='Add to Cart'
						/>
						<SmallCard
							img='https://via.placeholder.com/300.png/09f/fff'
							product='IPASON Desktop PC Geforce Gaming Computer 1650/3060/3070/3080Ti/ 1050Ti AMD R5 5600X'
							price='15.500.000 '
							stock='1'
							label='Add to Cart'
						/>
						<SmallCard
							img='https://via.placeholder.com/300.png/09f/fff'
							product='IPASON Desktop PC Geforce Gaming Computer 1650/3060/3070/3080Ti/ 1050Ti AMD R5 5600X'
							price='17.500.000 '
							stock='6'
							label='Add to Cart'
						/>
						<SmallCard
							img='https://via.placeholder.com/300.png/09f/fff'
							product='IPASON Desktop PC Geforce Gaming Computer 1650/3060/3070/3080Ti/ 1050Ti AMD R5 5600X'
							price='16.700.000 '
							stock='2'
							label='Add to Cart'
						/>
						<SmallCard
							img='https://via.placeholder.com/300.png/09f/fff'
							product='IPASON Desktop PC Geforce Gaming Computer 1650/3060/3070/3080Ti/ 1050Ti AMD R5 5600X'
							price='16.500.000 '
							stock='3'
							label='Add to Cart'
						/>
						<SmallCard
							img='https://via.placeholder.com/300.png/09f/fff'
							product='IPASON Desktop PC Geforce Gaming Computer 1650/3060/3070/3080Ti/ 1050Ti AMD R5 5600X'
							price='17.500.000 '
							stock='5'
							label='Add to Cart'
						/>
						<SmallCard
							img='https://via.placeholder.com/300.png/09f/fff'
							product='IPASON Desktop PC Geforce Gaming Computer 1650/3060/3070/3080Ti/ 1050Ti AMD R5 5600X'
							price='15.500.000 '
							stock='1'
							label='Add to Cart'
						/>
						<SmallCard
							img='https://via.placeholder.com/300.png/09f/fff'
							product='IPASON Desktop PC Geforce Gaming Computer 1650/3060/3070/3080Ti/ 1050Ti AMD R5 5600X'
							price='17.500.000 '
							stock='6'
							label='Add to Cart'
						/>
						<SmallCard
							img='https://via.placeholder.com/300.png/09f/fff'
							product='IPASON Desktop PC Geforce Gaming Computer 1650/3060/3070/3080Ti/ 1050Ti AMD R5 5600X'
							price='16.700.000 '
							stock='2'
							label='Add to Cart'
						/>
						<SmallCard
							img='https://via.placeholder.com/300.png/09f/fff'
							product='IPASON Desktop PC Geforce Gaming Computer 1650/3060/3070/3080Ti/ 1050Ti AMD R5 5600X'
							price='16.500.000 '
							stock='3'
							label='Add to Cart'
						/>
						<SmallCard
							img='https://via.placeholder.com/300.png/09f/fff'
							product='IPASON Desktop PC Geforce Gaming Computer 1650/3060/3070/3080Ti/ 1050Ti AMD R5 5600X'
							price='17.500.000 '
							stock='5'
							label='Add to Cart'
						/>
						<SmallCard
							img='https://via.placeholder.com/300.png/09f/fff'
							product='IPASON Desktop PC Geforce Gaming Computer 1650/3060/3070/3080Ti/ 1050Ti AMD R5 5600X'
							price='15.500.000 '
							stock='1'
							label='Add to Cart'
						/>
						<SmallCard
							img='https://via.placeholder.com/300.png/09f/fff'
							product='IPASON Desktop PC Geforce Gaming Computer 1650/3060/3070/3080Ti/ 1050Ti AMD R5 5600X'
							price='17.500.000 '
							stock='6'
							label='Add to Cart'
						/>
						<SmallCard
							img='https://via.placeholder.com/300.png/09f/fff'
							product='IPASON Desktop PC Geforce Gaming Computer 1650/3060/3070/3080Ti/ 1050Ti AMD R5 5600X'
							price='16.700.000 '
							stock='2'
							label='Add to Cart'
						/>
					</section>
				</main>
			</Layout>
		</div>
	);
}

export default withRouter(App);
