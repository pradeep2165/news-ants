import React from "react";
import { Text, HStack, Heading, Box, Stack, Spinner } from "native-base";
// import NavigationTab from "./components/NavigationTab";
import NewsItems from "./NewsItems";

export default function News() {
  let loading = true;
  const rawdata = require("../rawdata.json");
  const articles = rawdata.articles;
  loading = false;
  console.log(articles);
  document.title = "NewsAnts";
  return (
    <Box>
      <Heading textAlign="center" bg="dark.100" p="3" color="white">
        <Text> NewsAnts</Text>
      </Heading>
      {loading && (
        <HStack space={2} justifyContent="center" mt="3">
          <Spinner accessibilityLabel="Loading posts" />
          <Heading color="dark.500" fontSize="md">
            Loading...
          </Heading>
        </HStack>
      )}

      <Stack flexWrap="wrap" flexDirection={"row"} justifyContent="center">
        {articles.map((items, index) => {
          return <NewsItems news={items} key={index} />;
        })}
      </Stack>
    </Box>
  );
}
