import { Box } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DonutChart from './DonutChart';
import CoinDisplay from './CoinDisplay';
import FeatureRow from './FeatureRow';
import { selectBalance, assign } from './features/balanceSlice';
import { update } from './features/tickerSlice';
import { selectUser } from './features/userSlice';
import db from './firebase';
import TitleBar from './TitleBar';
import { motion } from 'framer-motion';

function PortFolio() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const [coinsApi, setCoinsApi] = useState([]);
	const [coins, setCoins] = useState([]);
	const [coinlist, setCoinlist] = useState([]);
	const MotionBox = motion(Box);

	// 1. Pull data from Google Auth
	// <Not yet implement>

	// 2. Pull Firebase database & Find the user info using Auth data (email), then get the portfolio

	useEffect(() => {
		if (user.email) {
			db.collection('user')
				.doc(user.email)
				.onSnapshot((doc) => dispatch(assign(doc.data().balance)));
		}

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
						dateBought: Date.parse(doc.data().date_bought.toDate()),
						quantity: doc.data().quantity,
					}))
				)
			);
	}, [dispatch, user.email]);

	// 3. Based on ticker symbols, pull corresponding ticker data from Geckon API
	useEffect(() => {
		function get(coinapi) {
			let oldCoin = coins.filter((aCoin) => aCoin.id === coinapi.id)[0];

			let newCoin = {
				gainPercent24: coinapi.price_change_percentage_24h,
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
				setCoinsApi(res.data.map((coin) => get(coin)));
			})
			.catch((error) => console.log(error));

		if (coinsApi) {
			dispatch(update(coinsApi));
		}
	}, [coinlist, coins, coinsApi, dispatch]);

	// console.log(coins);
	console.log(coinsApi);

	return (
		<MotionBox
			flex="0.7"
			py="20px"
			mx="20px"
			textAlign="center"
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
			transition={{duration: 0.5}}
		>
			<FeatureRow />
			<TitleBar />
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
						id={coin.id}
					/>
				);
			})}

			<DonutChart />
		</MotionBox>
	);
}

export default PortFolio;
