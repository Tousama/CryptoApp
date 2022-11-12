import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import { Platform, StatusBar } from 'react-native';
import Detail from "./src/pages/Detail";
import Home from "./src/pages/Home";
import List from "./src/pages/List";

const Stack = createNativeStackNavigator();

const App = () => {
  if (Platform.OS === "android") {
    const notch = StatusBar.currentHeight>24;
  }
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="List" component={List}/>
        <Stack.Screen name="Detail" component={Detail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;