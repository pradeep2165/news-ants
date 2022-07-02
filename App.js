// import React from "react";
import News from "./components/News";
import { NativeBaseProvider, Box } from "native-base";
import NavigationTab from "./components/NavigationTab";
// import Test from "./components/test";

// export default function App() {
//   return (
//     <NativeBaseProvider>
//       <Test />
//       <NavigationTab />
//       <News />
//     </NativeBaseProvider>
//   );
// }
// In App.js in a new project

import * as React from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen({ navigation }) {
  return (
    <>
      <Button title="Business" onPress={() => navigation.navigate("Business")} />
      <Button />
      <Button title="Healthscience" onPress={() => navigation.navigate("Healthscience")} />
      <Button />
      <Button title="Sports" onPress={() => navigation.navigate("Sports")} />
      <Button />
      <Button title="Technology" onPress={() => navigation.navigate("Technology")} />
      <Button />
      <News />
    </>
  );
}
function BusinessScreen({ navigation }) {
  return (
    <>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button />
      <Button title="Healthscience" onPress={() => navigation.navigate("Healthscience")} />
      <Button />
      <Button title="Sports" onPress={() => navigation.navigate("Sports")} />
      <Button />
      <Button title="Technology" onPress={() => navigation.navigate("Technology")} />
      <Button />
      <News />
    </>
  );
}
function HealthscienceScreen({ navigation }) {
  return (
    <>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button />
      <Button title="Business" onPress={() => navigation.navigate("Business")} />
      <Button />
      <Button title="Sports" onPress={() => navigation.navigate("Sports")} />
      <Button />
      <Button title="Technology" onPress={() => navigation.navigate("Technology")} />
      <Button />
      <News />
    </>
  );
}
function SportsScreen({ navigation }) {
  return (
    <>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button />
      <Button title="Business" onPress={() => navigation.navigate("Business")} />
      <Button />
      <Button title="Healthscience" onPress={() => navigation.navigate("Healthscience")} />
      <Button />
      <Button title="Technology" onPress={() => navigation.navigate("Technology")} />
      <Button />
      <News />
    </>
  );
}

function TechnologyScreen({ navigation }) {
  return (
    <>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button />
      <Button title="Business" onPress={() => navigation.navigate("Business")} />
      <Button />
      <Button title="Healthscience" onPress={() => navigation.navigate("Healthscience")} />
      <Button />
      <Button title="Sports" onPress={() => navigation.navigate("Sports")} />
      <Button />
      <News />
    </>
  );
}

const Stack = createNativeStackNavigator();

function Test() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Business" component={BusinessScreen} />
          <Stack.Screen name="Healthscience" component={HealthscienceScreen} />
          <Stack.Screen name="Sports" component={SportsScreen} />
          <Stack.Screen name="Technology" component={TechnologyScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default Test;
