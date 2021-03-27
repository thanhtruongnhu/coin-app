import { Box, Heading, Text } from '@chakra-ui/layout';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from '../Request';
import NewsRow from './NewsRow';

function News() {
	const [news, setNews] = useState([]);

	useEffect(() => {
		axios
			.get(requests.fetchFeeds)
			.then((res) => {
				setNews(res.data.data.slice(0, 5));
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<Box ml="20px">
			<Heading fontSize="3xl" fontWeight="semibold" mb="10px">
				Trending Posts
			</Heading>
			<Box
				borderWidth="1px"
				borderRadius="lg"
				// maxW="2xl"
				bgColor="#11121B"
			>
				{news.map((doc) => (
					<NewsRow
						key={doc.social_score}
						title={doc.title}
						description={doc.description}
						url={doc.url}
						socialScore={doc.social_score}
						// key={doc.time}
					/>
				))}
			</Box>
		</Box>
	);
}

export default News;
