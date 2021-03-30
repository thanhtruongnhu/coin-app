import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import theme from './theme';
import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<ColorModeScript initialColorMode="dark" />
			<App />
		</BrowserRouter>
	</Provider>,

	document.getElementById('root')
);
