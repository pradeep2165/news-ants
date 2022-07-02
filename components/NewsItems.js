import React from "react";

import { Link, Box, Button, Image, AspectRatio, Stack, HStack, Text, Center, Heading } from "native-base";
// import NavigationTab from "./components/NavigationTab";

export default function NewsItems(props) {
  const news = props.news;
  return (
    <Box alignItems="center" mt="2" mx="2">
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: "gray.50",
        }}
      >
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={news.urlToImage} alt="image" />
          </AspectRatio>
          <Center
            bg="violet.500"
            _dark={{
              bg: "violet.400",
            }}
            _text={{
              color: "warmGray.50",
              fontWeight: "700",
              fontSize: "xs",
            }}
            position="absolute"
            bottom="0"
            px="3"
            py="1.5"
          >
            {news.source.name ? news.source.name : ""}
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {news.title}
            </Heading>
            <Text
              fontSize="xs"
              _light={{
                color: "violet.500",
              }}
              _dark={{
                color: "violet.400",
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            ></Text>
          </Stack>
          <Text fontWeight="400">{news.description}</Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
                fontWeight="400"
              >
                By {news.author ? news.author : "Unkhow"} on {news.publishedAt ? new Date(news.publishedAt).toGMTString() : ""}
              </Text>
            </HStack>
          </HStack>
        </Stack>
        <Link href={news.url} mx="2" my="2">
          <Button size="sm" bg="dark.200">
            More...
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
