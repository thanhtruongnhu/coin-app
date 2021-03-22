import { Box, Flex } from '@chakra-ui/layout';
// import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import { AnimatePresence } from 'framer-motion';
import PortFolio from './PortFolio';
import Sidebar from './Sidebar';
import { useColorMode } from '@chakra-ui/color-mode';
import { useDispatch } from 'react-redux';
import { dark, light } from './features/hoverthemeSlice';
import { useEffect } from 'react';
import Chart from './Chart';

function App() {
	const location = useLocation();
	const { colorMode, toggleColorMode } = useColorMode();
	const dispatch = useDispatch();

	useEffect(() => {
		/*this is a state Listener. also firebase save the data into the local cookies for your next time sign in */
		if (colorMode === 'dark') {
			dispatch(dark());
		} else {
			dispatch(light());
		}
	}, [colorMode, dispatch]);

	return (
		<>
			<Header />
			<Box d="flex" h="100vh">
				<Sidebar />
				<AnimatePresence exitBeforeEnter>
					<Switch location={location} key={location.pathname}>
						<Route path="/TopCrypto">TOP CRYPTO</Route>
						<Route path="/Chart">
							<Chart />
						</Route>
						<Route path="/PortFolio">
							<PortFolio />
						</Route>
						<Route exact path="/">
							<PortFolio />
						</Route>
					</Switch>
				</AnimatePresence>
			</Box>

			{/* Switch: LoginScreen */}
			{/* Switch: Chat Channels */}
		</>
	);
}

export default App;
