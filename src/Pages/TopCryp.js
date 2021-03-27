import { Box, Flex, Spacer } from '@chakra-ui/layout';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Banner from '../TopCryp/Banner';
import News from '../TopCryp/News';
import TrendingRow from '../TopCryp/TrendingRow';
import Influencer from '../TopCryp/Influencer';

function TopCryp() {
	return (
		<Box flex="0.7" flexGrow="1">
			<Banner />
			<TrendingRow />
			<Flex mt="40px" justifyContent="space-between">
				<News />
                
                <Influencer />
			</Flex>
            <Box h="300px" />
		</Box>
	);
}

export default TopCryp;
