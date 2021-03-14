import { Box } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CoinDisplay from './CoinDisplay';
import { selectUser } from './features/userSlice';
import db from './firebase';

function PortFolio() {
	const user = useSelector(selectUser);
	const [coinsApi, setCoinsApi] = useState([]);
	const [coins, setCoins] = useState([]);
	const [coinlist, setCoinlist] = useState(null);

	// 1. Pull data from Google Auth
	// <Not yet implement>
	// 2. Pull Firebase database & Find the user info using Auth data (email), then get the portfolio

	useEffect(() => {
		db.collection('user')
			.doc(user.email)
			.collection('tickers')
			.onSnapshot((snapshot) =>
				setCoins(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						name: doc.data().name,
						symbol: doc.data().symbol,
						priceBought: doc.data().price_bought,
						dateBought: doc.data().date_bought,
						quantity: doc.data().quantity,
					}))
				)
			);
	}, [user.email]);

	// 3. Based on ticker symbols, pull corresponding ticker data from Geckon API
	useEffect(() => {
		function getted(coinapi) {
			let oldCoin = coins.filter((aCoin) => aCoin.id === coinapi.id)[0];

			let newCoin = {
				gainPercent24: coinapi.price_change_percentage_24h * 100,
				gain24: coinapi.price_change_24h * oldCoin.quantity,
				currentPrice: coinapi.current_price,
				image: coinapi.image,
				position: coinapi.current_price * oldCoin.quantity,
				gainPercentage:
					((coinapi.current_price - oldCoin.priceBought) /
						oldCoin.priceBought) *
					100,
				gain: (coinapi.current_price - oldCoin.priceBought) * oldCoin.quantity,
			};

			let coin = Object.assign(oldCoin, newCoin);

			return coin;
		}

		if (coins) {
			setCoinlist(coins.map((coin) => coin.id).join('%2C'));
		}

		axios
			.get(
				`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinlist}&order=market_cap_desc&per_page=10&page=1&sparkline=false`
			)
			.then((res) => {
				setCoinsApi(res.data.map((coin) => getted(coin)));
			})
			.catch((error) => console.log(error));
	}, [coinlist, coins]);

	console.log(coins);
	console.log(coinsApi);

	// var req_tick = 'bitcoin,ethereum,binancecoin,tether,polkadot';

	// price_change_24h
	// current_price
	// image

	return (
		<Box flex="0.7" overflow="hidden">
			{coinsApi.map((coin) => {
				return (
					<CoinDisplay
						key={coin.id}
						name={coin.name}
						image={coin.image}
						symbol={coin.symbol}
						dateBought={coin.dateBought}
						quantity={coin.quantity}
						priceBought={coin.priceBought}
						price={coin.currentPrice}
						position={coin.position}
						gainPercent24={coin.gainPercent24}
						gain24={coin.gain24}
						gainPercentage={coin.gainPercentage}
						gain={coin.gain}
					/>
				);
			})}
		</Box>
	);
}

export default PortFolio;
