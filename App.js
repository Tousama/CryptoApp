import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { Provider } from "react-redux";
import store from "./src/components/redux/store";
import Detail from "./src/pages/Detail";
import Home from "./src/pages/Home";
import List from "./src/pages/List";
import SignIn from "./src/pages/SignIn";
import SignUp from "./src/pages/SignUp";

const Stack = createNativeStackNavigator();

const App = () => {
  if (Platform.OS === "android") {
    const notch = StatusBar.currentHeight > 24;
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="List" component={List} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;