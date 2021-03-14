import { Image } from '@chakra-ui/image';
import { Box, Heading, Stack, Text } from '@chakra-ui/layout';
import { Stat, StatArrow, StatHelpText, StatNumber } from '@chakra-ui/stat';
import { VolumeUpTwoTone } from '@material-ui/icons';
import React from 'react';

function currencyFormat(num) {
	return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
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
			justifyContent="start"
			alignItems="center"
			h="80px"
			borderBottom="1px solid"
		>
			<Image src={image} alt="crypto" h="30px" w="30px" mr="10px" />
			<Heading as="h1" fontSize="16px" width="150px">
				{name}
			</Heading>
			<Text textTransform="uppercase"> {symbol}</Text>
			<Box> {dateBought.toDate().toLocaleDateString()}</Box>
			<Box>{quantity}</Box>
			<Box>${currencyFormat(priceBought)}</Box>
			<Box>${currencyFormat(price)}</Box>
			<Box>${currencyFormat(position)}</Box>

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
				<StatNumber>${currencyFormat(gain) }</StatNumber>
				{gain >= 0 ? (
					<StatHelpText>
						<StatArrow type="increase" />
						{currencyFormat(gainPercentage)}%
					</StatHelpText>
				) : (
					<StatHelpText>
						<StatArrow type="decrease" />
						{currencyFormat(gainPercentage) }%
					</StatHelpText>
				)}
			</Stat>

			{/* <Box>${volume. }</Box> */}
		</Box>
	);
}

export default CoinDisplay;
