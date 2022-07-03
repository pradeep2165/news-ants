// import React from "react";
import News from "./components/News";
import { NativeBaseProvider, Box, View } from "native-base";
import * as React from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function App() {
  const [country, setCountry] = React.useState("in");
  let pageSize = 18;
  const changeCounty = (e) => {
    setCountry(e);
  };

  const apikey = "c017e5b978b74f8b925d60c9d5a3c7c8";

  function HomeScreen({ navigation }) {
    return (
      <View>
        <Button title="Home" onPress={() => navigation.push("Home")} />
        <Button title="Business" onPress={() => navigation.navigate("Business")} />
        <Button title="Healthscience" onPress={() => navigation.navigate("Healthscience")} />
        <Button title="Sports" onPress={() => navigation.navigate("Sports")} />
        <Button title="Technology" onPress={() => navigation.navigate("Technology")} />
        <News apikey={apikey} country={country} category="general" key={"general"} changeCounty={changeCounty} pageSize={pageSize} />
      </View>
    );
  }
  function BusinessScreen({ navigation }) {
    return (
      <View>
        <Button title="Home" onPress={() => navigation.navigate("Home")} />
        <Button title="Business" onPress={() => navigation.push("Business")} />
        <Button title="Healthscience" onPress={() => navigation.navigate("Healthscience")} />
        <Button title="Sports" onPress={() => navigation.navigate("Sports")} />
        <Button title="Technology" onPress={() => navigation.navigate("Technology")} />
        <News apikey={apikey} country={country} category="business" pageSize={pageSize} />
      </View>
    );
  }
  function HealthscienceScreen({ navigation }) {
    return (
      <View>
        <Button title="Home" onPress={() => navigation.navigate("Home")} />
        <Button title="Business" onPress={() => navigation.navigate("Business")} />
        <Button title="Healthscience" onPress={() => navigation.push("Healthscience")} />
        <Button title="Sports" onPress={() => navigation.navigate("Sports")} />
        <Button title="Technology" onPress={() => navigation.navigate("Technology")} />
        <News apikey={apikey} country={country} category="healthscience" pageSize={pageSize} />
      </View>
    );
  }
  function SportsScreen({ navigation }) {
    return (
      <View>
        <Button title="Home" onPress={() => navigation.navigate("Home")} />
        <Button title="Business" onPress={() => navigation.navigate("Business")} />
        <Button title="Healthscience" onPress={() => navigation.navigate("Healthscience")} />
        <Button title="Sports" onPress={() => navigation.push("Sports")} />
        <Button title="Technology" onPress={() => navigation.navigate("Technology")} />
        <News apikey={apikey} country={country} category="sports" pageSize={pageSize} />
      </View>
    );
  }

  function TechnologyScreen({ navigation }) {
    return (
      <View>
        <Button title="Home" onPress={() => navigation.navigate("Home")} />
        <Button title="Business" onPress={() => navigation.navigate("Business")} />
        <Button title="Healthscience" onPress={() => navigation.navigate("Healthscience")} />
        <Button title="Sports" onPress={() => navigation.navigate("Sports")} />
        <Button title="Technology" onPress={() => navigation.push("Technology")} />
        <News apikey={apikey} country={country} category="technology" />
      </View>
    );
  }

  const Stack = createNativeStackNavigator();

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
