import 'bootstrap/dist/css/bootstrap.min.css';
import { SmallCard } from '../components/Card';
import Layout from '../components/Layout';
import '../styles/App.css';
import { withRouter } from '../utils/navigation';
import Swal from 'sweetalert2';

function App() {
	document.title = 'E-Commerce App';

	const products = JSON.parse(localStorage.getItem('product'));

	const addCart = (item) => {
		let getLocal = JSON.parse(localStorage.getItem('cart'));
		if (getLocal) {
			getLocal.push(item);
			localStorage.setItem('cart', JSON.stringify(getLocal));
		} else {
			localStorage.setItem('cart', JSON.stringify([item]));
		}
		Swal.fire({
			icon: 'success',
			title: 'Product added to cart',
			showConfirmButton: false,
			timer: 1500,
		});
	};
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
									price={parseInt(
										item.price
									).toLocaleString()}
									stock={item.stock}
									label={'Add to Cart'}
									click={() => addCart(item)}
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
