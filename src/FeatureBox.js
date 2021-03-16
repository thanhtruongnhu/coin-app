import Icon from '@chakra-ui/icon';
import { Box, Flex, HStack, Text } from '@chakra-ui/layout';
import { Stat, StatNumber } from '@chakra-ui/stat';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBalance } from './features/balanceSlice';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import { selectTicker } from './features/tickerSlice';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import CallMadeIcon from '@material-ui/icons/CallMade';
import { Skeleton } from '@chakra-ui/skeleton';

function currencyFormat(num) {
	return num?.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

function FeatureBox() {
	// const [count, setCount] = useState(0);
	// const [stock, setStock] = useState(null);
	const balance = useSelector(selectBalance);
	const ticker = useSelector(selectTicker);
	const [initialposition, setInitialposition] = useState(null);
	const [position, setPosition] = useState(null);
	const [gain, setGain] = useState(null);
	const [gainpercent, setGainpercent] = useState(null);

	useEffect(() => {
		ticker.map((a) =>
			setInitialposition(
				(initialposition) => (initialposition += a.quantity * a.priceBought)
			)
		);

		ticker.map((a) =>
			setPosition((position) => (position += a.quantity * a.currentPrice))
		);

		return () => {
			setInitialposition(null);
			setPosition(null);
		};
	}, [ticker]); 


	return (
		<Skeleton isLoaded={initialposition !== null ? true : false}>
			<HStack justifyContent="space-between">
				{/* Box 0: Available Cash */}
				<Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
					<Flex>
						<Text fontSize="lg" fontWeight="500">
							Cash
						</Text>

						<Icon as={AccountBalanceWalletIcon} pr="1" />
					</Flex>

					<Stat>
						<StatNumber>
							$
							{currencyFormat(
								typeof balance === 'string' ? Number(balance) : balance
							)}
						</StatNumber>
					</Stat>
				</Box>

				{/* Box 1: Invested money */}
				<Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
					<Flex>
						<Text fontSize="lg" fontWeight="500">
							Invested
						</Text>

						<Icon as={CardTravelIcon} pr="1" />
					</Flex>

					<Stat>
						<StatNumber>${currencyFormat(initialposition)}</StatNumber>
					</Stat>
				</Box>

				{/* Box 2: Stock Value */}
				<Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
					<Flex>
						<Text fontSize="lg" fontWeight="500">
							Stock Value
						</Text>

						<Icon as={AccountBalanceWalletIcon} pr="1" />
					</Flex>

					<Stat>
						<StatNumber>${currencyFormat(position)}</StatNumber>
					</Stat>
				</Box>

				{/* Box 3: Gain */}
				<Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
					<Flex>
						<Text fontSize="lg" fontWeight="500">
							Gain
						</Text>

						<Icon as={AttachMoneyIcon} pr="1" />
					</Flex>

					<Stat>
						<StatNumber>${currencyFormat(position - initialposition)}</StatNumber>
					</Stat>
				</Box>

				{/* Box 4: % Gain */}
				<Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
					<Flex>
						<Text fontSize="lg" fontWeight="500">
							Gain
						</Text>

						<Icon as={CallMadeIcon} pr="1" />
					</Flex>

					<Stat>
						<StatNumber>{currencyFormat((position - initialposition)/initialposition*100)}%</StatNumber>
					</Stat>
				</Box>
			</HStack>
		</Skeleton>
	);
}

export default FeatureBox;
