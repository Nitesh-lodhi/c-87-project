import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View} from "react-native";

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";
import UpdateScreen from "./screens/Updates";
const Stack=createStackNavigator()
export default function App() {
  return (

<NavigationContainer> 
<Stack.Navigator initialRouteName="Home"
 screenOptions={{headershown:false}}
>
  <stack.Screen name="Home"camponent={Homescreen}/>
  <stack.Screen name="ISSLocation"camponent={IssLocationScreen}/>
  <stack.Screen name="Meteors"camponent={MeteorScreen}/>
  <stack.Screen name="Update"camponent={UpdateScreen}/>
</Stack.Navigator>
 </NavigationContainer>
    
    );
}

