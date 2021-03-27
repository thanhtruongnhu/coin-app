import { useColorMode } from '@chakra-ui/color-mode';
import { Box } from '@chakra-ui/layout';
import { SkeletonText } from '@chakra-ui/skeleton';
import { SkeletonCircle } from '@chakra-ui/skeleton';
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { selectTicker } from '../features/tickerSlice';

function DonutChart() {
	const { colorMode, toggleColorMode } = useColorMode();

	const ticker = useSelector(selectTicker);
	const [list, setList] = useState([]);
	const [dataset, setDataset] = useState([]);
	const [bgcolor, setBgcolor] = useState([]);
	const [lgcolor, setLgcolor] = useState(null);

	// console.log(coinlist);
	// var list = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

	useEffect(() => {
		setList(ticker.map((coin) => coin.name));
		setDataset(ticker.map((coin) => coin.position));
		// colorMode === 'dark'
		// 	? setBgcolor(['#e17055', '#0984e3', '#fdcb6e', '#00b894', '#6c5ce7'])
		// 	: //
		// 	  setBgcolor([
		// 			'rgba(255, 99, 132, 0.2)',
		// 			'rgba(54, 162, 235, 0.2)',
		// 			'rgba(255, 206, 86, 0.2)',
		// 			'rgba(75, 192, 192, 0.2)',
		// 			'rgba(153, 102, 255, 0.2)',
		// 			'rgba(255, 159, 64, 0.2)',
		// 	  ]);

		if (colorMode === 'dark') {
			setBgcolor(['#e17055', '#0984e3', '#fdcb6e', '#00b894', '#6c5ce7']);
			setLgcolor('#FFFFFF');
		} else {
			setBgcolor([
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)',
			]);
			setLgcolor('#000000');
		}

		return () => {
			setList([]);
			setDataset([]);
		};
	}, [ticker, colorMode]);

	return (
		<Box
			w="960px"
			mt="50px"
			// ml="50%"
			// mr="-50%"
			// transform="translate(-50%, -50%)"
			ml="auto"
			mr="auto"
		>
			{list === [] ? (
				<Box>Loading...</Box>
			) : (
				<Pie
					data={{
						labels: list,
						datasets: [
							{
								data: dataset,
								backgroundColor: bgcolor,

								borderColor: [
									'rgba(255, 99, 132, 1)',
									'rgba(54, 162, 235, 1)',
									'rgba(255, 206, 86, 1)',
									'rgba(75, 192, 192, 1)',
									'rgba(153, 102, 255, 1)',
									'rgba(255, 159, 64, 1)',
								],
								borderWidth: 1,
							},
						],
					}}
					height={400}
					width={400}
					options={{
						scales: {
							xAxes: [
								{
									display: false,
								},
							],
							yAxes: [
								{
									display: false,
								},
							],
						},
						maintainAspectRatio: false,
						legend: {
							labels: {
								fontSize: 20,
								fontColor: lgcolor,
							},
						},
					}}
				/>
			)}
		</Box>
	);
}

export default DonutChart;
