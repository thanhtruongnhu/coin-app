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
		<Flex borderBottom="1px solid ">
			<Box ml="3" mt="3">
				<Heading size="md">
					<LinkOverlay href="#">The Dragon Estacy</LinkOverlay>
				</Heading>
			</Box>
			<Spacer />

			{/* <FormControl display="flex" alignItems="center" m="3"> */}
			<Box display="flex" alignItems="center" >
				<FormLabel htmlFor="dark-toggle" pt="1" >
					Dark mode
				</FormLabel>
				
				<Switch pr="2" id="dark-toggle" onChange={toggleColorMode} >
					{colorMode === 'dark' ? 'Dark' : 'Light'}
				</Switch>
			</Box>

			{/* </FormControl> */}


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
