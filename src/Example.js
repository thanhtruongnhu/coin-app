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
		</>
	);
}

export default Example;
