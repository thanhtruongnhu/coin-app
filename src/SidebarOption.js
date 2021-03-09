import { Heading } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import React from 'react';
import Icon from '@chakra-ui/icon';

function SidebarOption({ Img, title }) {
	return (
		<Box
			d="flex"
			alignItems="center"
			pl="12px"
			_hover= {{ '& > h3': { fontWeight: 'bold' } }}
		>
			{/*ICON*/}
			{Img && <Icon as={Img} pr="1" />}
			{/*Only render an icon when Icon is passed in (available)*/}
			{/*TEXT*/}
			{Img ? (
				<h3>{title}</h3>
			) : (
				<Heading as="h3" size="lg">
					<span >#</span>
					{title}
				</Heading>
			)}
			{/*If you don't pass an icon, it will start a channel (start with #) */}
		</Box>
	);
}

export default SidebarOption;
