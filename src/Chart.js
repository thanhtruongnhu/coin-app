import { Box, Flex, Spacer } from '@chakra-ui/layout'
import React from 'react'
import BuySellPanel from './BuySellPanel'
import ChartPanel from './ChartPanel'

function Chart() {
    return (
        <Flex flex="0.7"  justifyContent="space-between" ml="auto"
        mr="auto" >
            {/* There will be an interactive Chart here */}
            <ChartPanel />
            <Spacer />
            {/* Buy Sell Panel */}
            <BuySellPanel />
        </Flex>
    )
}

export default Chart
