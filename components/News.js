import React from "react";
import { Text, Link, HStack, Center, Heading, Switch, useColorMode, NativeBaseProvider, extendTheme, Container, Box, Stack } from "native-base";
// import NavigationTab from "./components/NavigationTab";
import NewsItems from "./NewsItems";

export default function News() {
  const rawdata = require("../rawdata.json");
  const articles = rawdata.articles;
  console.log(articles);
  document.title = "NewsAnts";
  return (
    <Box>
      <Heading textAlign="center" bg="dark.100" p="5" color="white">
        <Text> NewsAnts</Text>
      </Heading>
      <Stack flexWrap="wrap" flexDirection={"row"} justifyContent="center">
        {articles.map((items, index) => {
          return <NewsItems news={items} key={index} />;
        })}
      </Stack>
    </Box>
  );
}
