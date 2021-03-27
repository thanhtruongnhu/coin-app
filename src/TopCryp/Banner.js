import { Image } from '@chakra-ui/image';
import { LinkBox } from '@chakra-ui/layout';
import { LinkOverlay } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from '../Request';

function Banner() {
	const [topCoin, setTopCoin] = useState([]);

	useEffect(() => {
		axios
			.get(requests.fetchTopCoins)
			.then((res) => {
				setTopCoin(res.data.coins[0].item);
			})
			.catch((error) => console.log(error));
	}, []);

	// console.log(topCoin)
	return (
		<>
			<Box
				position="relative"
				h="400px"
				// color="white"
				objectFit="contain"
				bgSize="cover"
				bgImage="url('https://i.ibb.co/WVX2hGC/coinoftheday.jpg')"
				bgPosition="center center"
			>
				<LinkBox ml="130px" pt="120px" h="10px">
					<Box fontSize="1.75rem" fontWeight="600" pb="0.3rem" ml="10px">
						COIN OF THE DAY
					</Box>
					<Flex alignItems="center">
						<Image
							src={topCoin?.large}
							alt="crypto"
							h="60px"
							w="60px"
							mr="10px"
						/>
						<Box
							fontSize="3rem"
							fontWeight="800"
							pb="0.3rem"
							_hover={{ fontWeight: 'bold' }}
						>
							<LinkOverlay
								href={`https://www.google.com/search?q=${topCoin?.name}%20Crytocurrency`}
								isExternal="true"
							>
								{topCoin?.name}
							</LinkOverlay>
						</Box>
					</Flex>
				</LinkBox>

				<Box
					w="100%"
					h="200px"
					mt="100px"
					bgGradient="linear(to-b, transparent, #010103, #1A202C)"
				/>
			</Box>

			{/* <header
				className="banner"
				style={{
					backgroundSize:
						'cover' 
					backgroundImage: `url('../src/images/img-1.jpg')`,
					backgroundPosition: 'center center',
				}}
			>
				<div className="banner__contents">
					<h1 className="banner__title">
						{movie?.title || movie?.name || movie?.original_name}
					</h1>
					<div className="banner_buttons">
						<button className="banner__button">Play</button>
						<button className="banner__button">My List</button>
					</div>
					<h1 className="banner__description">
						{truncate(`${movie?.overview}`, 150)}
					</h1>
				</div>

				<div className="banner--fadeBottom" />
			</header> */}
		</>
	);
}

export default Banner;
