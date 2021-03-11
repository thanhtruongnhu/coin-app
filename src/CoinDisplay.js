import { Image } from '@chakra-ui/image';
import { Box, Heading, Stack, Text } from '@chakra-ui/layout';
import { VolumeUpTwoTone } from '@material-ui/icons';
import React from 'react';

function CoinDisplay({ coinname, image, symbol, volume, price }) {
	return (
		<Box
			d="flex"
			flexDirection="row"
			justifyContent="start"
			alignItems="center"
			h="80px"
			borderBottom="1px solid"
		>
			<Image src={image} alt="crypto" h="30px" w="30px" mr="10px" />
			<Heading as="h1" fontSize="16px" width="150px">
				{coinname}
			</Heading>
			<Text textTransform="uppercase"> {symbol}</Text>
			<Box>${price.toLocaleString()}</Box>
			<Box>${volume.toLocaleString()}</Box>
		</Box>
	);
}

export default CoinDisplay;
