import { Box, Heading, Text } from "@chakra-ui/layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import token from "../lunarcrushToken";
import requests from "../Request";
import NewsRow from "./NewsRow";

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios({
      url: requests.fetchFeeds2,
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        setNews(res.data.data.slice(0, 5)); // MAY EDITI
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
            key={doc.lunar_id}
            title={doc.body}
            description={doc.body}
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
