import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons';
import db from '../firebase';
import Message from './Message';
import ChatInput from './ChatInput';
import { Box, Divider, Flex, Spacer, Text } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';

function Chat() {
	// useParams hook helps us to access the URL parameters from a current route.
	const { roomId } = useParams();
	const [roomDetails, setRoomDetails] = useState(null);
	const [roomMessages, setroomMessages] = useState([]); //We must initiate it as an array as it will contain multiple elements inside it (different from roomDetails, roomDetails only contains an object)
	let roomname = 'null';

	useEffect(() => {
		// Pulling room details
		if (roomId) {
			db.collection('room')
				.doc(roomId)
				.onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
		}

		// Pulling message details
		db.collection('room')
			.doc(roomId)
			.collection('messages')
			.orderBy('timestamp', 'asc')
			.onSnapshot((snapshot) =>
				setroomMessages(snapshot.docs.map((doc) => doc.data()))
			);
	}, [roomId]);

	// console.log(roomId);

	try {
		roomname = roomDetails.name;
	} catch (err) {
		roomname = roomId;
	}

	// console.log(roomMessages.map(({ message, timestamp, user, userImage }) => { }))

	return (
		<>
			<Box flex="0.7" flexGrow="1" overflowY="scroll" pb="150px">
				<Flex
					alignItems="center"
					justifyContent="space-between"
					p="20px"
					
				>
					<Box d="flex">
						<Text d="flex" textTransform="lowercase" alignItems="center">
							#{roomname}
						</Text>
						<Icon as={StarBorderOutlined} ml="10px" fontSize="18px" />
					</Box>
					<Spacer />
					<Icon as={InfoOutlined} ml="10px" fontSize="18px" />
					<Text>Details</Text>
				</Flex>
				<Divider />
				<Box>
					{roomMessages.map(({ message, timestamp, user, userImage }) => (
						<Message
							message={message}
							timestamp={timestamp}
							user={user}
							userImage={userImage}
						/>
					))}
				</Box>
				<ChatInput channelName={roomDetails?.name} channelId={roomId} />
			</Box>

			<div className="chat"></div>
		</>
	);
}

export default Chat;
