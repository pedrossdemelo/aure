/**
 * @format
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Tabs from './src/navigation/tabs';

const Stack = createStackNavigator();

import SystemNavigationBar from 'react-native-system-navigation-bar';
import changeBarColors from 'react-native-immersive-bars';

export default function App() {
  SystemNavigationBar.setNavigationColor('#F8F1EA', false);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
