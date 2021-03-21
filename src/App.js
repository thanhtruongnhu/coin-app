import { Flex } from '@chakra-ui/layout';
// import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import { AnimatePresence, motion } from 'framer-motion';
import PortFolio from './PortFolio';
import Sidebar from './Sidebar';
import { useColorMode } from '@chakra-ui/color-mode';
import { useDispatch } from 'react-redux';
import { dark, light } from './features/hoverthemeSlice';
import { useEffect } from 'react';

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
	// (colorMode === 'dark')
	// 	? dispatch(dark)
	// 	: dispatch(light);

	const pageVariants = {
		in: {
			opacity: 1,
			// scale: 1,
		},
		out: {
			opacity: 0,
			// scale: 1.05,
		},
	};

	const pageTransition = {
		duration: 0.25,
	};

	return (
		<>
			<Header />
			<Flex>
				<Sidebar />
				<AnimatePresence exitBeforeEnter>
					<Switch location={location} key={location.pathname}>
						<Route path="/TopCrypto">
							<motion.div
								initial="out"
								animate="in"
								exit="out"
								variants={pageVariants}
								transition={pageTransition}
							>
								TOP CRYPTO
							</motion.div>
						</Route>
						<Route path="/Chart">
							<motion.div
								initial="out"
								animate="in"
								exit="out"
								variants={pageVariants}
								transition={pageTransition}
							>
								CHART
							</motion.div>
						</Route>
						<Route path="/PortFolio">
							<motion.div
								initial="out"
								animate="in"
								exit="out"
								variants={pageVariants}
								transition={{ duration: 0.65 }}
							>
								<PortFolio />
							</motion.div>
						</Route>
						<Route exact path="/">
							<PortFolio />
						</Route>
					</Switch>
				</AnimatePresence>
			</Flex>

			{/* Switch: LoginScreen */}
			{/* Switch: Chat Channels */}
		</>
	);
}

export default App;
