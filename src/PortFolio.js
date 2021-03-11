import { Box } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CoinDisplay from './CoinDisplay';

function PortFolio() {
	const [coins, setCoins] = useState([]);

	useEffect(() => {
		axios
			.get(
				'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Cbinancecoin%2Ccardano%2Cpolkadot&order=market_cap_desc&per_page=10&page=1&sparkline=false'
			)
			.then((res) => {
				setCoins(res.data);
			})
			.catch((error) => console.log(error));
	}, []);

	// var req_tick = 'bitcoin,ethereum,binancecoin,cardano,polkadot';

	return (
		<Box flex="0.7">
			{coins.map((coin) => {
				return (
					<CoinDisplay
						key={coin.id}
						name={coin.name}
						image={coin.image}
						symbol={coin.symbol}
						volume={coin.market_cap}
						price={coin.current_price}
					/>
				);
			})}
		</Box>
	);
}

export default PortFolio;
