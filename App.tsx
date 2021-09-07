/**
 * @format
 */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {changeBarColors} from 'react-native-immersive-bars';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import SystemNavigationBar from 'react-native-system-navigation-bar';

import Tabs from './src/navigation/tabs';
import {enableScreens} from 'react-native-screens';

enableScreens();

const Stack = createNativeStackNavigator();

export default function App() {
  changeBarColors(false, 'transparent', 'transparent');
  SystemNavigationBar.setNavigationBarContrastEnforced(false);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'Home'}>
          <Stack.Screen name="Home" component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
