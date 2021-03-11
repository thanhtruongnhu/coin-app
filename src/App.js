import { Flex } from '@chakra-ui/layout';

import './App.css';

import Header from './Header';

import PortFolio from './PortFolio';
import Sidebar from './Sidebar';

function App() {
	return (
		<div className="App">
			{/* <Example/> */}

			<Header />
			{/* Box: d="flex" */}
			<Flex>
				<Sidebar />
				<PortFolio />
			</Flex>

			{/* Switch: HomeScreen */}
			{/* Switch: Top Stock */}
			{/* Switch: Chart */}
			{/* Switch: PortFolio */}
			{/* Switch: Chat Channels */}
		</div>
	);
}

export default App;
