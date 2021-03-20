import { Flex } from '@chakra-ui/layout';
// import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';

import PortFolio from './PortFolio';
import Sidebar from './Sidebar';

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				{/* Box: d="flex" */}
				<Flex>
					<Sidebar />

					<Switch>
					<Route path="/TopCrypto">
							TOP CRYPTO
						</Route>
						<Route path="/Chart">
							CHART
						</Route>
						<Route exact path="/PortFolio">
							<PortFolio />
						</Route>
						<Route exact path="/">
							<PortFolio />
						</Route>
					</Switch>
				</Flex>

				{/* Switch: LoginScreen */}
				{/* Switch: Top Stock */}
				{/* Switch: Chart */}
				{/* Switch: Chat Channels */}
			</Router>
		</div>
	);
}

export default App;
