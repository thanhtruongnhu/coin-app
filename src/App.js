import { Flex } from '@chakra-ui/layout';
// import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import { AnimatePresence, motion } from 'framer-motion';
import PortFolio from './PortFolio';
import Sidebar from './Sidebar';

function App() {
	const location = useLocation();

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
		<div className="App">
			<Header />
			{/* Box: d="flex" */}
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
								transition={{ duration: 0.65}}
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
		</div>
	);
}

export default App;
