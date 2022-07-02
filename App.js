import React from "react";
import { Text, Link, HStack, Center, Heading, Switch, useColorMode, NativeBaseProvider, extendTheme, Container } from "native-base";
// import NavigationTab from "./components/NavigationTab";
import News from "./components/News";

export default function App() {
  return (
    <NativeBaseProvider>
      {/* <NavigationTab /> */}
      <Center>
        <Container>
          <Heading>
            <Text color="emerald.500"> NewsAnts</Text>
          </Heading>
        </Container>
      </Center>
      <News />
    </NativeBaseProvider>
  );
}
