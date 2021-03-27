import { Box } from '@chakra-ui/layout';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Banner from '../TopCryp/Banner';
import Row from '../TopCryp/Row';

function TopCryp() {


    return (
        <Box flex="0.7" flexGrow="1">
            <Banner />
            <Row />
        </Box>
    )
}

export default TopCryp
