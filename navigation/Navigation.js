import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../src/screens/Home/Index";
import { StyleSheet, View } from "react-native";
import Login from "../src/screens/Login/Index";
import { Colors } from "../src/utils/Colors";
import Home2 from "../src/screens/Home2/Index";
import DevicesListIOS from "../src/screens/DevicesList";


const Stack = createNativeStackNavigator();

const RootNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Login">
     
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home2"
        component={Home2}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DevicesListIOS"
        component={DevicesListIOS}
        options={{
          headerShown: false,
        }}
      />
    
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <View style={{flex:1}}>
    <NavigationContainer theme={DefaultTheme} >
      <RootNavigator />
    </NavigationContainer>
    </View>
  );
};

export default Navigation;

// const styles = StyleSheet.create({
//   tabBarLabel: {
//     color: Colors.pink_Text,
//     fontSize: 10
//   },
// });
