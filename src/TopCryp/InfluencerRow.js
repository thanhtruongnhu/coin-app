import { Image } from '@chakra-ui/image';
import { Box, Flex, LinkBox, LinkOverlay, Text } from '@chakra-ui/layout';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectHovertheme } from '../features/hoverthemeSlice';

function InfluencerRow({ avatar, name, tweetName, followers }) {
	const hoverTheme = useSelector(selectHovertheme);

	function truncate(string, n) {
		return string?.length > n ? string.substr(0, n - 1) + '...' : string;
	}

	return (
		<LinkBox _hover={hoverTheme} minW="400px">
			<LinkOverlay href={`https://twitter.com/${tweetName}`} isExternal="true">
				<Flex mx="20px" py="10px" justifyItems="center"
                >
					<Image
						src={avatar}
						alt="crypto"
						h="60px"
						w="60px"
						mr="10px"
						ml="10px"
                        mt="8px"
                        borderRadius="full"
					/>
					<Box>
						<Text fontSize="lg" fontWeight="500">
							{truncate(`${name}`, 30)}
						</Text>
						<Text>{truncate(`${tweetName}`, 30)}</Text>
						<Text>Followers: {followers}</Text>
					</Box>
				</Flex>
			</LinkOverlay>
		</LinkBox>
	);
}

export default InfluencerRow;
