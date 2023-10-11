import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./src/screens/home";
import { Splash } from "./src/components/splash";
import { StatusBar } from "react-native";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="rgb(131, 87, 229)"
        translucent={false}
        barStyle="light-content"
      />

      <Stack.Navigator>
        <Stack.Screen
          name="inicial"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
