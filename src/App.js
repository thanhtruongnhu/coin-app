import { Box, Flex } from '@chakra-ui/layout';
// import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import { AnimatePresence } from 'framer-motion';
import PortFolio from './Pages/PortFolio';
import Sidebar from './Sidebar';
import { useColorMode } from '@chakra-ui/color-mode';
import { useDispatch } from 'react-redux';
import { dark, light } from './features/hoverthemeSlice';
import { useEffect } from 'react';
import ChartPage from './Pages/ChartPage';
import TopCryp from './Pages/TopCryp';
import Chat from './Chat/Chat';
import axios from 'axios';
import requests from './Request';
import { update } from './features/allCoinSlice';

function App() {
	const location = useLocation();
	const { colorMode, toggleColorMode } = useColorMode();
	const dispatch = useDispatch();

	useEffect(() => {
		if (colorMode === 'dark') {
			dispatch(dark());
		} else {
			dispatch(light());
		}
	}, [colorMode, dispatch]);

	useEffect(() => {
		function edit(coinapi) {
			let newCoin = {
				value: coinapi.symbol,
				label: coinapi.name,
			};
			let coin = Object.assign(coinapi, newCoin);
			return coin;
		}

		axios
			.get(requests.fetchAllCoins)
			.then((res) => {
				dispatch(update(res.data.data.slice(0, 200).map((coin) => edit(coin))));
				// console.log(res.data.data.slice(0, 200));
			})
			.catch((error) => console.log(error));
	}, [dispatch]);

	// useEffect(() => {
	// 	axios
	// 		.get(requests.fetchAllCoins)
	// 		.then((res) => {
	// 			dispatch(update(res.data.data.slice(0, 200)));
	// 			console.log(res.data.data.slice(0, 200));
	// 		})
	// 		.catch((error) => console.log(error));
	// }, []);

	return (
		<>
			<Header />
			<Box
				d="flex"
				h="100vh"
				//  h="100%"
			>
				<Sidebar />
				<AnimatePresence exitBeforeEnter>
					<Switch location={location} key={location.pathname}>
						<Route path="/TopCrypto">
							<TopCryp />
						</Route>
						<Route path="/Chart">
							<ChartPage />
						</Route>
						<Route path="/PortFolio">
							<PortFolio />
						</Route>
						<Route path="/:roomId">
							<Chat />
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
