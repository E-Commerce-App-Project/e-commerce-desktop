import 'bootstrap/dist/css/bootstrap.min.css';
import { SmallCard } from '../components/Card';
import Layout from '../components/Layout';
import '../styles/App.css';
import { withRouter } from '../utils/navigation';
import Swal from 'sweetalert2';
import { useState } from 'react';

function App() {
	document.title = 'E-Commerce App';

	const products = JSON.parse(localStorage.getItem('product'));
	const [skeleton] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	const [isReady, setIsReady] = useState(false);

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
						{isReady
							? skeleton.map((item, index) => {
									return (
										<div className='col-lg-2 col-auto mx-md-0 mx-lg-2 my-2'>
											<img
												src={`https://picsum.photos/200/300?random=${index}`}
												alt='product'
												className='w-100 rounded-top'
											/>
											<div className='bg-light card-group rounded-bottom mb-1'>
												<div className='text-start mx-2'>
													<h6
														className='my-1 text-uppercase w-100'
														style={{
															textOverflow:
																'ellipsis',
															display:
																'-webkit-box',
															WebkitLineClamp: 2,
															WebkitBoxOrient:
																'vertical',
															overflow: 'hidden',
														}}>
														Product Name
													</h6>
													<h6 className='my-1 fw-bold fs-5'>
														Rp. 100.000
													</h6>
													<h6 className=''>
														Stock: 10
													</h6>
												</div>
												<div className='text-end'>
													<button
														className='btn btn-sm btn-outline-primary'
														onClick={() =>
															addCart(item)
														}>
														Add to cart
													</button>
												</div>
											</div>
										</div>
									);
							  })
							: products.map((item, index) => {
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
