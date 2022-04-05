import logo from '../assets/logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import Navbar from '../components/Navbar';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<main>
				<h1>Hello World</h1>
			</main>
		</div>
	);
}

export default App;
