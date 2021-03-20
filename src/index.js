import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme';
import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<>
		<ChakraProvider>
			<Provider store={store}>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		</ChakraProvider>
	</>,
	document.getElementById('root')
);
