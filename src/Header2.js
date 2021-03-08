import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import {
	Box,
	Flex,
	Heading,
	Link,
	LinkBox,
	LinkOverlay,
	Spacer,
	Text,
} from '@chakra-ui/layout';
import { Switch } from '@chakra-ui/switch';
import { Tag, TagLabel } from '@chakra-ui/tag';
import React from 'react';

function Header2() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Flex>
			<Box p="2" ml="4" mt="2">
				<Heading size="md">
					<LinkOverlay href="/">The Dragon Estacy</LinkOverlay>
				</Heading>
			</Box>
			<Spacer />

			<FormControl display="flex" alignItems="center" m="3">
				<FormLabel htmlFor="dark-toggle" mb="0">
					Dark mode
				</FormLabel>
				<Switch id="dark-toggle" onChange={toggleColorMode}>
					{colorMode === 'light' ? 'Dark' : 'Light'}
				</Switch>
			</FormControl>
            
			<Spacer />
			{/* <Button onClick={toggleColorMode} m="3">
				{colorMode === 'light' ? 'Dark' : 'Light'}
			</Button> */}

			<Tag size="lg" borderRadius="full" m="3">
				<Avatar
					src="https://cdn.onlinewebfonts.com/svg/img_132120.png"
					size="xs"
					name="Kyle Nhu"
					ml={-1}
					mr={2}
				/>
				<Link href="/">Kyle Nhu</Link>
				{/* <TagLabel>Kyle</TagLabel> */}
			</Tag>

			{/* <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
				<Avatar
					src="https://cdn.onlinewebfonts.com/svg/img_132120.png"
					size="xs"
					name="Kyle Nhu"
					ml={-1}
					mr={2}
				/>
				<Heading size="md" my="2">
					<LinkOverlay href="#">Kyle</LinkOverlay>
				</Heading>
				<Text>
					Catch up on what’s been cookin’ at Smashing and explore some of the
					most popular community resources.
				</Text>
			</LinkBox> */}

			{/* <Tag size="lg" borderRadius="full" m="3">
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
			</Tag> */}
		</Flex>
	);
}

export default Header2;
