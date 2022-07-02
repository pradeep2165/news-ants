import React from "react";
import { Text, Link, HStack, Center, Heading, Switch, useColorMode, NativeBaseProvider, extendTheme, Container } from "native-base";
// import NavigationTab from "./components/NavigationTab";

export default function NewsItems() {
  return (
    <Center>
      <Container>
        <Heading>
          <Text color="emerald.500"> NewsAnts</Text>
        </Heading>
      </Container>
    </Center>
  );
}
