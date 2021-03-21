import { Text } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import React from 'react';
import Icon from '@chakra-ui/icon';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectHovertheme } from './features/hoverthemeSlice';

function SidebarOption({ Img, title, id }) {
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

	// const
	return (
		<Box
			d="flex"
			alignItems="center"
			pl="3"
			fontSize="14px"
			fontWeight="500"
			h="8"
			onClick={selectChannel}
			_hover={hoverTheme}
		>
			{/*ICON*/}
			{Img && <Icon as={Img} pr="1" />}
			{/*Only render an icon when Icon is passed in (available)*/}
			{/*TEXT*/}
			{Img ? (
				<Text>{title}</Text>
			) : (
				<Text as="h3">
					<span>#</span>
					{title}
				</Text>
			)}
			{/*If you don't pass an icon, it will start a channel (start with #) */}
		</Box>
	);
}

export default SidebarOption;
