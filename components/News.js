import React, { useEffect, useState } from "react";
import { Text, HStack, Heading, Box, Stack } from "native-base";
// import NavigationTab from "./components/NavigationTab";
import NewsItems from "./NewsItems";
import InfiniteScroll from "react-infinite-scroll-component";
import Spin from "./Spin";

export default function News() {
  let loading = true;
  const rawdata = require("../rawdata.json");
  //   const articles = rawdata.articles;
  const [articles, setArticles] = useState([]);
  const [totalArticles, setTotalArticles] = useState(0);
  const url = `
  https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c017e5b978b74f8b925d60c9d5a3c7c8`;

  const getData = async () => {
    let response = await fetch(url);
    let parseData = await response.json();
    setArticles(parseData.articles);
    setTotalArticles(parseData.totalResults);
  };
  useEffect(() => {
    getData();
  }, []);

  loading = false;
  console.log(articles);
  document.title = "NewsAnts";

  const fetchData = () => {};
  return (
    <Box>
      <Heading textAlign="center" bg="dark.100" p="3" color="white">
        <Text> NewsAnts</Text>
      </Heading>
      {loading && <Spin />}

      <InfiniteScroll
        dataLength={articles.length} //This is important field to render the next data
        next={fetchData}
        hasMore={articles.length < totalArticles}
        loader={<Spin />}
        endMessage={
          <p>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <Stack flexWrap="wrap" flexDirection={"row"} justifyContent="center">
          {articles.map((items, index) => {
            return <NewsItems news={items} key={index} />;
          })}
        </Stack>
      </InfiniteScroll>
    </Box>
  );
}
