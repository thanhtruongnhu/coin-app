import axios from 'axios';
import { timeParse } from 'd3-time-format';
import { useState } from 'react';

const ticker = 'DOGE';
const parseDate = timeParse('%Y-%m-%d');

function parseData(d) {
	// d.date = parseDate(new Date(d.time.toDate()).toLocaleString());
	// d.open = +d.open;
	d.high = +d.high;
	d.low = +d.low;
	d.close = +d.close;
	d.volume = +d.volume;

	return d;
}

export function GetData() {
	const [state, setState] = useState(null)

	axios
		.get(
			`https://api.lunarcrush.com/v2?data=assets&key=y9ys125xujn060r5hn77p0r&symbol=${ticker}&data_points=200&time_series_indicators=open,close,high,low,volume&indicators=null&interval=day`
		)
		.then((res) => setState(res.data.data[0].timeSeries));
	// .then((res) => console.log(res.data.data[0].timeSeries));

	
	console.log(state)

	return state;

	// return promiseMSFT;
}
