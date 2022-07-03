import React, { useEffect, useState } from "react";
import { Text, Center, Heading, Box, Stack, Select, CheckIcon } from "native-base";
import NewsItems from "./NewsItems";
import InfiniteScroll from "react-infinite-scroll-component";
import Spin from "./Spin";

export default function News(props) {
  const [loading, setLoading] = useState(true);
  const rawdata = require("../rawdata.json");
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);

  const [totalArticles, setTotalArticles] = useState(0);
  const url = `
      https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;

  const getData = async () => {
    setLoading(true);
    let response = await fetch(url);
    let parseData = await response.json();
    setArticles(articles.concat(parseData.articles));
    setLoading(false);
    setTotalArticles(parseData.totalResults);
  };
  useEffect(() => {
    getData();
    // setArticles(rawdata.articles);
  }, [page]);

  const fetchData = () => {
    setPage(page + 1);
  };

  return (
    <Box>
      <Heading textAlign="center" p="3" mt="2">
        <Text> Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} - Headlines on NewsAnts</Text>
      </Heading>
      <Center>
        <Box w="3/4" maxW="300" mt="4">
          <Select
            selectedValue={props.country}
            minWidth="200"
            accessibilityLabel={props.country}
            placeholder={props.country}
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(x) => props.changeCounty(x)}
            p="4"
          >
            <Select.Item label="India" value="in" />
            <Select.Item label="USA" value="us" />
            <Select.Item label="UAE" value="ae" />
            <Select.Item label="Argentina" value="ar" />
            <Select.Item label="Australia" value="au" />
          </Select>
        </Box>
      </Center>
      {loading && <Spin />}
      <InfiniteScroll
        dataLength={articles.length} //This is important field to render the next data
        next={fetchData}
        hasMore={articles.length < totalArticles}
        loader={<Spin />}
        endMessage={
          <Center>
            <Text>Yay! You have seen it all</Text>
          </Center>
        }
      >
        <Stack flexWrap="wrap" flexDirection={"row"} justifyContent="center">
          {articles &&
            articles.map((items, index) => {
              return <NewsItems news={items} key={index} />;
            })}
        </Stack>
      </InfiniteScroll>
    </Box>
  );
}
