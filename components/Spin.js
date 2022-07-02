import React from "react";
import { HStack, Spinner, Heading } from "native-base";

export default function Spin() {
  return (
    <HStack space={2} justifyContent="center" my="3">
      <Spinner accessibilityLabel="Loading posts" />
      <Heading color="dark.500" fontSize="md">
        Loading...
      </Heading>
    </HStack>
  );
}
