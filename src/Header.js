import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Box, Flex, Heading, LinkOverlay, Spacer } from '@chakra-ui/layout';
import { Tag, TagLabel } from '@chakra-ui/tag';
import React from 'react';

function Header() {
    const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Flex>
			<Box p="2" ml="4" mt="2">
				<Heading size="md">
					<LinkOverlay href="#">The Dragon Estacy</LinkOverlay>
				</Heading>
			</Box>
			<Spacer />
			<Box mr="4" mt="3">
				<Button colorScheme="teal" mr="4">
					Sign Up
				</Button>
				<Button colorScheme="teal">Log in</Button>
			</Box>
			<Spacer />
			<Button onClick={toggleColorMode}>
				{colorMode === 'light' ? 'Dark' : 'Light'}
			</Button>
            
			<Tag size="lg" colorScheme="red" borderRadius="full" m="3">
				<LinkOverlay href="#">
					<Avatar
						src="https://cdn.onlinewebfonts.com/svg/img_132120.png"
						size="xs"
						name="Kyle Nhu"
						ml={-1}
						mr={2}
					/>
					<TagLabel>Kyle</TagLabel>
				</LinkOverlay>
			</Tag>
		</Flex>
	);
}

export default Header;
