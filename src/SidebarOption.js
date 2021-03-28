import { Flex, Text } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import React from 'react';
import Icon from '@chakra-ui/icon';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectHovertheme } from './features/hoverthemeSlice';
import db from './firebase';
import ContactlessIcon from '@material-ui/icons/Contactless';

function SidebarOption({ Img, addChannelOption, title, id }) {
	const hoverTheme = useSelector(selectHovertheme);
	const history = useHistory();
	const selectChannel = () => {
		if (id) {
			history.push(id);
		}
		// } else {
		// 	history.push(title);
		// }
	};

	const addChannel = () => {
		const channelName = prompt('Please enter the channel name');

		if (channelName) {
			db.collection('room').add({
				name: channelName,
			});
		}
	};

	// const
	return (
		<Box
			flex="!"
			d="flex"
			alignItems="center"
			pl="3"
			fontSize="14px"
			fontWeight="500"
			h="8"
			onClick={addChannelOption ? addChannel : selectChannel}
			_hover={hoverTheme}
		>
			{/*ICON*/}
			{Img && <Icon as={Img} pr="1" />}
			{/*Only render an icon when Icon is passed in (available)*/}
			{/*TEXT*/}
			{Img ? (
				<Text>{title}</Text>
			) : (
				<Flex>
					<Icon as={ContactlessIcon} pr="1" />
					<Text as="h3">{title}</Text>
				</Flex>
			)}
			{/*If you don't pass an icon, it will start a channel (start with #) */}
		</Box>
	);
}

export default SidebarOption;
