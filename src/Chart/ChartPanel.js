import { chakra } from '@chakra-ui/system';
import { Box } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCoin } from '../features/allCoinSlice';
import Dropdown from './Dropdown';

function ChartPanel() {
	

	return (
		<Box minW="1000px">
			<Dropdown/>
		</Box>
	);
}

export default ChartPanel;
