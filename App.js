// import React from "react";
import News from "./components/News";
import { NativeBaseProvider, Button, View } from "native-base";
import * as React from "react";
// import { Button } from "react-native";
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
        <Button children="Home" onPress={() => navigation.push("Home")} />
        <Button children="Business" onPress={() => navigation.navigate("Business")} />
        <Button children="Science" onPress={() => navigation.navigate("Science")} />
        <Button children="Health" onPress={() => navigation.navigate("Health")} />
        <Button children="Sports" onPress={() => navigation.navigate("Sports")} />
        <Button children="Technology" onPress={() => navigation.navigate("Technology")} />
        <Button children="Entertainment" onPress={() => navigation.push("Entertainment")} />
        <News apikey={apikey} country={country} category="general" changeCounty={changeCounty} pageSize={pageSize} />
      </View>
    );
  }
  function BusinessScreen({ navigation }) {
    return (
      <View>
        <Button children="Home" onPress={() => navigation.navigate("Home")} />
        <Button children="Business" onPress={() => navigation.push("Business")} />
        <Button children="Science" onPress={() => navigation.navigate("Science")} />
        <Button children="Health" onPress={() => navigation.navigate("Health")} />
        <Button children="Sports" onPress={() => navigation.navigate("Sports")} />
        <Button children="Technology" onPress={() => navigation.navigate("Technology")} />
        <Button children="Entertainment" onPress={() => navigation.navigate("Entertainment")} />
        <News apikey={apikey} country={country} category="business" pageSize={pageSize} />
      </View>
    );
  }
  function ScienceScreen({ navigation }) {
    return (
      <View>
        <Button children="Home" onPress={() => navigation.navigate("Home")} />
        <Button children="Business" onPress={() => navigation.navigate("Business")} />
        <Button children="Science" onPress={() => navigation.push("Science")} />
        <Button children="Health" onPress={() => navigation.navigate("Health")} />
        <Button children="Sports" onPress={() => navigation.navigate("Sports")} />
        <Button children="Technology" onPress={() => navigation.navigate("Technology")} />
        <Button children="Entertainment" onPress={() => navigation.navigate("Entertainment")} />
        <News apikey={apikey} country={country} category="science" pageSize={pageSize} />
      </View>
    );
  }
  function SportsScreen({ navigation }) {
    return (
      <View>
        <Button children="Home" onPress={() => navigation.navigate("Home")} />
        <Button children="Business" onPress={() => navigation.navigate("Business")} />
        <Button children="Science" onPress={() => navigation.navigate("Science")} />
        <Button children="Health" onPress={() => navigation.navigate("Health")} />
        <Button children="Sports" onPress={() => navigation.push("Sports")} />
        <Button children="Technology" onPress={() => navigation.navigate("Technology")} />
        <Button children="Entertainment" onPress={() => navigation.navigate("Entertainment")} />
        <News apikey={apikey} country={country} category="sports" pageSize={pageSize} />
      </View>
    );
  }

  function TechnologyScreen({ navigation }) {
    return (
      <View>
        <Button children="Home" onPress={() => navigation.navigate("Home")} />
        <Button children="Business" onPress={() => navigation.navigate("Business")} />
        <Button children="Science" onPress={() => navigation.navigate("Science")} />
        <Button children="Health" onPress={() => navigation.navigate("Health")} />
        <Button children="Sports" onPress={() => navigation.navigate("Sports")} />
        <Button children="Technology" onPress={() => navigation.push("Technology")} />
        <Button children="Entertainment" onPress={() => navigation.navigate("Entertainment")} />
        <News apikey={apikey} country={country} category="technology" />
      </View>
    );
  }
  function HealthScreen({ navigation }) {
    return (
      <View>
        <Button children="Home" onPress={() => navigation.navigate("Home")} />
        <Button children="Business" onPress={() => navigation.navigate("Business")} />
        <Button children="Science" onPress={() => navigation.navigate("Science")} />
        <Button children="Health" onPress={() => navigation.push("Health")} />
        <Button children="Sports" onPress={() => navigation.navigate("Sports")} />
        <Button children="Technology" onPress={() => navigation.navigate("Technology")} />
        <Button children="Entertainment" onPress={() => navigation.navigate("Entertainment")} />
        <News apikey={apikey} country={country} category="health" />
      </View>
    );
  }
  function EntertainmentScreen({ navigation }) {
    return (
      <View>
        <Button children="Home" onPress={() => navigation.navigate("Home")} />
        <Button children="Business" onPress={() => navigation.navigate("Business")} />
        <Button children="Science" onPress={() => navigation.navigate("Science")} />
        <Button children="Health" onPress={() => navigation.navigate("Health")} />
        <Button children="Sports" onPress={() => navigation.navigate("Sports")} />
        <Button children="Technology" onPress={() => navigation.navigate("Technology")} />
        <Button children="Entertainment" onPress={() => navigation.push("Entertainment")} />
        <News apikey={apikey} country={country} category="entertainment" />
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
          <Stack.Screen name="Science" component={ScienceScreen} />
          <Stack.Screen name="Health" component={HealthScreen} />
          <Stack.Screen name="Sports" component={SportsScreen} />
          <Stack.Screen name="Technology" component={TechnologyScreen} />
          <Stack.Screen name="Entertainment" component={EntertainmentScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
export default App;
