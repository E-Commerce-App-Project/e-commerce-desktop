import 'bootstrap/dist/css/bootstrap.min.css';
import { SmallCard } from '../components/Card';
import Layout from '../components/Layout';
import '../styles/App.css';

function App() {
	return (
		<div className='App'>
			<Layout>
				<main>
					<h1>Hello World</h1>
					<SmallCard />
				</main>
			</Layout>
		</div>
	);
}

export default App;
