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
import DonutSmallIcon from '@material-ui/icons/DonutSmall';
import { useId } from 'react-id-generator';
import FeatureBox from './FeatureBox';
import { SkeletonCircle } from '@chakra-ui/skeleton';
import { SkeletonText } from '@chakra-ui/skeleton';

function FeatureRow() {
	const idList = useId(5, 'FeatureBox');
	const balance = useSelector(selectBalance);
	const ticker = useSelector(selectTicker);
	const [initialposition, setInitialposition] = useState(null);
	const [position, setPosition] = useState(null);
	const [currentBalance, setCurrentBalance] = useState(balance);
	const [gain, setGain] = useState(null);
	const [gainPercent, setGainPercent] = useState(null);

	useEffect(() => {
		ticker.map((a) =>
			setInitialposition(
				(initialposition) => (initialposition += a.quantity * a.priceBought)
			)
		);

		ticker.map((a) =>
			setPosition((position) => (position += a.quantity * a.currentPrice))
		);

		setCurrentBalance(typeof balance === 'string' ? Number(balance) : balance);

		return () => {
			setInitialposition(null);
			setPosition(null);
		};
	}, [ticker, balance]);

	useEffect(() => {
		setGain(position - initialposition);

		setGainPercent(((position - initialposition) / initialposition) * 100);
		return () => {
			setGain(null);
			setGainPercent(null);
		};
	}, [position, initialposition]);

	return (
		<>
			{initialposition === null ? (
				<Box padding="6" boxShadow="lg">
					<SkeletonCircle size="10" />
					<SkeletonText mt="4" noOfLines={4} spacing="4" />
				</Box>
			) : (
				<HStack justifyContent="space-between">
					<FeatureBox
						Icon={AccountBalanceWalletIcon}
						name="Balance"
						value={currentBalance}
						key={idList[0]}
					/>
					<FeatureBox
						Icon={CardTravelIcon}
						name="Invested"
						value={initialposition}
						key={idList[1]}
					/>
					<FeatureBox
						Icon={DonutSmallIcon}
						name="Coin Value"
						value={position}
						key={idList[2]}
					/>
					<FeatureBox
						Icon={AttachMoneyIcon}
						name="Gain"
						value={gain}
						key={idList[3]}
					/>
					<FeatureBox
						Icon={CallMadeIcon}
						name="Gain"
						value={gainPercent}
						key={idList[4]}
						percent={true}
					/>
				</HStack>
			)}
			{/* <HStack justifyContent="space-between">
				{list.map((feature) => {
					return (
						<FeatureBox
							key={feature.id}
							name={feature.name}
							value={feature.value}
							icon={feature.icon}
						/>
					);
				})}
			</HStack> */}
		</>
	);
}

export default FeatureRow;
