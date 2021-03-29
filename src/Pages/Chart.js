import { Box, Flex, Spacer } from '@chakra-ui/layout';
import React from 'react';
import BuySellPanel from '../Chart/BuySellPanel';
import ChartPanel from '../Chart/ChartPanel';

function Chart() {
	return (
		<Box d="flex" flex="0.7" 
        justifyContent="space-between" 
        // ml="auto" 
        // mr="auto"
        flexGrow="1"
        >
			{/* There will be an interactive Chart here */}
			<ChartPanel />
			<Spacer />
			{/* Buy Sell Panel */}
			<BuySellPanel name='Ethereum' price={1800} quantity={20} id='ethereum'/>
		</Box>
	);
}

export default Chart;
