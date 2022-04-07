import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';
import { BigCard, DescriptionProduct } from '../components/Card';

export default function Detail() {
	document.title = 'Detail Product';
	return (
		<Layout>
			<main>
				<div
					className='container bg-light my-5 py-lg-3 px-lg-5'
					style={{ borderRadius: 1 + 'em' }}>
					<div className='row container p-3'>
						<div className='col-4'>
							<BigCard
								img='https://via.placeholder.com/300.png/09f/fff'
								product='Apple MacBook Pro 2021 14 16 Inch M1 Max 16GB 32 512GB 1TB '
								price='28.540.000'
								stock='3'
								label='Add to Cart'
							/>
						</div>
						<div className='col-8 pb-3 ps-4'>
							<h3 className='fw-bold text-uppercase text-primary'>
								Product Description
							</h3>
							<DescriptionProduct description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non odio euismod lacinia at quis risus sed vulputate odio. Tristique senectus et netus et malesuada fames ac. Erat velit scelerisque in dictum non consectetur. Neque laoreet suspendisse interdum consectetur libero. Velit laoreet id donec ultrices. Id aliquet lectus proin nibh nisl condimentum id venenatis. Ac placerat vestibulum lectus mauris. Duis at tellus at urna condimentum mattis pellentesque. Viverra nam libero justo laoreet sit amet cursus. Morbi enim nunc faucibus a. Semper quis lectus nulla at volutpat diam ut venenatis. Nunc consequat interdum varius sit amet. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Amet purus gravida quis blandit turpis. Tristique senectus et netus et malesuada fames ac. Nunc eget lorem dolor sed viverra ipsum. Sed pulvinar proin gravida hendrerit lectus a. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Tempus iaculis urna id volutpat lacus.' />
						</div>
					</div>
				</div>
			</main>
		</Layout>
	);
}
