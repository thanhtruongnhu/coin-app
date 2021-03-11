import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { Box } from '@chakra-ui/react';

function Example() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<>
			<header>
				<Button onClick={toggleColorMode}>
					{colorMode === 'light' ? 'Dark' : 'Light'}
				</Button>
			</header>
			<Box
				bg="blue.100"
				p={4}
				_hover={{ transform: 'scale(1.1)' }}
				transition="300ms transform"
			>
				This is the Box
			</Box>
		</>
	);
}

export default Example;
