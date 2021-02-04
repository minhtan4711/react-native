import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import { Provider } from "./src/context/BlogContext";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IndexScreen">
        <Stack.Screen
          name="IndexScreen"
          component={IndexScreen}
          options={{ title: "Index Screen" }}
        />
        <Stack.Screen
          name="ShowScreen"
          component={ShowScreen}
          options={{ title: "Show Screen" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    //tat ca component dung data thi phai la con cua provider
    <Provider>
      <App />
    </Provider>
  );
};
