import { View, Text, TouchableOpacity } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Gen1 from "./screens/Gen1";
import Gen2 from "./screens/Gen2";

const Stack = createStackNavigator()

const screenOptions = {
  headerShown: false,
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouterName='HomeScreen' screenOptions={screenOptions}>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='Gen1' component={Gen1}/>
        <Stack.Screen name='Gen2' component={Gen2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
