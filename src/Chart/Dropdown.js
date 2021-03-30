import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { selectCoin } from '../features/allCoinSlice';
import { chakra } from '@chakra-ui/system';
import { assign } from '../features/selectCoinSlice';

export default function Dropdown() {
	const dispatch = useDispatch();
	const [ariaFocusMessage, setAriaFocusMessage] = useState('');
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [symbol, setSymbol] = useState(null);
	const coins = useSelector(selectCoin);

	useEffect(() => {
		dispatch(assign(symbol?.symbol));
	}, [symbol, dispatch]);

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
				neutral80: 'white',
			},
		};
	}

	return (
		<form>
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
				// onChange={dispatch(assign())}
				options={coins}
				theme={customTheme}
				// styles={customStyles}
				styles={{
					option: (base) => ({
						...base,
						border: `1px dotted gray`,
						height: '100%',
					}),
					control: (styles) => ({
						...styles,
						backgroundColor: '#11121B',
						width: 350,
						textColor: 'blue',
					}),
				}}
				width="300px"
			/>
		</form>
	);
}
