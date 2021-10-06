/**
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {changeBarColors} from 'react-native-immersive-bars';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SystemNavigationBar from 'react-native-system-navigation-bar';

import Tabs from './src/navigation/tabs';
import {enableScreens} from 'react-native-screens';
import {theme} from './src/theme';
import ProductPage from './src/screens/ProductPage';

const Stack = createNativeStackNavigator();

export default function App() {
  enableScreens(true);
  changeBarColors(false, 'transparent', 'transparent');
  SystemNavigationBar.setNavigationBarContrastEnforced(false);
  StatusBar.setBarStyle('dark-content');
  return (
    <GestureHandlerRootView
      style={{flex: 1, backgroundColor: theme.colors.background}}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Main" component={Tabs} />
            <Stack.Screen name="ProductPage" component={ProductPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
