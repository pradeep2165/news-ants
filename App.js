// import React from "react";
import News from "./components/News";
import { NativeBaseProvider, Box } from "native-base";
import * as React from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const country = "us";
const apikey = "jouoijlj909i090";

function HomeScreen({ navigation }) {
  return (
    <>
      <Button title="Home" onPress={() => navigation.push("Home")} />
      <Button title="Business" onPress={() => navigation.navigate("Business")} />
      <Button title="Healthscience" onPress={() => navigation.navigate("Healthscience")} />
      <Button title="Sports" onPress={() => navigation.navigate("Sports")} />
      <Button title="Technology" onPress={() => navigation.navigate("Technology")} />
      <News apikey={apikey} country={country} category="general" key={"general"} />
    </>
  );
}
function BusinessScreen({ navigation }) {
  return (
    <>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Business" onPress={() => navigation.push("Business")} />
      <Button title="Healthscience" onPress={() => navigation.navigate("Healthscience")} />
      <Button title="Sports" onPress={() => navigation.navigate("Sports")} />
      <Button title="Technology" onPress={() => navigation.navigate("Technology")} />
      <News apikey={apikey} country={country} category="business" />
    </>
  );
}
function HealthscienceScreen({ navigation }) {
  return (
    <>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Business" onPress={() => navigation.navigate("Business")} />
      <Button title="Healthscience" onPress={() => navigation.push("Healthscience")} />
      <Button title="Sports" onPress={() => navigation.navigate("Sports")} />
      <Button title="Technology" onPress={() => navigation.navigate("Technology")} />
      <News apikey={apikey} country={country} category="healthscience" />
    </>
  );
}
function SportsScreen({ navigation }) {
  return (
    <>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Business" onPress={() => navigation.navigate("Business")} />
      <Button title="Healthscience" onPress={() => navigation.navigate("Healthscience")} />
      <Button title="Sports" onPress={() => navigation.push("Sports")} />
      <Button title="Technology" onPress={() => navigation.navigate("Technology")} />
      <News apikey={apikey} country={country} category="sports" />
    </>
  );
}

function TechnologyScreen({ navigation }) {
  return (
    <>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Business" onPress={() => navigation.navigate("Business")} />
      <Button title="Healthscience" onPress={() => navigation.navigate("Healthscience")} />
      <Button title="Sports" onPress={() => navigation.navigate("Sports")} />
      <Button title="Technology" onPress={() => navigation.push("Technology")} />
      <News apikey={apikey} country={country} category="technology" />
    </>
  );
}

const Stack = createNativeStackNavigator();

function App() {
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

export default App;
