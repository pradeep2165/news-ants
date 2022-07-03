import React, { useEffect, useState } from "react";
import { Text, Center, Heading, Box, Stack, Select, CheckIcon, Button, Divider } from "native-base";
import NewsItems from "./NewsItems";
import Spin from "./Spin";

export default function News(props) {
  const [loading, setLoading] = useState(true);
  const rawdata = require("../rawdata.json");
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState(rawdata.articles);

  const [totalArticles, setTotalArticles] = useState(0);
  const url = `
      https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;

  const getData = async () => {
    setLoading(true);
    let response = await fetch(url);
    let parseData = await response.json();
    setArticles(parseData.articles);
    setLoading(false);
    setTotalArticles(parseData.totalResults);
  };
  useEffect(() => {
    getData();
    // setArticles(rawdata.articles);
  }, [page]);

  const nextClick = () => {
    setPage(page + 1);
    console.log(page);
  };
  const prevClick = () => {
    setPage(page - 1);
    console.log(page);
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

      <Stack flexWrap="wrap" flexDirection={"row"} justifyContent="center">
        {articles &&
          articles.map((items, index) => {
            return <NewsItems news={items} key={index} />;
          })}
      </Stack>
      <Divider w="100%" />
      <Stack justifyContent={"space-between"}>
        {page - 1 >= 1 && (
          <Button size="ls" variant="secondary" onPress={prevClick}>
            Prev
          </Button>
        )}
        {page + 1 <= Math.ceil(totalArticles / 18) && (
          <Button size="ls" variant="link" colorScheme="primary" onPress={nextClick}>
            Next
          </Button>
        )}
      </Stack>
    </Box>
  );
}
