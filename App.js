import React from "react";
import News from "./components/News";
import { NativeBaseProvider, Box } from "native-base";
import NavigationTab from "./components/NavigationTab";
// import { BrowserRouter, Router, Routes } from "react-router-dom";
import Test from "./components/test";

export default function App() {
  return (
    <NativeBaseProvider>
      <Test />
      <NavigationTab />

      {/* <BrowserRouter>
                <Router>
          <Routes path="/general" element={<News />} />
        </Router>
      </BrowserRouter> */}
      <News />
    </NativeBaseProvider>
  );
}
