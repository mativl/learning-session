import logo from './logo.svg';
import './App.css';
import MyPresentCard from './Components/MyPresentCard';
import AppContext from './Context/AppContext';

function App() {
	// log('matias');
	return (
		<AppContext>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
					<MyPresentCard />
				</header>
			</div>
		</AppContext>
	);
}

export default App;
