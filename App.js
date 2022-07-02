import React from "react";
import { NativeBaseProvider, Container } from "native-base";
// import NavigationTab from "./components/NavigationTab";
import News from "./components/News";

export default function App() {
  return (
    <NativeBaseProvider>
      <News />
    </NativeBaseProvider>
  );
}
