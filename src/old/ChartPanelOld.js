import { chakra } from '@chakra-ui/system';
import { Box } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCoin } from '../features/allCoinSlice';

function ChartPanel() {
	const [search, setSearch] = useState('');
	const coins = useSelector(selectCoin);
	const [chosen, setChosen] = useState(null);
	const inputRef = useRef();
	const ulRef = useRef();

	useEffect(() => {
		inputRef.current.addEventListener('click', (event) => {
			event.stopPropagation();
            console.log(ulRef);
			if (ulRef !== null) {
				ulRef.current.style.display = 'block';
			}
			handleChange(event);
		});
		document.addEventListener('click', (event) => {
            console.log(ulRef);
			if (ulRef !== null) {
				ulRef.current.style.display = 'none';
			}
		});
	}, []);

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const filteredCoins = coins.filter((coin) =>
		coin.name.toLowerCase().includes(search.toLowerCase())
	);

	

	return (
		<>
			<div className="coin-app">
				<div className="coin-search">
					<h1 className="coin-text">Search a currency</h1>
					<chakra.form>
						<chakra.input
							className="coin-input"
							type="text"
							onChange={handleChange}
							placeholder="Search"
							borderRadius="3px"
							p="5px"
							bgColor="#11121B"
							ref={inputRef}
						/>
					</chakra.form>
				</div>
				{
					// Case 1: User already type some key words
					<Box id="results" ref={ulRef} color="white">
						{filteredCoins.map((coin) => {
							return (
								<Box
									key={coin.id}
									onClick={(e) => {
										inputRef.current.value = coin.name;
										setChosen(coin.symbol);
									}}
								>
									{coin.name}
								</Box>
							);
						})}
					</Box>
					// ) : (
					//     // Case 2: No keyword input (Only get 10 tickers -> prevent a long list of coin being rendered)
					// 	<Box id="results" ref={ulRef}>
					// 		{coins.slice(0, 10).map((coin) => {
					// 			return (
					// 				<Box
					// 					key={coin.id}
					// 					onClick={(e) => {
					// 						inputRef.current.value = coin.name;
					// 						setChosen(coin.symbol);
					// 					}}
					// 				>
					// 					{coin.name}
					// 				</Box>
					// 			);
					// 		})}
					// 	</Box>
					// )
				}
			</div>
		</>
	);
}

export default ChartPanel;
