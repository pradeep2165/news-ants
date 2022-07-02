import React from "react";
import { Text, Link, HStack, Center, Heading, Switch, useColorMode, NativeBaseProvider, extendTheme, Container } from "native-base";
// import NavigationTab from "./components/NavigationTab";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      {/* <NavigationTab /> */}
      <Center>
        <Container>
          <Heading>
            A component library for the
            <Text color="emerald.500"> React Ecosystem</Text>
          </Heading>
          <Text mt="3" fontWeight="medium">
            NativeBase is a simple, modular and accessible component library that gives you building blocks to build you React applications.
          </Text>
        </Container>
      </Center>
      ;
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch isChecked={colorMode === "light"} onToggle={toggleColorMode} aria-label={colorMode === "light" ? "switch to dark mode" : "switch to light mode"} />
      <Text>Light</Text>
    </HStack>
  );
}
