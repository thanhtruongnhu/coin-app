import React, { useState } from 'react';
import db from '../firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Button, IconButton } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import { Form } from 'formik';
import { chakra } from '@chakra-ui/system';
import SendIcon from '@material-ui/icons/Send';

function ChatInput({ channelName, channelId }) {
	const [input, setInput] = useState('');
	const user = useSelector(selectUser);

	console.log(channelId);

	const sendMessage = (e) => {
		e.preventDefault();

		if (channelId) {
			db.collection('room').doc(channelId).collection('messages').add({
				message: input,
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
				user: user.name,
				userImage:
					'https://newcbdvape.com/wp-content/uploads/2019/08/null_avatar_report.jpg',
			});
		}

		setInput('');
	};

	return (
		<Box
			borderRadius="20px"
			position="fixed"
			bottom="10px"
			minW="1000px"
			left="50%"
			mr="-50%"
			transform="translate(-50%, -50%)"
		>
			<chakra.form
				d="flex"
				justifyContent="center"

				// position="fixed"
				// bottom="10px"
				// w="100%"
			>
				<chakra.input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder={`Message #${channelName?.toLowerCase()}`}
					// position="fixed"
					// bottom="10px"
					w="70%"
					border="1px solid gray"
					borderRadius="3px"
					p="20px"
					bgColor="#11121B"
				/>
				<IconButton
					type="submit"
					onClick={sendMessage}
					w="66px"
					h="66px"
					icon={<SendIcon />}

				/>
			</chakra.form>
		</Box>
	);
}

export default ChatInput;
