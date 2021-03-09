import Icon from '@chakra-ui/icon';
import { CheckCircleIcon, StarIcon } from '@chakra-ui/icons';

import { Divider } from '@chakra-ui/layout';
import { Box, Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import SidebarOption from './SidebarOption';

function Sidebar() {
	return (
		<Box maxW="260px" overflow="hidden">
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
			<Flex alignItems="center" pl="3" pt="1">
				<Icon as={CheckCircleIcon} color="green.500" pr="1" />
				<Text fontWeight="400" fontSize="13px">
					Kyle Nhu
				</Text>
			</Flex>
			<Divider />
			<SidebarOption Img={StarIcon} title="Top news" />{' '}
			{/*Use capital "I" in Icon becuz, we passing a component as a prop*/}
			{/* <SidebarOption Img={Inbox} title="Chart" />
			<SidebarOption Img={Drafts} title="Port Folio" /> */}
		</Box>
	);
}

export default Sidebar;
