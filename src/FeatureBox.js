import React from 'react';
import { Box } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Stat } from '@chakra-ui/stat';
import { StatNumber } from '@chakra-ui/stat';
import { useSelector } from 'react-redux';
import { selectHovertheme } from './features/hoverthemeSlice';

function currencyFormat(num) {
	return num?.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

function FeatureBox({ Icon, name, value, percent }) {
	const hoverTheme = useSelector(selectHovertheme);

	return (
		<>
			{/* {Icon && <Icon />} */}
			<Box
				maxW="sm"
				minW="145px"
				borderWidth="1px"
				borderRadius="lg"
				overflow="hidden"
				_hover={hoverTheme}
			>
				<Flex justifyContent="center">
					<Text fontSize="lg" fontWeight="500" mr="5px">
						{name}
					</Text>
					{Icon && <Icon />}{' '}
					{/*<Icon/> is Material UI component (not Chakra UI comp) */}
				</Flex>

				{!percent ? (
					<Stat>
						<StatNumber>${currencyFormat(value)}</StatNumber>
					</Stat>
				) : (
					<Stat>
						<StatNumber>{currencyFormat(value)}%</StatNumber>
					</Stat>
				)}
			</Box>
		</>
	);
}

export default FeatureBox;
