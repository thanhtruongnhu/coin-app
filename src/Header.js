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

function Header() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Flex borderBottom="1px solid ">
			<LinkBox ml="3" mt="3">
				<Heading size="md">
					<LinkOverlay href="#">The Dragon Estacy</LinkOverlay>
				</Heading>
			</LinkBox>
			<Spacer />

			{/* <FormControl display="flex" alignItems="center" m="3"> */}
			{/* <Box display="flex" alignItems="center">
				<FormLabel htmlFor="dark-toggle" pt="1">
					Dark mode
				</FormLabel>

				<Switch
					pr="2"
					id="dark-toggle"
					onChange={toggleColorMode}
					isChecked={colorMode === 'dark' ? true : false}
				></Switch>
			</Box> */}

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
		</Flex>
	);
}

export default Header;
