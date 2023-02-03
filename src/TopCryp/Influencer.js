import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import token from "../lunarcrushToken";
import requests from "../Request";
import InfluencerRow from "./InfluencerRow";
import NewsRow from "./NewsRow";

function Influencer() {
  const [influencer1, setInfluencer1] = useState([]);
  const [influencer2, setInfluencer2] = useState([]);

  useEffect(() => {
    axios({
      url: requests.fetchInfluencer2,
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        setInfluencer1(res.data.data.slice(0, 5));
        setInfluencer2(res.data.data.slice(6, 11));
      })
      .catch((error) => console.log(error));
  }, []);

  // console.log(influencer);

  return (
    <Box ml="20px" mr="50px">
      <Heading fontSize="3xl" fontWeight="semibold" mb="10px">
        Influencers
      </Heading>
      <Box d="flex" borderWidth="1px" borderRadius="lg" bgColor="#11121B">
        <Box>
          {influencer1.map((doc) => (
            <InfluencerRow
              key={doc.identifier}
              avatar={doc.profile_image}
              name={doc.display_name}
              tweetName={doc.twitter_screen_name}
              followers={doc.followers}
            />
          ))}
        </Box>
        <Box>
          {influencer2.map((doc) => (
            <InfluencerRow
              key={doc.identifier}
              avatar={doc.profile_image}
              name={doc.display_name}
              tweetName={doc.twitter_screen_name}
              followers={doc.followers}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Influencer;
