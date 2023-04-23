import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './Components/Menu';
import DriftPage from './Pages/Drift';
import ForzaPage from './Pages/Forza';
import HomePage from './Pages/Home';
import TimeAttackPage from './Pages/TimeAttack';
import './App.css';

function App() {
	return (
		<Router>
			<div>
				<Menu />
				<div className="page">
					<Routes>
						<Route path="/" exact element={<HomePage />} />
						<Route path="/drift" element={<DriftPage />} />
						<Route path="/timeattack" element={<TimeAttackPage />} />
						<Route path="/forza" element={<ForzaPage />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
