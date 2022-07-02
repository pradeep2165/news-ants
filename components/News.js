import React, { useEffect, useState } from "react";
import { Text, Center, Heading, Box, Stack } from "native-base";
// import NavigationTab from "./components/NavigationTab";
import NewsItems from "./NewsItems";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";
import Spin from "./Spin";

export default function News(props) {
  //   News.defaultProps = {
  //     country: "in",
  //     pageSize: 15,
  //     category: "general",
  //   };
  //   News.propTypes = {
  //     country: PropTypes.string,
  //     pageSize: PropTypes.number,
  //     category: PropTypes.string,
  //   };
  let loading = true;
  const rawdata = require("../rawdata.json");
  //   const articles = rawdata.articles;
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);

  const [totalArticles, setTotalArticles] = useState(0);
  console.log(props.category);
  //   const url = `
  //   https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;

  //   const getData = async () => {
  //     let response = await fetch(url);
  //     let parseData = await response.json();
  //     setArticles(parseData.articles);
  //     setTotalArticles(parseData.totalResults);
  //   };
  useEffect(() => {
    //   getData();
    setArticles(rawdata.articles);
  }, []);

  loading = false;
  //   console.log(articles);
  //   document.title = "NewsAnts";

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
          <Center>
            <p>
              <b>Yay! You have seen it all</b>
            </p>
          </Center>
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
