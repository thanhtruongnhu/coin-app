import { Avatar } from '@chakra-ui/avatar';
import { Box, Flex, Text } from '@chakra-ui/layout';

import React from 'react';

function Message({ message, timestamp, user, userImage }) {
	console.log(userImage);

	return (
		<>
			<Flex alignItems="center">
				<Avatar
					name={user?.displayName}
					src="https://newcbdvape.com/wp-content/uploads/2019/08/null_avatar_report.jpg"
					mt="15px"
					mb="10px"
					ml="10px"
					fontWeight="500"
					border="1px gray solid"
				/>
				<Box pl="10px">
					<Flex >
						<Text>{user}</Text>
						<Text color="gray" fontWeight="300" fontSize="13px" ml="6px" mt="2px">
							{new Date(timestamp?.toDate()).toLocaleString()}
						</Text>
					</Flex>
					<Text>{message}</Text>
				</Box>
			</Flex>
		</>
	);
}

export default Message;
