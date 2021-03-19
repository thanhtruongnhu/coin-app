import React from 'react';
import { useColorMode } from '@chakra-ui/color-mode';
import { Box } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Stat } from '@chakra-ui/stat';
import { StatNumber } from '@chakra-ui/stat';

function currencyFormat(num) {
	return num?.toFixed(1).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

function FeatureBox({ Icon, name, value }) {
    const { colorMode, toggleColorMode } = useColorMode();

	return (
        <>
        {/* {Icon && <Icon />} */}
		<Box
			maxW="sm"
			borderWidth="1px"
			borderRadius="lg"
			overflow="hidden"
			_hover={
				colorMode === 'dark'
					? {
							fontWeight: 'bold',
							backgroundColor: '#606770',
					  }
					: {
							fontWeight: 'bold',
							backgroundColor: '#F2F2F2',
							opacity: '0.8',
					  }
			}
		>
			<Flex justifyContent="center">
				<Text fontSize="lg" fontWeight="500">
					{name}
				</Text>

                {Icon && <Icon />}
			</Flex>

			<Stat>
				<StatNumber>${currencyFormat(value)}</StatNumber>
			</Stat>
		</Box>
        </>
	);
}

export default FeatureBox;
