import { Image } from '@chakra-ui/image';
import { Box, Heading, Stack, Text } from '@chakra-ui/layout';
import { Stat, StatArrow, StatHelpText, StatNumber } from '@chakra-ui/stat';
import { VolumeUpTwoTone } from '@material-ui/icons';
import React from 'react';

function currencyFormat(num) {
	return num.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

function CoinDisplay({
	name,
	image,
	symbol,
	dateBought,
	quantity,
	priceBought,
	price,
	position,
	gainPercent24,
	gain24,
	gainPercentage,
	gain,
}) {
	return (
		<Box
			d="flex"
			flexDirection="row"
			alignItems="center"
			h="80px"
			borderBottom="1px solid"
		>
			<Box d="flex" alignItems="center" minW="250px">
				<Image src={image} alt="crypto" h="30px" w="30px" mr="10px" />
				<Text fontSize="16px" w="100px" mr="30px">
					{name}
				</Text>
				<Text textTransform="uppercase" fontSize="lg" fontWeight="500">
					{symbol}
				</Text>
			</Box>

			<Box
				d="flex"
				alignItems="center"
				minW="400px"
				textAlign="right"
				justifyContent="space-between"
			>
				<Box w="73px"> {dateBought.toDate().toLocaleDateString()}</Box>
				<Box w="35px">{quantity}</Box>
				<Box w="75px">${currencyFormat(priceBought)}</Box>
				<Box w="75px">${currencyFormat(price)}</Box>
				<Box w="85px">${currencyFormat(position)}</Box>
			</Box>

			<Box d="flex" justifyContent="space-between" w="300px">
				<Stat>
					<StatNumber>${currencyFormat(gain24)}</StatNumber>
					{gain24 >= 0 ? (
						<StatHelpText>
							<StatArrow type="increase" />
							{currencyFormat(gainPercent24)}%
						</StatHelpText>
					) : (
						<StatHelpText>
							<StatArrow type="decrease" />
							{currencyFormat(gainPercent24)}%
						</StatHelpText>
					)}
				</Stat>

				<Stat>
					<StatNumber>${currencyFormat(gain)}</StatNumber>
					{gain >= 0 ? (
						<StatHelpText>
							<StatArrow type="increase" />
							{currencyFormat(gainPercentage)}%
						</StatHelpText>
					) : (
						<StatHelpText>
							<StatArrow type="decrease" />
							{currencyFormat(gainPercentage)}%
						</StatHelpText>
					)}
				</Stat>
			</Box>

			{/* <Box>${volume. }</Box> */}
		</Box>
	);
}

export default CoinDisplay;
