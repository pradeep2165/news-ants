import React from "react";
import News from "./components/News";
import { NativeBaseProvider, Box } from "native-base";
import NavigationTab from "./components/NavigationTab";
import { BrowserRouter, Router, Rotes } from "react-router-dom";
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationTab />

      <News />
    </NativeBaseProvider>
  );
}
