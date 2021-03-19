import { Box, Text } from '@chakra-ui/layout';
import React from 'react';

function TitleBar() {
	return (
		<Box
			d="flex"
			flexDirection="row"
			alignItems="center"
			h="80px"
			borderBottom="1px solid"
			justifyContent="center"
			mt="40px"
			w="960px"
			// ml="50%"
			// mr="-50%"
			// transform="translate(-50%, -50%)"

			ml="auto"
			mr="auto"
		>
			<Box
				d="flex"
				alignItems="center"
				minW="250px"
				justifyContent="space-between"
				
			>
				<Box fontSize="lg" fontWeight="500">
					Cryptocurrency
				</Box>
				<Box fontSize="lg" fontWeight="500" pr="40px">
					Ticker
				</Box>
			</Box>

			<Box
				d="flex"
				alignItems="center"
				minW="400px"
				justifyContent="space-between"
			>
				<Box w="73px"> Date bought</Box>
				<Box w="65px">Quantity</Box>
				<Box w="75px">Price bought</Box>
				<Box w="75px">Price</Box>
				<Box w="85px">Position</Box>
			</Box>

			<Box
				d="flex"
				justifyContent="space-between"
				minW="300px"
				alignItems="center"
			>
				<Text fontSize="lg" fontWeight="500" ml="35px">
					Day Gain
				</Text>

				<Text fontSize="lg" fontWeight="500" mr="40px">
					Total Gain
				</Text>
			</Box>
		</Box>
	);
}

export default TitleBar;
