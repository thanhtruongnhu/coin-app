import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme';
import { Provider } from 'react-redux';
import store from './app/store';

ReactDOM.render(
	<>
		<ChakraProvider>
			<Provider store={store}>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<App />
			</Provider>
		</ChakraProvider>
	</>,
	document.getElementById('root')
);
