import React, { useState } from 'react';

import Select from 'react-select';

import { useSelector } from 'react-redux';
import { selectCoin } from '../features/allCoinSlice';
import { chakra } from '@chakra-ui/system';

const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' },
];

export default function Dropdown() {
	const [ariaFocusMessage, setAriaFocusMessage] = useState('');
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [symbol, setSymbol] = useState(null);
	const coins = useSelector(selectCoin);

	const style = {
		blockquote: {
			fontStyle: 'italic',
			fontSize: '.75rem',
			margin: '1rem 0',
		},
		label: {
			fontSize: '.75rem',
			fontWeight: 'bold',
			lineHeight: 2,
		},
	};

	const onFocus = ({ focused, isDisabled }) => {
		const msg = `You are currently focused on option ${focused.label}${
			isDisabled ? ', disabled' : ''
		}`;
		setAriaFocusMessage(msg);
		return msg;
	};

	const onMenuOpen = () => setIsMenuOpen(true);
	const onMenuClose = () => setIsMenuOpen(false);

	console.log(symbol);

	function customTheme(theme) {
		return {
			...theme,
			colors: {
				...theme.colors,
				primary25: 'orange',
				primary: 'orange',
				neutral0: '#11121B',
			},
		};
	}

	const customStyles = {
		// menu: (provided, state) => ({
		// 	...provided,
		// 	width: 200,
		// borderBottom: '1px dotted pink',
		// color: state.selectProps.menuColor,
		// padding: 20,
		// }),

		control: (_, { selectProps: { width } }) => ({
			width: width,
		}),

		// singleValue: (provided, state) => {
		// 	const opacity = state.isDisabled ? 0.5 : 1;
		// 	const transition = 'opacity 300ms';

		// 	return { ...provided, opacity, transition };
		// },
	};

	return (
		<chakra.form>
			<label style={style.label} id="aria-label" htmlFor="aria-example-input">
				Select a crypto
			</label>

			{!!ariaFocusMessage && !!isMenuOpen && (
				<blockquote style={style.blockquote}>"{ariaFocusMessage}"</blockquote>
			)}

			<Select
				aria-labelledby="aria-label"
				ariaLiveMessages={{
					onFocus,
				}}
				inputId="aria-example-input"
				name="aria-live-color"
				onMenuOpen={onMenuOpen}
				onMenuClose={onMenuClose}
				onChange={setSymbol}
				options={coins}
				theme={customTheme}
				// styles={customStyles}
				styles={{
					option: (base) => ({
						...base,
						border: `1px solid gray`,
						height: '100%',
					}),
					control: (styles) => ({
						...styles,
						backgroundColor: 'white',
						width: 350,
                        textColor: 'blue'
					}),
				}}
				width="300px"
			/>
		</chakra.form>
	);
}
