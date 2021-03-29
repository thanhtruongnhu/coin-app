import Icon from '@chakra-ui/icon';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Divider } from '@chakra-ui/layout';
import { Box, Flex, Text } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import SidebarOption from './SidebarOption';
import AssessmentIcon from '@material-ui/icons/Assessment';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
} from '@chakra-ui/accordion';
import { useSelector } from 'react-redux';
import { selectHovertheme } from './features/hoverthemeSlice';
import { Add } from '@material-ui/icons';
import db from './firebase';

function Sidebar() {
	const [channels, setChannels] = useState([]);
	const hoverTheme = useSelector(selectHovertheme);
	useEffect(() => {
		db.collection('room').onSnapshot((snapshot) =>
			setChannels(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					name: doc.data().name,
				}))
			)
		);
	}, []);

	return (
		<Box d="flex" minW="150px" maxW="260px" flex="0.3">
			<Box flex="1">
				<Box
					d="flex"
					mt="1"
					pt="3"
					pl="3"
					fontWeight="900"
					fontSize="15px"
					lineHeight="tight"
					isTruncated
				>
					Main Board
				</Box>
				<Flex alignItems="center" pl="3" py="1" mb="5px">
					<Icon as={CheckCircleIcon} color="green.500" pr="1" />
					<Text fontWeight="400" fontSize="13px">
						Kyle Nhu
					</Text>
				</Flex>
				<Divider />
				<SidebarOption
					Img={WhatshotIcon}
					title="Top Crypto"
					id="TopCrypto"
				/>{' '}
				{/*Use capital "I" in Icon becuz, we passing a component as a prop*/}
				<SidebarOption Img={AssessmentIcon} title="Chart" id="Chart" />
				<SidebarOption Img={FolderOpenIcon} title="Port Folio" id="PortFolio" />
				<Box h="10px"></Box>
				<Accordion allowToggle>
					<AccordionItem>
						{/* <h2> */}
						<AccordionButton _hover={hoverTheme}>
							<Box
								flex="1"
								textAlign="left"
								alignItems="center"
								fontSize="14px"
								fontWeight="500"
							>
								Chat Channels
							</Box>
							<AccordionIcon />
						</AccordionButton>
						{/* </h2> */}
						<AccordionPanel pb={4}>
				
							<SidebarOption Img={Add} addChannelOption title="Channels" />

							{channels.map((channel) => (
								<SidebarOption
									key={channel.id}
									title={channel.name}
									id={channel.id}
								/>
							))}
						</AccordionPanel>
					</AccordionItem>
				</Accordion>
			</Box>
		</Box>
	);
}

export default Sidebar;
