import React from "react";
import { Text, Link, HStack, Center, Heading, Switch, useColorMode, NativeBaseProvider, extendTheme, Container } from "native-base";
// import NavigationTab from "./components/NavigationTab";
import NewsItems from "./NewsItems";

export default function News() {
  return (
    <>
      <Center>
        <Container>
          <Heading>
            <Text color="emerald.500"> NewsAnts</Text>
          </Heading>
        </Container>
      </Center>
      <NewsItems />
    </>
  );
}
