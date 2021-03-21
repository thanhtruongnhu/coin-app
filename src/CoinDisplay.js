import { Image } from '@chakra-ui/image';
import { Box, Text } from '@chakra-ui/layout';
import { Stat, StatArrow, StatHelpText, StatNumber } from '@chakra-ui/stat';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectHovertheme } from './features/hoverthemeSlice';
import {
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
} from '@chakra-ui/modal';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';

function currencyFormat(num) {
	return num.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

function Converter(x) {
	var date = new Date(x); //Convert miliseconds to date
	return date.toLocaleDateString();
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
	const hoverTheme = useSelector(selectHovertheme);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();


	return (
		<>
			<Box
				d="flex"
				flexDirection="row"
				alignItems="center"
				justifyContent="center"
				h="80px"
				borderBottom="1px solid"
				w="960px"
				// ml="50%"
				// mr="-50%"
				// transform="translate(-50%, -50%)"
				ml="auto"
				mr="auto"
				_hover={hoverTheme}
				ref={btnRef}
				onClick={onOpen}
			>
				<Box d="flex" alignItems="center" minW="250px" >
					<Image src={image} alt="crypto" h="30px" w="30px" mr="10px" ml="10px" />
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
					minW="410px"
					textAlign="right"
					justifyContent="space-between"
				>
					<Box w="79px"> {Converter(dateBought)}</Box>
					<Box w="65px">{quantity}</Box>
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
			</Box>
			{/* <Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay>
					<DrawerContent>
						<DrawerCloseButton />
						<DrawerHeader>Create your account</DrawerHeader>

						<DrawerBody>
							<Input placeholder="Type here..." />
						</DrawerBody>

						<DrawerFooter borderTopWidth="1px">
							<Button variant="outline" mr={3} onClick={onClose}>
								Cancel
							</Button>
							<Button color="blue">Save</Button>
						</DrawerFooter>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer> */}
		</>
		
	);
}

export default CoinDisplay;
