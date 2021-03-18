import Icon from '@chakra-ui/icon';
import { CheckCircleIcon, StarIcon } from '@chakra-ui/icons';

import { Divider } from '@chakra-ui/layout';
import { Box, Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import SidebarOption from './SidebarOption';
import AssessmentIcon from '@material-ui/icons/Assessment';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';

function Sidebar() {
	return (
		<Box minW="150px" maxW="260px" flex="0.3">
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
			<Flex alignItems="center" pl="3" py="1">
				<Icon as={CheckCircleIcon} color="green.500" pr="1" />
				<Text fontWeight="400" fontSize="13px">
					Kyle Nhu
				</Text>
			</Flex>
			<Divider />
			<SidebarOption Img={WhatshotIcon} title="Top Crypto" />{' '}
			{/*Use capital "I" in Icon becuz, we passing a component as a prop*/}
			<SidebarOption Img={AssessmentIcon} title="Chart" />
			<SidebarOption Img={FolderOpenIcon} title="Port Folio" />
		</Box>
	);
}

export default Sidebar;
