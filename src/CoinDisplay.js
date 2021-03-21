import { Image } from '@chakra-ui/image';
import { Box, Flex, Heading, Kbd, Text } from '@chakra-ui/layout';
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
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs';
import { Alert, AlertIcon } from '@chakra-ui/alert';
import { Progress } from '@chakra-ui/progress';
import {
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
} from '@chakra-ui/number-input';
import { useColorMode } from '@chakra-ui/color-mode';

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
	const [isActive, setIsActive] = useState(true);
	const { colorMode, toggleColorMode } = useColorMode();

	console.log(isActive);

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
				<Box d="flex" alignItems="center" minW="250px">
					<Image
						src={image}
						alt="crypto"
						h="30px"
						w="30px"
						mr="10px"
						ml="10px"
					/>
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
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay>
					<DrawerContent backgroundColor="#131722">
						<DrawerCloseButton />
						<DrawerHeader>{name}</DrawerHeader>

						<DrawerBody>
							<Flex justifyContent="space-between">
								<Button
									flex="0.5"
									size="lg"
									variant="outline"
									border="0px"
									borderRadius="10px"
									isActive={isActive}
									_active={{
										bg: '#1E88E5',
										transform: 'scale(0.98)',
										borderColor: '#bec3c9',
									}}
									backgroundColor="#2A2E39"
									_hover={{ bg: '#363A45' }}
									textColor="white"
									onClick={() => setIsActive((isActive) => !isActive)}
									mr="0"
								>
									Buy
								</Button>
								<Button
									flex="0.5"
									size="lg"
									variant="outline"
									border="0px"
									borderRadius="10px"
									isActive={!isActive}
									_active={{
										bg: '#EF5350',
										transform: 'scale(0.98)',
										borderColor: '#bec3c9',
									}}
									backgroundColor="#2A2E39"
									_hover={{ bg: '#363A45' }}
									textColor="white"
									onClick={() => setIsActive((isActive) => !isActive)}
								>
									Sell
								</Button>
							</Flex>

							<Tabs mt="15px" isFitted variant="enclosed">
								<TabList mb="1em">
									<Tab>Market</Tab>
									<Tab>Limit</Tab>
									<Tab>Stop</Tab>
								</TabList>
								<TabPanels>
									<TabPanel>
										<Text mb="5px">Quantity</Text>
										<NumberInput defaultValue={15} min={10} max={20}>
											<NumberInputField />
											<NumberInputStepper>
												<NumberIncrementStepper />
												<NumberDecrementStepper />
											</NumberInputStepper>
										</NumberInput>
										<Text mt="100px" fontWeight="bold" borderTopWidth="1px">
											Order Info
										</Text>
										<Flex justifyContent="space-between">
											<Text mt="5px">Trade Value</Text>
											<Text mt="5px" ml="0px">
												$10523
											</Text>
										</Flex>
									</TabPanel>

									<TabPanel>
										<Progress size="xs" isIndeterminate />
										<Alert status="warning" variant="left-accent">
											<AlertIcon />
											This feature is not feasible at the moment!
										</Alert>
									</TabPanel>
									<TabPanel>
										<Progress size="xs" isIndeterminate />
										<Alert status="warning" variant="left-accent">
											<AlertIcon />
											This feature is not feasible at the moment!
										</Alert>
									</TabPanel>
								</TabPanels>
							</Tabs>
						</DrawerBody>

						<DrawerFooter borderTopWidth="1px">
							<Button variant="outline" mr={3} onClick={onClose}>
								Cancel
							</Button>
							<Button
								backgroundColor={isActive ? '#1E88E5' : '#EF5350'}
								variant="solid"
							>
								Submit Order
							</Button>
						</DrawerFooter>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		</>
	);
}

export default CoinDisplay;
