import { Box, Flex } from "@chakra-ui/layout";
// import './App.css';
import { Switch, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import { AnimatePresence } from "framer-motion";
import PortFolio from "./Pages/PortFolio";
import Sidebar from "./Sidebar";
import { DarkMode, useColorMode } from "@chakra-ui/color-mode";
import { useDispatch } from "react-redux";
import { dark, light } from "./features/hoverthemeSlice";
import { useEffect } from "react";
import ChartPage from "./Pages/ChartPage";
import TopCryp from "./Pages/TopCryp";
import Chat from "./Chat/Chat";
import axios from "axios";
import requests from "./Request";
import { update } from "./features/allCoinSlice";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import token from "./lunarcrushToken";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch();

  useEffect(() => {
    // if (colorMode === 'dark') {
    dispatch(dark());
    // } else {
    // 	dispatch(light());
    // }
  }, [dispatch]);

  useEffect(() => {
    function edit(coinapi) {
      let newCoin = {
        value: coinapi.s,
        label: coinapi.n,
      };
      console.log(newCoin);
      let coin = Object.assign(coinapi, newCoin);
      return coin;
    }

    // OLD::
    // axios
    //   .get(requests.fetchAllCoins)
    //   .then((res) => {
    //     dispatch(update(res.data.data.slice(0, 200).map((coin) => edit(coin))));
    //     // console.log(res.data.data.slice(0, 200));
    //   })
    //   .catch((error) => console.log(error));

    axios({
      url: "https://lunarcrush.com/api3/coins?sort=market_cap&limit=100",
      headers: {
        'Authorization': token,
      },
    })
      .then((res) => {
        dispatch(update(res.data.data.slice(0, 100).map((coin) => edit(coin))));
      })
      .catch((error) => console.log(error));
  }, [dispatch]);

  return (
    <ChakraProvider
      theme={extendTheme({
        config: {
          useSystemColorMode: false,
          initialColorMode: "dark",
        },
      })}
    >
      <Header />
      <Box
        d="flex"
        h="100vh"
        //  h="100%"
      >
        <Sidebar />

        <Switch>
          <Route path="/TopCrypto">
            <TopCryp />
          </Route>
          <Route path="/Chart">
            <ChartPage />
          </Route>
          <Route path="/PortFolio">
            <PortFolio />
          </Route>
          <Route path="/:roomId">
            <Chat />
          </Route>
          <Route exact path="/">
            <PortFolio />
          </Route>
        </Switch>
      </Box>

      {/* Switch: LoginScreen */}
      {/* Switch: Chat Channels */}
    </ChakraProvider>
  );
}

export default App;
