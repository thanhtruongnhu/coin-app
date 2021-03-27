import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/layout';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectHovertheme } from '../features/hoverthemeSlice';

function NewsRow({ title, description, url, socialScore }) {
	const hoverTheme = useSelector(selectHovertheme);

	function truncate(string, n) {
		return string?.length > n ? string.substr(0, n - 1) + '...' : string;
	}

	return (
		<LinkBox _hover={hoverTheme} minW="755px">
			<LinkOverlay
				href={url}
				isExternal="true"
			>
				<Box mx="20px" py="10px">
					<Text fontSize="lg" fontWeight="500">
						{truncate(`${title}`, 70)}
					</Text>
					<Text>{truncate(`${description}`, 90)}</Text>
					<Text>Social score: {socialScore}</Text>
				</Box>
			</LinkOverlay>
		</LinkBox>
	);
}

export default NewsRow;
