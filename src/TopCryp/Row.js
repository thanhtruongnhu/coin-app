import { Image } from '@chakra-ui/image';
import { Flex } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/layout';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from '../Request';
import './Row.css';

function Row() {
	const [trendCoin, setTrendCoin] = useState([]);

	useEffect(() => {
		axios
			.get(requests.fetchTrendCoins)
			.then((res) => {
				setTrendCoin(res.data);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<Box mt="20px" ml="20px">
			<Heading>Top Trending</Heading>
			<div className="row__posters">
				{/* <Flex overflowY="hidden" overflowX="scroll" p="20px"> */}
					{trendCoin.map((coin) => (
						<Image
							src={coin?.image}
							key={coin.id}
							alt="crypto"
							maxH="150px"
							_hover={{
								transform: 'scale(1.09)',
								opacity: '1',
							}}
							objectFit="contain"
							mr="10px"
							w="100%"
							transition="transform 450ms"
							borderRadius="full"
						/>
					))}
				{/* </Flex> */}
			</div>
		</Box>
	);
}

export default Row;
