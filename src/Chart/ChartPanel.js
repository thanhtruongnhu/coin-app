import { chakra } from '@chakra-ui/system';
import { Box } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCoin } from '../features/allCoinSlice';
import { GetData } from './utils';
import Dropdown from './Dropdown';
import { timeParse } from 'd3-time-format';
import axios from 'axios';
import Chart from './Chart';
import { selectSelectCoin } from '../features/selectCoinSlice';

function ChartPanel() {
	// const ticker = 'BTC';
	const selectCoin = useSelector(selectSelectCoin);
	const [state, setState] = useState(null);
	const [pick, setPick] = useState(null);

	useEffect(() => {
		if (selectCoin) {
			axios
				.get(
					`https://api.lunarcrush.com/v2?data=assets&key=y9ys125xujn060r5hn77p0r&symbol=${selectCoin?.symbol}&data_points=200&time_series_indicators=open,close,high,low,volume&indicators=null&interval=day`
				)
				.then((res) => setState(res.data.data[0].timeSeries));
		}
	}, [selectCoin]);

	useEffect(() => {
		if (state) {
			function get(doc) {
				let oldDoc = doc;
				let newDoc = { date: new Date(doc.time * 1000) };
				let editDoc = Object.assign(oldDoc, newDoc);
				return editDoc;
			}

			setPick(state.map((doc) => get(doc)));
		}
	}, [state]);


	// console.log(selectCoin);
	// console.log(pick);

	return (
		<Box flex="0.85">
			{/* <Dropdown /> */}

			{pick && <Chart type={'hybrid'} data={pick} />}
		</Box>
	);
}

export default ChartPanel;
